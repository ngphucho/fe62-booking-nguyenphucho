import React, { useEffect, useState } from "react";
import SuatChieu from "../SuatChieu";
import DatePicker from "react-horizontal-datepicker";
import { useHistory } from "react-router-dom";
import LichChieuTheoNgay from "../LichChieuTheoNgay";
import MultiCollapse from "../MultiCollapse";

// thong tin lich chieu theo phim
export default function ThongTinLichChieuPhim({
  thongTinLichChieuPhim: { heThongRapChieu },
}) {
  const history = useHistory();
  const [today, setToday] = useState(new Date("2019-01-08 00:00"));

  const [cumRapChieu, setCumRapChieu] = useState(
    heThongRapChieu[0]?.cumRapChieu
  );
  const [cumRapChieuFilter, setCumRapchieuFilter] = useState([]);

  const [heThongRapActive, setHeThongRapActive] = useState("1");
  const changeHeThongRapActive = (active) => {
    if (heThongRapActive !== active) {
      setHeThongRapActive(active);
    }
  };

  //function
  const showLichChieuPhim = (data) => {
    const collapseList = data.map((item) => ({
      header: item.tenCumRap,
      body: item.lichChieuPhim,
    }));
    return <MultiCollapse collapseList={collapseList} />;
  };

  //lifecycle
  useEffect(() => {
    if (cumRapChieu) {
      const newCumRapChieu = [...cumRapChieu];
      newCumRapChieu.forEach((cumRap, i) => {
        const newLichChieu = cumRap.lichChieuPhim.filter(
          (lich) => new Date(lich.ngayChieuGioChieu) >= today
        );
        newCumRapChieu[i].lichChieuPhim = newLichChieu;
      });
      setCumRapchieuFilter(newCumRapChieu);
    }
  }, [cumRapChieu]);

  return (
    <div className="thongTinLichChieuPhimBox">
      <div className="row">
        {/* DANH SACH HE THONG RAP */}
        <div className="col-lg-1 col-md-2 col-1 heThongRap">
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
        {cumRapChieuFilter ? (
          <div className="col-lg-11 col-md-10 col-11 LichChieuBox">
            {/* <div>
              {cumRapChieuFilter?.map((item, index) => (
                <div key={index}>
                  <div>{item.tenCumRap}</div>
                  <LichChieuTheoNgay lichChieu={item.lichChieuPhim} />
                </div>
              ))}
            </div> */}
            {showLichChieuPhim(cumRapChieuFilter)}
          </div>
        ) : null}
      </div>
    </div>
  );
}
