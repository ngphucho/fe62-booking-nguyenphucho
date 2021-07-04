import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  compareTwoDayWithoutTime,
  formatDDMMYYYY,
} from "../../utils/timeFunction";
import SuatChieu from "../SuatChieu";

function LichChieuTheoNgay(props) {
  const { lichChieu } = props;
  const [currentDay, setCurrentDay] = useState(new Date());
  const [newLichChieu, setNewLichChieu] = useState([]);
  const [hienThi, setHienThi] = useState([]);

  useEffect(() => {
    if (lichChieu.length > 0) {
      const dayGroup = lichChieu.reduce((result, currentValue) => {
        if (!result[currentValue.ngayChieuGioChieu.slice(0, 10)]) {
          result[currentValue.ngayChieuGioChieu.slice(0, 10)] = [];
        }
        result[currentValue.ngayChieuGioChieu.slice(0, 10)].push(currentValue);
        return result;
      }, {});
      setNewLichChieu(dayGroup);
    } else {
      setNewLichChieu(lichChieu);
    }
  }, [lichChieu]);

  useEffect(() => {
    const arr = [];
    for (const lich in newLichChieu) {
      const row = (
        <div key={lich} className="dailyScheduleBox">
          <div className="dateHeader">
            {formatDDMMYYYY(new Date(lich + " 00:00"), "/")}
            {compareTwoDayWithoutTime(new Date(), new Date(lich + "00:00"))
              ? "(Hôm nay)"
              : ""}
          </div>
          <div className="dateBody">
            {newLichChieu[lich].map((item) => (
              <div key={item.maLichChieu} className="dateItem">
                <SuatChieu
                  thoiGianBatDau={item.ngayChieuGioChieu}
                  thoiLuong={item.thoiLuong}
                />
              </div>
            ))}
          </div>
        </div>
      );
      arr.push(row);
    }
    setHienThi(arr);
  }, [newLichChieu]);

  return <div>{hienThi}</div>;
}

LichChieuTheoNgay.propTypes = {
  lichChieu: PropTypes.array,
};

LichChieuTheoNgay.defaultProps = {
  lichChieu: [],
};

export default LichChieuTheoNgay;
