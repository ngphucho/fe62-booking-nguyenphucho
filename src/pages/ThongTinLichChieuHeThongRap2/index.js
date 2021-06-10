import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-horizontal-datepicker";

export default function ThongTinLichChieuHeThongRap2({ danhSachHeThongRap }) {
  const [today, setToday] = useState(
    new Date("2019-01-01T16:10:00").toISOString().slice(0, 10)
  );
  const history = useHistory();

  const [danhSachCumRap, setDanhSachCumRap] = useState(null);
  const [danhSachPhim, setDanhSachPhim] = useState(null);

  const [heThongRapActive, setHeThongRapActive] = useState("1");
  const changeHeThongRapActive = (active) => {
    if (heThongRapActive !== active) {
      setHeThongRapActive(active);
      setCumRapActive("1");
    }
  };

  const onSelectedDay = (d) => {
    setToday(d.toISOString().slice(0, 10));
  };

  const [cumRapActive, setCumRapActive] = useState("1");
  const changeCumRapActive = (active) => {
    if (cumRapActive !== active) {
      setCumRapActive(active);
    }
  };

  useEffect(() => {
    if (danhSachHeThongRap) {
      setDanhSachCumRap(danhSachHeThongRap[0].lstCumRap);
    }
  }, [danhSachHeThongRap]);

  useEffect(() => {
    if (danhSachCumRap) {
      setDanhSachPhim(danhSachCumRap[0]?.danhSachPhim);
    }
  }, [danhSachCumRap]);

  return danhSachHeThongRap && danhSachCumRap && danhSachPhim ? (
    <div className="container">
      {/* DATE TIME PICKER */}
      <DatePicker
        getSelectedDay={onSelectedDay}
        endDate={30}
        // selectDate={new Date("2020-04-30")}
        labelFormat={"MMMM-yyyy"}
        color={"#374e8c"}
      />

      <div className="row" style={{ overflow: "auto", height: "500px" }}>
        {/* DANH SACH HE THONG RAP */}
        <div className="col-2 " style={{ overflow: "auto", height: "500px" }}>
          {danhSachHeThongRap.map((item, index) => (
            <div
              className={heThongRapActive === index + 1 + "" ? "active" : null}
              onClick={() => {
                changeHeThongRapActive(index + 1 + "");
                setDanhSachCumRap(item.lstCumRap);
              }}
            >
              <img
                className="rounded-circle w-100 normal-tab"
                src={item.logo}
                alt={item.tenHeThongRap}
              />
            </div>
          ))}
        </div>

        {/* DANH SACH CUM RAP */}
        <div className="col-3" style={{ overflow: "auto", height: "500px" }}>
          {danhSachCumRap.map((item, index) => (
            <div
              className={cumRapActive === index + 1 + "" ? "active" : null}
              onClick={() => {
                changeCumRapActive(index + 1 + "");
                setDanhSachPhim(item.danhSachPhim);
              }}
            >
              {item.maCumRap}
            </div>
          ))}
        </div>

        {/* DANH SACH PHIM */}
        <div className="col-7" style={{ overflow: "auto", height: "500px" }}>
          {danhSachPhim.map((item) => (
            // <div>{item.maPhim}</div>
            // =========
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
                          const showingDate = subItem.ngayChieuGioChieu.slice(
                            0,
                            10
                          );
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
            // =========
          ))}
        </div>
      </div>
    </div>
  ) : null;
}
