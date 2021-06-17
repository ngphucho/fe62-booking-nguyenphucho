import React from "react";
import { getHoursMinutes, addMinutes } from "../../utils/timeFunction";

export default function SuatChieu(props) {
  const { thoiGianBatDau, thoiLuong } = props;
  const start = getHoursMinutes(thoiGianBatDau);
  const end = thoiLuong
    ? getHoursMinutes(addMinutes(thoiGianBatDau, thoiLuong))
    : null;
  return (
    <div className={end ? "withEnd" : "withoutEnd"}>
      {start}
      {end ? " - " + end : null}
    </div>
  );
}
