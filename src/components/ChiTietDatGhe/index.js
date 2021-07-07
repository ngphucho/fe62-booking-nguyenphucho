import React, { useState, useEffect } from "react";
import { chairToggle } from "../../actions/quanLyDatVe";
import { useDispatch, useSelector } from "react-redux";
import PhuongThucThanhToan from "../../components/PhuongThucThanhToan";
import quanLyDatVeAPI from "../../services/quanLyDatVeAPI";
import { formatVND } from "../../utils/myFunction";
import { snackbarThongBaoToggle } from "../../actions/snackbarThongBao";

export default function ChiTietDatGhe({
  danhSachPhongVe,
  isSuccess,
  setSuccess,
}) {
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
      dispatch(
        snackbarThongBaoToggle({
          message: "Đặt vé thành công",
          type: "success",
          autoHideTime: 3000,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chiTietDatGhe">
      <div className="thongTinPhim">
        <div className="group">Chi Tiết Phim</div>
        <div>
          <span className="label">Tên phim: </span>
          {thongTinPhim.tenPhim}
        </div>
        <div>
          <span className="label">Tên rạp: </span>
          {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
        </div>
        <div>
          <span className="label">Thời gian: </span>
          {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
        </div>
      </div>
      <div className="danhSachGhe">
        <div className="group">Danh Sách Ghế</div>
        {danhSachGheDangChon.map((item, index) => (
          <div key={item.maGhe} className="row">
            <div className="col-6">
              {index + 1 + ". "}
              {item.tenGhe}({item.loaiGhe})
            </div>
            <div className="col-4" style={{ textAlign: "right" }}>
              {formatVND(item.giaVe)}
            </div>
            <div
              className="col-2"
              style={{ paddingLeft: 0, textAlign: "right" }}
              onClick={() => {
                toggle(item.x, item.y);
              }}
            >
              Hủy
            </div>
          </div>
        ))}
        <div>Tổng tiền: {formatVND(tongTien)}</div>
      </div>
      <div className="thongTinKhachHang">
        <div className="group">Thông tin khách hàng</div>
        <div>
          <span className="label">Họ tên: </span>
          {userInfo.hoTen}
        </div>
        <div>
          <span className="label">Tên đăng nhập: </span>
          {userInfo.taiKhoan}
        </div>
        <div>
          <span className="label">Email: </span>
          {userInfo.email}
        </div>
      </div>
      <div className="phuongThucThanhToan">
        <div className="group">Phương thức thanh toán</div>
        <div className="btnPhuongThucThanhToan">
          <PhuongThucThanhToan selected={selected} setSelected={setSelected} />
        </div>
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
