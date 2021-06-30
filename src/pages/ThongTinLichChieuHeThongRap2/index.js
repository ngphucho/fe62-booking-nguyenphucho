import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-horizontal-datepicker";
import { compareTwoDayWithoutTime } from "../../utils/timeFunction";

export default function ThongTinLichChieuHeThongRap2({ danhSachHeThongRap }) {
  const [today, setToday] = useState(
    new Date("2019-01-01T10:10:00").toISOString().slice(0, 10)
  );
  const history = useHistory();

  const [danhSachCumRap, setDanhSachCumRap] = useState(null);
  const [danhSachPhim, setDanhSachPhim] = useState(null);
  const [danhSachPhimFilter, setDanhSachPhimFilter] = useState([]);

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
    // setToday(d.toISOString().slice(0, 10));
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

  useEffect(() => {
    if (danhSachPhim) {
      setDanhSachPhimFilter(filterPhim(danhSachPhim));
    }
  }, [danhSachPhim]);

  const BoxPhim = (item) => {
    // console.log("phim", item);
    return (
      <div
        key={item.maPhim}
        className="phimBox"
        // onClick={() => {
        //   history.push("/movie/" + item.maPhim);
        // }}
      >
        {/* {console.log(item)} */}
        <div className="thongTinPhimBox">
          <div className="thongTinPhimBoxImage">
            <div className="itemPhimBoxImage cursorPointer">
              <div className="imageBox">
                <img
                  className="img-fluid"
                  src={item.hinhAnh}
                  alt={item.tenPhim}
                />
              </div>
            </div>
          </div>
          <div className="thongTinPhimBoxText">
            <div className="thongTinPhimBoxText__Info">
              <h6>{item.tenPhim}</h6>
            </div>
            <div className="thongTinPhimBoxText__lichChieu">
              <div className="d-flex flex-wrap">
                {/* Danh sach thoi gian chieu */}
                {item.lstLichChieuTheoPhim.map((subItem, index) => {
                  const showingDate = new Date(subItem.ngayChieuGioChieu)
                    .toISOString()
                    .slice(0, 10);
                  return (
                    <div
                      style={{ fontSize: "1.5em" }}
                      className="text-success p-2 cursorPointer"
                      key={index}
                    >
                      {/* {console.log(subItem.ngayChieuGioChieu)} */}
                      {subItem.ngayChieuGioChieu.slice(11, 16)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filterPhim = (dsPhim) => {
    const newDS = [];
    dsPhim.forEach((phim) => {
      const newPhim = { ...phim };
      newPhim.lstLichChieuTheoPhim = [];
      phim.lstLichChieuTheoPhim.map((item) => {
        if (compareTwoDayWithoutTime(today, item.ngayChieuGioChieu)) {
          newPhim.lstLichChieuTheoPhim.push(item);
        }
      });
      if (newPhim.lstLichChieuTheoPhim.length > 0) {
        newDS.push(newPhim);
      }
    });
    return newDS;
  };

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
        <div className="col-7 container-fluid customScrollbar listPhim">
          {danhSachPhimFilter.map((item) => BoxPhim(item))}
        </div>
      </div>
    </div>
  ) : null;
}
