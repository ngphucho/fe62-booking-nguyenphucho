import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function ThongTinLichChieuHeThongRapLV3({ danhSachPhim }) {
  console.log(danhSachPhim);
  const today = new Date("2019-01-01T16:10:00").toISOString().slice(0, 10);
  const history = useHistory();
  return danhSachPhim ? (
    <div className="container danhSachPhimBox">
      <div className="row">
        {danhSachPhim.map((item) => (
          <div
            className="border-bottom py-2 col-12"
            key={item.maPhim}
            onClick={() => {
              history.push("/movie/" + item.maPhim);
            }}
          >
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  style={{ height: "120px" }}
                  src={item.hinhAnh}
                  alt={item.tenPhim}
                />
              </div>
              <div className="col-9">
                <h6>{item.tenPhim}</h6>
                <div className="d-flex flex-wrap">
                  {/* Danh sach thoi gian chieu */}
                  {item.lstLichChieuTheoPhim.map((subItem) => {
                    const showingDate = subItem.ngayChieuGioChieu.slice(0, 10);
                    if (today === showingDate) {
                      return (
                        <div
                          style={{ fontSize: "1.5em" }}
                          className="text-success p-2"
                        >
                          {subItem.ngayChieuGioChieu.slice(11, 16)}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
