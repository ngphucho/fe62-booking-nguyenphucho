import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import quanLyNguoiDungAPI from "../../../services/quanLyNguoiDungAPI";
import { timKiemNguoiDungPhanTrang } from "../../../actions/quanLyNguoiDung";
import { popupModalToggle } from "../../../actions/popupModal";
import { changeFormData } from "../../../actions/formData";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

//tooltip
import ReactTooltip from "react-tooltip";

import { snackbarThongBaoToggle } from "../../../actions/snackbarThongBao";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";

export default function BangDanhSachNguoiDung() {
  const dispatch = useDispatch();

  const { danhSachLoaiNguoiDung } = useSelector(
    (state) => state.danhSachLoaiNguoiDung
  );

  const { danhSachNguoiDungPhanTrang, isLoading, error } = useSelector(
    (state) => state.danhSachNguoiDungPhanTrang
  );

  const { soPhanTuTrenTrang, MaNhom } = useSelector(
    (state) => state.thongTinPhanTrangNguoiDung
  );

  const [isOpenDialogConfirm, setIsOpenDialogConfirm] = useState(false); //dong mo dialogConfirm khi them xoa sua

  // let action = ""; //action = "edit" // "add" // delete // ""
  const [action, setAction] = useState("");
  // let selectedNguoiDung = null; //nguoi dung dang duoc chon de sua // xoa
  const [selectedNguoiDung, setSelectedNguoiDung] = useState(null);
  // let danhSachPhimSorted = [];

  //close dialogConfirm
  const closeDialogConfirm = () => {
    setIsOpenDialogConfirm(false);
    setAction("");
    setSelectedNguoiDung(null);
  };
  //open dialogConfirm
  const openDialogConfirm = () => {
    setIsOpenDialogConfirm(true);
  };

  // xóa người dùng
  const xoaNguoiDung = async () => {
    try {
      const { data } = await quanLyNguoiDungAPI.xoaNguoiDung(
        selectedNguoiDung.taiKhoan
      );
      dispatch(
        snackbarThongBaoToggle({
          message: "Xóa thành công",
          type: "success",
          autoHideTime: 3000,
        })
      );
      // alert("xoa thanh cong: " + JSON.stringify(data));
      let soTrang =
        danhSachNguoiDungPhanTrang.count === 1
          ? danhSachNguoiDungPhanTrang.currentPage - 1
          : danhSachNguoiDungPhanTrang.currentPage;
      if (soTrang === 0) {
        soTrang = 1;
      }
      dispatch(
        timKiemNguoiDungPhanTrang({
          MaNhom,
          tuKhoa: danhSachNguoiDungPhanTrang.tuKhoa,
          soTrang,
          soPhanTuTrenTrang,
        })
      );
    } catch (error) {
      dispatch(
        snackbarThongBaoToggle({
          message: error.response.data,
          type: "error",
          autoHideTime: 3000,
        })
      );
      // alert(error);
    }
  };

  const handleXoaNguoiDung = (nguoiDung) => {
    setAction("delete");
    setSelectedNguoiDung(nguoiDung);
    openDialogConfirm();
  };

  //handle truoc khi xoa nguoi dung
  const handleCloseDialog = (status) => {
    if (status === false) {
      closeDialogConfirm();
      return;
    }
    switch (action) {
      case "delete": {
        xoaNguoiDung();
        break;
      }
      default:
        break;
    }
    closeDialogConfirm();
  };

  if (error) {
    return <div>Lỗi</div>;
  }
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="bangDanhSachNguoiDung">
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số ĐT</th>
            <th>Loại người dùng</th>
            <th>{/* nút xóa + sửa */}</th>
          </tr>
        </thead>
        <tbody>
          {danhSachNguoiDungPhanTrang?.items.map((item, index) => (
            <tr key={index}>
              <th scope="row">
                {index +
                  1 +
                  (danhSachNguoiDungPhanTrang.currentPage - 1) *
                    soPhanTuTrenTrang}
              </th>
              <td>{item.taiKhoan}</td>
              <td>{item.hoTen}</td>
              <td>{item.email}</td>
              <td>{item.soDt}</td>
              <td>{item.maLoaiNguoiDung}</td>
              <td>
                <div className="actionCell">
                  {/* <NutXoa /> */}
                  <button
                    data-tip="Xóa người dùng"
                    className="btn delete"
                    onClick={() => {
                      handleXoaNguoiDung(item);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                  {/* <NutSua /> */}
                  <button
                    data-tip="Sửa thông tin người dùng"
                    className="btn edit"
                    onClick={() => {
                      dispatch(
                        popupModalToggle({
                          title: "SỬA THÔNG TIN NGƯỜI DÙNG",
                        })
                      );
                      dispatch(
                        changeFormData({
                          button: "Sửa",
                          type: "edit",
                          values: item,
                        })
                      );
                    }}
                  >
                    <EditIcon />
                  </button>
                  <ReactTooltip />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Dialog confirm truoc khi xoa */}
      <Dialog
        open={isOpenDialogConfirm}
        onClose={() => {
          handleCloseDialog(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Xóa Người Dùng"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Xác nhận xóa người dùng???
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseDialog(false);
            }}
            color="primary"
          >
            Hoàn tác
          </Button>
          <Button
            onClick={() => {
              handleCloseDialog(true);
            }}
            color="primary"
            autoFocus
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
