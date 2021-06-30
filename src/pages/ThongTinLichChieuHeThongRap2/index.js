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

  const [cumRapActive, setCumRapActive] = useState("1");
  const changeCumRapActive = (active) => {
    if (cumRapActive !== active) {
      setCumRapActive(active);
    }
  };

  const onSelectedDay = (d) => {
    setToday(d.toISOString().slice(0, 10));
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
    <div className="container thongTinLichChieuHeThongRap2">
      {/* DATE TIME PICKER */}
      <DatePicker
        getSelectedDay={onSelectedDay}
        endDate={30}
        selectDate={new Date()}
        labelFormat={"MM-yyyy"}
        color={"#374e8c"}
      />

      <div className="row" style={{ overflow: "hidden" }}>
        {/* DANH SACH HE THONG RAP */}
        <div className="col-sm-1 listHeThongRap customScrollbar">
          {danhSachHeThongRap.map((item, index) => (
            <div
              key={index}
              className={
                "heThongRapBox cursorPointer opacityHalf" +
                (heThongRapActive === index + 1 + "" ? " active" : "")
              }
              onClick={() => {
                changeHeThongRapActive(index + 1 + "");
                setDanhSachCumRap(item.lstCumRap);
              }}
            >
              <div className="imageBox">
                <img
                  className="rounded-circle w-100 normal-tab"
                  src={item.logo}
                  alt={item.tenHeThongRap}
                />
              </div>
            </div>
          ))}
        </div>

        {/* DANH SACH CUM RAP */}
        <div className="col-4 listCumRap customScrollbar">
          {danhSachCumRap.map((item, index) => (
            <div
              key={index}
              className={
                "cumRapBox cursorPointer opacityHalf" +
                (cumRapActive === index + 1 + "" ? " active" : "")
              }
              onClick={() => {
                changeCumRapActive(index + 1 + "");
                setDanhSachPhim(item.danhSachPhim);
              }}
            >
              <div className="thongTinCumRapBox">
                <div className="thongTinCumRapBoxImage">
                  <img src="./images/cinema-address.jpg" alt="cinema address" />
                </div>
                <div className="thongTinCumRapBoxInfo">
                  <div className="tenRap">{item.tenCumRap}</div>
                  <div className="diaChi">
                    {item.diaChi}
                    <span className="banDo">[Bản đồ]</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DANH SACH PHIM */}
        <div className="col-7 container-fluid px-0 customScrollbar listPhim">
          <div className="row mx-0">
            {danhSachPhim.map((item) => (
              <div
                className="border-bottom py-2 px-0 col-12 container-fluid cursorPointer itemPhimBox"
                key={item.maPhim}
                onClick={() => {
                  history.push("/movie/" + item.maPhim);
                }}
              >
                {console.log(item)}
                <div className="row mx-0">
                  <div className="col-3 d-flex justify-content-center align-items-center p-0">
                    <div className="itemPhimBoxImage">
                      <img
                        className="img-fluid"
                        style={{ height: "120px" }}
                        src={item.hinhAnh}
                        alt={item.tenPhim}
                      />
                    </div>
                  </div>
                  <div className="col-9 p-0">
                    <div className="itemPhimBoxText">
                      <div className="itemPhimBoxText__Info">
                        <h6>{item.tenPhim}</h6>
                      </div>
                      <div className="itemPhimBoxText__lichChieu">
                        <div className="d-flex flex-wrap">
                          {/* Danh sach thoi gian chieu */}
                          {item.lstLichChieuTheoPhim.map((subItem, index) => {
                            const showingDate = subItem.ngayChieuGioChieu.slice(
                              0,
                              10
                            );
                            if (today === showingDate) {
                              return (
                                <div
                                  style={{ fontSize: "1.5em" }}
                                  className="text-success p-2"
                                  key={index}
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
                </div>
              </div>
            ))}
          </div>
          
          <div className="thongTinPhimBox cursorPointer ">
            <div className="thongTinPhimBoxImage">

            </div>
            <div className="thongTinPhimBoxText">
              <div className="thongTinPhimBoxText__Info">

              </div>
              <div className="thongTinPhimBoxText__lichChieu">

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  ) : null;
}
