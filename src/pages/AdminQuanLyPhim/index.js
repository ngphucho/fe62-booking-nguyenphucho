import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// component
import ThanhCongCuQuanLyPhim from "../../components/Admin/AdminPhim/ThanhCongCuQuanLyPhim";
import BangDanhSachPhim from "../../components/Admin/AdminPhim/BangDanhSachPhim";
import PhanTrang from "../../components/PhanTrang";
import { listSortCheckBox } from "../../components/Admin/AdminPhim/ThanhCongCuQuanLyPhim/TimKiemPhim/listSortCheckBox";
import Popup from "../../components/Controls/Popup";
import FormPhim from "../../components/Controls/FormPhim";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";

// import action
import { pageTitleChange } from "../../actions/pageTitle";
import { layDanhSachPhim } from "../../actions/movies";
import { snackbarThongBaoToggle } from "../../actions/snackbarThongBao";

// import services
import quanLyPhimAPI from "../../services/quanLyPhimAPI";

// import khac
import qs from "qs";
import { appLayoutData } from "../../utils/myData";
import { cloneArrayObject } from "../../utils/myFunction";

export default function AdminQuanLyPhim() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const isFirstRef = useRef(true);
  const [danhSachPhimSorted, setDanhSachPhimSorted] = useState([]);
  const [danhSachPhimHienThi, setDanhSachPhimHienThi] = useState([]);
  const [trangHienTai, setTrangHienTai] = useState(1);
  const [tongSoTrang, setTongSoTrang] = useState(1);
  const [danhGia, setDanhGia] = useState([1, 10]);
  const [denNgay, setDenNgay] = useState("");
  const [tuNgay, setTuNgay] = useState("");
  const [tenPhim, setTenPhim] = useState("");
  const [listCheckBox, setListCheckBox] = useState(
    cloneArrayObject(listSortCheckBox)
  );
  const { type, button, values } = useSelector((state) => state.formData);

  const [isOpenDialogConfirm, setIsOpenDialogConfirm] = useState(false); //dong mo dialogConfirm khi them xoa sua
  const { danhSachPhim, isLoading, error } = useSelector(
    (state) => state.danhSachPhim
  );
  // let action = ""; //action = "edit" // "add" // delete // ""
  const [action, setAction] = useState("");
  // let selectedPhim = null; //phim dang duoc chon de sua // xoa
  const [selectedPhim, setSelectedPhim] = useState(null);
  // let danhSachPhimSorted = [];
  //
  const soPhanTuTrenTrang = 5;
  const MaNhom = appLayoutData.maNhom;
  //

  //close dialogConfirm
  const closeDialogConfirm = () => {
    setIsOpenDialogConfirm(false);
    setAction("");
    setSelectedPhim(null);
  };
  //open dialogConfirm
  const openDialogConfirm = () => {
    setIsOpenDialogConfirm(true);
  };

  //lam moi danh sach phim khi them xoa sua
  const lamMoiDanhSachPhim = () => {
    try {
      dispatch(layDanhSachPhim());
    } catch (error) {
      dispatch(
        snackbarThongBaoToggle({
          message: "Tải lại trang bị lỗi",
          type: "error",
          autoHideTime: 3000,
        })
      );
    }
  };

  //ham chuan bi truoc khi xoa phim
  const xoaPhim = (itemPhim) => {
    setAction("delete");
    setSelectedPhim(itemPhim);
    openDialogConfirm();
  };

  //ham xoa phim
  const handleXoaPhim = async () => {
    try {
      await quanLyPhimAPI.xoaPhim(selectedPhim.maPhim);
      dispatch(
        snackbarThongBaoToggle({
          message: "Xóa thành công",
          type: "success",
          autoHideTime: 3000,
        })
      );
      //tai lai danh sach phim khi xoa phim thanh cong
      lamMoiDanhSachPhim();
    } catch (error) {
      console.log(error);
      // console.log(error.response);
      // console.log(selectedPhim);
      dispatch(
        snackbarThongBaoToggle({
          message: error.response.data,
          type: "error",
          autoHideTime: 3000,
        })
      );
    }
  };

  //ham them phim
  const themPhim = async (values, formData) => {
    try {
      const { data } = await quanLyPhimAPI.themPhimUploadHinh(formData);
      // console.log(data);
      const newValues = {
        maPhim: data.maPhim,
        tenPhim: data.tenPhim,
        biDanh: data.biDanh,
        trailer: data.trailer,
        hinhAnh: data.hinhAnh,
        moTa: data.moTa,
        maNhom: data.maNhom,
        ngayKhoiChieu: values.ngayKhoiChieu,
        danhGia: values.danhGia,
      };
      // console.log(newValues);
      try {
        quanLyPhimAPI.capNhatPhim(newValues);
      } catch (err) {
        console.log(err.response);
      }
      dispatch(
        snackbarThongBaoToggle({
          message: "Thêm phim thành công",
          type: "success",
          autoHideTime: 3000,
        })
      );
      //load lai danh sach phim
      lamMoiDanhSachPhim();
    } catch (error) {
      console.log(error);
      dispatch(
        snackbarThongBaoToggle({
          message: error.response.data,
          type: "error",
          autoHideTime: 3000,
        })
      );
    }
  };

  const capNhatPhim = async (values, formData) => {
    if (
      typeof formData.get("hinhAnh") === "object" &&
      formData.get("hinhAnh") !== null
    ) {
      // co cap nhat hinh
      try {
        const data = await quanLyPhimAPI.capNhatPhimUpload(formData);
        // console.log(data);
        dispatch(
          snackbarThongBaoToggle({
            message: "Cập nhật phim thành công",
            type: "success",
            autoHideTime: 3000,
          })
        );
        window.location.reload();
      } catch (error) {
        try {
          dispatch(
            snackbarThongBaoToggle({
              message: error.response.data,
              type: "error",
              autoHideTime: 3000,
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      // console.log("khong cap nhat hinh");
      try {
        const data = await quanLyPhimAPI.capNhatPhim(values);
        // console.log(data);
        dispatch(
          snackbarThongBaoToggle({
            message: "Cập nhật phim thành công",
            type: "success",
            autoHideTime: 3000,
          })
        );
        window.location.reload();
      } catch (error) {
        try {
          dispatch(
            snackbarThongBaoToggle({
              message: error.response.data,
              type: "error",
              autoHideTime: 3000,
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleFormSubmit = ({ values, type }) => {
    // console.log(values);
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    switch (type) {
      case "add": {
        themPhim(values, formData);
        break;
      }
      case "edit": {
        capNhatPhim(values, formData);
        break;
      }
      default:
        break;
    }
  };

  // Them lich chieu
  const themLichChieu = (maPhim) => {
    history.push("/admin/quan-ly-lich-chieu?maPhim=" + maPhim);
  };

  const handleCloseDialog = (status) => {
    if (status === false) {
      closeDialogConfirm();
      return;
    }
    switch (action) {
      case "delete": {
        handleXoaPhim();
        break;
      }
      default:
        break;
    }
    closeDialogConfirm();
  };

  //

  //set activePage
  useEffect(() => {
    dispatch(
      pageTitleChange({
        activePage: 2,
        pageTitle: "",
      })
    );
  }, []);

  useEffect(() => {
    const thongTinTrang = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (thongTinTrang) {
      // console.log(JSON.stringify(thongTinTrang));
      if (
        qs.stringify({ tenPhim, tuNgay, denNgay, listCheckBox, danhGia }) !==
        qs.stringify({
          tenPhim: thongTinTrang.tenPhim,
          tuNgay: thongTinTrang.tuNgay,
          denNgay: thongTinTrang.denNgay,
          listCheckBox: thongTinTrang.listCheckBox,
          danhGia: thongTinTrang.danhGia,
        })
      ) {
        setTenPhim(thongTinTrang.tenPhim);
        setTuNgay(thongTinTrang.tuNgay);
        setDenNgay(thongTinTrang.denNgay);
        setListCheckBox(thongTinTrang.listCheckBox);
        setDanhGia(thongTinTrang.danhGia);
      }
      // } else {
      setTrangHienTai(+thongTinTrang.trangHienTai || 1);
      // }
    }
  }, [location]);

  useEffect(() => {
    updateSort();
    setTrangHienTai(1);
  }, [tenPhim, tuNgay, denNgay, listCheckBox, danhGia]);

  useEffect(() => {
    // console.log(danhSachPhim);
    updateSort();
  }, [danhSachPhim]);

  useEffect(() => {
    console.log("sort", danhSachPhimSorted);
    if (danhSachPhimSorted.length > 0) {
      setTongSoTrang(
        parseInt((danhSachPhimSorted.length - 1) / soPhanTuTrenTrang) + 1
      );
    }
  }, [danhSachPhimSorted]);

  //set danh sach phim duoc phan trang de xuat ra man hinh
  useEffect(() => {
    // console.log("trang hien tai", trangHienTai);
    setDanhSachPhimHienThi(
      danhSachPhimSorted.slice(
        (trangHienTai - 1) * soPhanTuTrenTrang,
        (trangHienTai - 1) * soPhanTuTrenTrang + soPhanTuTrenTrang
      )
    );
  }, [trangHienTai, danhSachPhimSorted]);

  // loc ket qua tim kiem
  const updateSort = () => {
    if (danhSachPhim) {
      console.log(danhGia, tuNgay, denNgay, listCheckBox);
      setDanhSachPhimSorted(
        danhSachPhim.filter((item) => {
          return (
            (danhGia
              ? item.danhGia >= parseInt(danhGia[0]) &&
                item.danhGia <= parseInt(danhGia[1])
              : true) &&
            (tuNgay
              ? new Date(tuNgay) <= new Date(item.ngayKhoiChieu)
              : true) &&
            (denNgay
              ? new Date(denNgay) >= new Date(item.ngayKhoiChieu)
              : true) &&
            (listCheckBox
              ? listCheckBox.some((checkbox) =>
                  checkbox.isChecked === "true"
                    ? item[checkbox.name]
                        .toString()
                        .toLowerCase()
                        .search(tenPhim.toLowerCase()) > -1
                    : false
                )
              : true)
          );
        })
      );
    }
  };

  return (
    <div>
      <ThanhCongCuQuanLyPhim />
      <BangDanhSachPhim
        danhSachPhim={danhSachPhimHienThi}
        trangHienTai={trangHienTai}
        soPhanTuTrenTrang={soPhanTuTrenTrang}
        xoaPhim={xoaPhim}
        themLichChieu={themLichChieu}
      />
      <PhanTrang
        soLuongRender={6}
        trangHienTai={trangHienTai}
        tongSoTrang={tongSoTrang}
        link="/admin/quan-ly-phim"
      />
      {/* Dialog confirm truoc khi xoa */}
      <Dialog
        open={isOpenDialogConfirm}
        onClose={() => {
          handleCloseDialog(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Xoa Phim"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Xoa phim nha
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
      {/* popup form */}
      <Popup>
        <FormPhim
          handleFormSubmit={handleFormSubmit}
          formData={{ type, button, values }}
        />
      </Popup>
    </div>
  );
}
