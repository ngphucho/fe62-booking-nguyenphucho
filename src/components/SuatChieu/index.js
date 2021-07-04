import React from "react";
import PropTypes from "prop-types";
import {
  getHoursMinutes,
  addMinutes,
  compareTwoDayWithoutTime,
} from "../../utils/timeFunction";
import { number } from "yup";

export default function SuatChieu(props) {
  const { thoiGianBatDau, thoiLuong } = props;
  const start = getHoursMinutes(thoiGianBatDau);
  const disabled = new Date() > new Date(thoiGianBatDau);
  const end = thoiLuong
    ? getHoursMinutes(addMinutes(thoiGianBatDau, thoiLuong))
    : null;
  return (
    <div
      className={end ? "withEnd" : "withoutEnd" + disabled ? " disabled" : ""}
    >
      {start}
      {end ? " - " + end : null}
    </div>
  );
}

SuatChieu.propTypes = {
  thoiGianBatDau: PropTypes.string,
  thoiLuong: PropTypes.any,
};

SuatChieu.defaultProps = {
  thoiGianBatDau: "",
};
