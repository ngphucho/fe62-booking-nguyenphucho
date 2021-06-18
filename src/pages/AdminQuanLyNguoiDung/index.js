import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  timKiemNguoiDungPhanTrang,
  layDanhSachLoaiNguoiDung,
} from "../../actions/quanLyNguoiDung";
import PhanTrang from "../../components/PhanTrang";
import BangDanhSachNguoiDung from "../../components/Admin/BangDanhSachNguoiDung";
import ThanhCongCuQuanLyNguoiDung from "../../components/Admin/ThanhCongCuQuanLyNguoiDung"

export default function AdminQuanLyNguoiDung() {
  const dispatch = useDispatch();
  const { soPhanTuTrenTrang, MaNhom } = useSelector(
    (state) => state.thongTinPhanTrangNguoiDung
  );

  useEffect(() => {
    dispatch(layDanhSachLoaiNguoiDung());
  }, []);

  useEffect(() => {
    dispatch(
      timKiemNguoiDungPhanTrang({
        tuKhoa: null,
        soTrang: 1,
        soPhanTuTrenTrang,
        MaNhom,
      })
    );
  }, []);

  return (
    <div>
      <ThanhCongCuQuanLyNguoiDung />
      <BangDanhSachNguoiDung />
      <PhanTrang soLuongRender={6} />
    </div>
  );
}
