import React, { useState } from "react";
import SuatChieu from "../SuatChieu";
import DatePicker from "react-horizontal-datepicker";
import { useHistory } from "react-router-dom";

// thong tin lich chieu theo phim
export default function ThongTinLichChieuPhim({
  thongTinLichChieuPhim: { heThongRapChieu },
}) {
  // console.log(heThongRapChieu);

  const history = useHistory();
  const [cumRapChieu, setCumRapChieu] = useState(
    heThongRapChieu[0]?.cumRapChieu
  );

  const [heThongRapActive, setHeThongRapActive] = useState("1");
  const changeHeThongRapActive = (active) => {
    if (heThongRapActive !== active) {
      setHeThongRapActive(active);
    }
  };

  const onSelectedDay = (d) => {
    // setToday(d.toISOString().slice(0, 10));
    console.log(d);
  };
  return (
    <div className="container">
      <div className="row">
        {/* DANH SACH HE THONG RAP */}
        <div className="col-3">
          {heThongRapChieu.map((item, index) => (
            <div
              key={index}
              className={heThongRapActive === index + 1 + "" ? "active" : null}
              onClick={() => {
                changeHeThongRapActive(index + 1 + "");
                setCumRapChieu(item.cumRapChieu);
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
        {/* DANH SACH CUM RAP VA LICH CHIEU PHIM */}
        {cumRapChieu ? (
          <div className="col-9">
            <div>
              <DatePicker
                getSelectedDay={onSelectedDay}
                endDate={30}
                // selectDate={new Date("2020-04-30")}
                labelFormat={"MMMM-yyyy"}
                color={"#374e8c"}
              />
            </div>
            <div>
              {cumRapChieu?.map((item, index) => (
                <div key={index}>
                  <div>{item.tenCumRap}</div>
                  {item.lichChieuPhim.map((lich) => (
                    <span
                      key={lich.maLichChieu}
                      style={{ display: "inline-block", padding: "5px" }}
                      onClick={() => {
                        history.push("/chi-tiet-phong-ve/" + lich.maLichChieu);
                      }}
                    >
                      <SuatChieu
                        thoiGianBatDau={lich.ngayChieuGioChieu}
                        thoiLuong={lich.thoiLuong}
                      />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
