import React from "react";
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

  const xoaNguoiDung = async (taiKhoan) => {
    try {
      const { data } = await quanLyNguoiDungAPI.xoaNguoiDung(taiKhoan);
      alert("xoa thanh cong: " + JSON.stringify(data));
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
      alert(error);
    }
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
                      xoaNguoiDung(item.taiKhoan);
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
    </div>
  );
}
