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

//import action
import { pageTitleChange } from "../../actions/pageTitle";

export default function AdminQuanLyNguoiDung() {
  const dispatch = useDispatch();
  const [trangHienTai, setTrangHienTai] = useState(1);
  const { soPhanTuTrenTrang, MaNhom } = useSelector(
    (state) => state.thongTinPhanTrangNguoiDung
  );
  const { danhSachNguoiDungPhanTrang } = useSelector(
    (state) => state.danhSachNguoiDungPhanTrang
  );

  //set activePage
  useEffect(() => {
    dispatch(
      pageTitleChange({
        activePage: 1,
        pageTitle: "",
      })
    );
  }, []);

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
    <div className="adminQuanLyNguoiDung">
      <div className="thanhCongCuBox">
        <ThanhCongCuQuanLyNguoiDung />
      </div>
      <div className="bangBox customScrollbar">
        <BangDanhSachNguoiDung />
      </div>
      {danhSachNguoiDungPhanTrang ? (
        <PhanTrang
          soLuongRender={6}
          trangHienTai={trangHienTai}
          tongSoTrang={danhSachNguoiDungPhanTrang.totalPages}
          setTrangHienTai={setTrangHienTai}
          link="/admin/quan-ly-nguoi-dung/"
        />
      ) : null}

      {/* form dang ky */}
      <Popup>
        <FormDangKy />
      </Popup>
    </div>
  );
}
