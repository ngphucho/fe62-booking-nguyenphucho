import React from "react";
import { dateToToday } from "../../utils/timeFunction";

export default function ChiTietPhimPhongVe({ chiTietPhim }) {
  // console.log("ChiTietPhimPhongVe", chiTietPhim);
  return chiTietPhim ? (
    <>
      <div className="chiTietPhim text-center">
        {/* <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} /> */}
        <div className="tenPhim">{chiTietPhim.tenPhim}</div>
        <div className="tenCumRap">{chiTietPhim.tenCumRap}</div>
        <div className="thoiGianChieu">
          <span className="ngayChieu">
            {dateToToday(chiTietPhim.ngayChieu)}
          </span>{" "}
          - <span className="gioChieu">{chiTietPhim.gioChieu}</span> -{" "}
          <span className="tenRap">{chiTietPhim.tenRap}</span>
        </div>
      </div>
    </>
  ) : null;
}
