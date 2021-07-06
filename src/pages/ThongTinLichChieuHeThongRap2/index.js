import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";
import "react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css";
import { compareTwoDayWithoutTime } from "../../utils/timeFunction";
import ScrollContainer from "react-indiana-drag-scroll";
import SuatChieu from "../../components/SuatChieu";

export default function ThongTinLichChieuHeThongRap2({ danhSachHeThongRap }) {
  const [today, setToday] = useState(new Date());
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
    // d.setHours(7, 0, 0, 0);
    console.log(d);
    setToday(d);
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
  }, [danhSachPhim, today]);

  const BoxPhim = (item) => {
    return (
      <div key={item.maPhim} className="phimBox">
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
              <h6
                onClick={() => {
                  history.push("/movie/" + item.maPhim);
                }}
              >
                {item.tenPhim}
              </h6>
            </div>
            <div className="thongTinPhimBoxText__lichChieu">
              <div className="d-flex flex-wrap">
                {/* Danh sach thoi gian chieu */}
                {item.lstLichChieuTheoPhim.map((subItem, index) => {
                  return (
                    <SuatChieu
                      thoiGianBatDau={subItem.ngayChieuGioChieu}
                      maLichChieu={subItem.maLichChieu}
                    />
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
    <div className="container-md thongTinLichChieuHeThongRap2">
      <div className="row" style={{ overflow: "hidden" }}>
        {/* DANH SACH HE THONG RAP */}

        <div className="col-md-1 listHeThongRap customScrollbar">
          <ScrollContainer className="scroll-container" vertical horizontal>
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
          </ScrollContainer>
        </div>

        {/* DANH SACH CUM RAP */}
        <div className="col-md-4 col-sm-5 listCumRap customScrollbar">
          <ScrollContainer className="scroll-container" vertical horizontal>
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
                    <img
                      src="./images/cinema-address.jpg"
                      alt="cinema address"
                    />
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
          </ScrollContainer>
        </div>

        {/* DANH SACH PHIM */}
        <div className="col-sm-7 container-fluid customScrollbar listPhim">
          <div className="dateBox">
            <ReactHorizontalDatePicker
              selectedDay={onSelectedDay}
              // enableDaysBefore={0}
              enableScroll={true}
              enableDays={45}
            />
          </div>
          <ScrollContainer className="scroll-container">
            {danhSachPhimFilter.map((item) => BoxPhim(item))}
          </ScrollContainer>
        </div>
      </div>
    </div>
  ) : null;
}
