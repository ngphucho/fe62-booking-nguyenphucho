import React, { useState, useEffect } from "react";
import { chairToggle } from "../../actions/quanLyDatVe";
import { useDispatch, useSelector } from "react-redux";
import PhuongThucThanhToan from "../../components/PhuongThucThanhToan";
import quanLyDatVeAPI from "../../services/quanLyDatVeAPI";

export default function ChiTietDatGhe({ danhSachPhongVe, isSuccess, setSuccess }) {
  const [selected, setSelected] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { thongTinPhim, danhSachGhe } = danhSachPhongVe;
  const danhSachGheDangChon = [];
  let tongTien = 0;
  danhSachGhe.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell) {
        if (cell.dangChon) {
          danhSachGheDangChon.push({ ...cell, x, y });
          tongTien += cell.giaVe;
          // console.log(danhSachGheDangChon);
        }
      }
    });
  });

  const toggle = (x, y) => {
    dispatch(chairToggle(x, y));
  };

  const datVe = async () => {
    const maLichChieu = thongTinPhim.maLichChieu;
    const danhSachVe = danhSachGheDangChon.map((item) => ({
      maGhe: item.maGhe,
      giaVe: item.giaVe,
    }));
    const taiKhoanNguoiDung = userInfo.taiKhoan;
    const values = { maLichChieu, danhSachVe, taiKhoanNguoiDung };
    console.log(values);
    try {
      const { data } = await quanLyDatVeAPI.datVe(values);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chiTietDatGhe">
      <div className="thonTinPhim">
        <div>{thongTinPhim.tenPhim}</div>
        <div>
          {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
        </div>
        <div>
          {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
        </div>
      </div>
      <div className="danhSachGhe">
        <div>Danh Sach Ghe</div>
        {danhSachGheDangChon.map((item, index) => (
          <div key={item.maGhe} className="row">
            <div className="col-7">
              {index + 1 + ". "}
              {item.tenGhe}({item.loaiGhe})
            </div>
            <div className="col-3">{item.giaVe}</div>
            <div
              className="col-2"
              onClick={() => {
                toggle(item.x, item.y);
              }}
            >
              Hủy
            </div>
          </div>
        ))}
        <div>Tổng tiền: {tongTien}</div>
      </div>
      <div className="thongTinKhachHang">
        <div>Họ tên: {userInfo.hoTen}</div>
        <div>Tên đăng nhập: {userInfo.taiKhoan}</div>
        <div>Email: {userInfo.email}</div>
      </div>
      <div className="phuongThucThanhToan">
        <div>Phương thức thanh toán</div>
        <PhuongThucThanhToan selected={selected} setSelected={setSelected} />
      </div>
      <div className="thanToan">
        <button
          disabled={!danhSachGheDangChon.length || !selected}
          className="btn btn-success"
          onClick={() => {
            datVe();
          }}
        >
          Thanh Toán
        </button>
      </div>
    </div>
  );
}
