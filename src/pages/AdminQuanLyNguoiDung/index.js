import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  timKiemNguoiDungPhanTrang,
  layDanhSachLoaiNguoiDung,
} from "../../actions/quanLyNguoiDung";
import PhanTrang from "../../components/PhanTrang";
import BangDanhSachNguoiDung from "../../components/Admin/BangDanhSachNguoiDung";
import ThanhCongCuQuanLyNguoiDung from "../../components/Admin/ThanhCongCuQuanLyNguoiDung";
import Popup from "../../components/Controls/Popup";
import FormDangKy from "../../components/Controls/FormDangKy";
// import SnackbarThongBao from "../../components/Controls/SnackbarThongBao";

export default function AdminQuanLyNguoiDung() {
  const dispatch = useDispatch();
  const [trangHienTai, setTrangHienTai] = useState(1);
  const { soPhanTuTrenTrang, MaNhom } = useSelector(
    (state) => state.thongTinPhanTrangNguoiDung
  );
  const { danhSachNguoiDungPhanTrang } = useSelector(
    (state) => state.danhSachNguoiDungPhanTrang
  );
  useEffect(() => {
    dispatch(layDanhSachLoaiNguoiDung());
  }, []);

  useEffect(() => {
    dispatch(
      timKiemNguoiDungPhanTrang({
        tuKhoa: danhSachNguoiDungPhanTrang?.tuKhoa,
        soTrang: trangHienTai,
        soPhanTuTrenTrang,
        MaNhom,
      })
    );
  }, [trangHienTai]);

  return (
    <div>
      <ThanhCongCuQuanLyNguoiDung />
      <BangDanhSachNguoiDung />
      {danhSachNguoiDungPhanTrang ? (
        <PhanTrang
          soLuongRender={6}
          trangHienTai={trangHienTai}
          tongSoTrang={danhSachNguoiDungPhanTrang.totalPages}
          setTrangHienTai={setTrangHienTai}
        />
      ) : null}
      <Popup>
        <FormDangKy />
      </Popup>
      {/* <SnackbarThongBao /> */}
    </div>
  );
}
