import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { getHoursMinutes, addMinutes } from "../../utils/timeFunction";

export default function SuatChieu(props) {
  const { thoiGianBatDau, thoiLuong, maLichChieu } = props;
  const history = useHistory();
  const start = getHoursMinutes(thoiGianBatDau);
  const disabled = new Date() > new Date(thoiGianBatDau);
  const end = thoiLuong
    ? getHoursMinutes(addMinutes(thoiGianBatDau, thoiLuong))
    : null;
  return (
    <div
      onClick={() => {
        history.push("/chi-tiet-phong-ve/" + maLichChieu);
      }}
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
  maLichChieu: PropTypes.number.isRequired,
};

SuatChieu.defaultProps = {
  thoiGianBatDau: "",
};
