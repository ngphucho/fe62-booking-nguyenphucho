import React from "react";

export default function ChiTietPhimPhongVe({ chiTietPhim }) {
  // console.log("ChiTietPhimPhongVe", chiTietPhim);
  return chiTietPhim ? (
    <div>
      <div className="row">
        <div className="col-md-6">
          {/* <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} /> */}
          <div>Tên phim: {chiTietPhim.tenPhim}</div>
          <div>Ngày chiếu: {chiTietPhim.ngayChieu}</div>
          <div>Giờ chiếu: {chiTietPhim.gioChieu}</div>
        </div>
        <div className="col-md-6">
          
          <div>Tên cụm rạp: {chiTietPhim.tenCumRap}</div>
          <div>Rạp: {chiTietPhim.tenRap}</div>
          <div>
            Địa chỉ: {chiTietPhim.diaChi}{" "}
            <span style={{ color: "#ff0000" }}> [Xem bản đồ]</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Nulllll</div>
  );
}
