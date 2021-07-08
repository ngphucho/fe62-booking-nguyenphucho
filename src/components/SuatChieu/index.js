import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { getHoursMinutes, addMinutes } from "../../utils/timeFunction";

//material
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
// import AddIcon from "@material-ui/icons/Add";

export default function SuatChieu(props) {
  const { thoiGianBatDau, thoiLuong, maLichChieu, isAdmin } = props;
  const history = useHistory();
  const start = getHoursMinutes(thoiGianBatDau);
  const disabled = new Date() > new Date(thoiGianBatDau);
  const end = thoiLuong
    ? getHoursMinutes(addMinutes(thoiGianBatDau, thoiLuong))
    : null;
  return (
    <div>
      <div
        onClick={() => {
          history.push("/chi-tiet-phong-ve/" + maLichChieu);
        }}
        className={
          (end ? "withEnd" : "withoutEnd") + (disabled ? " disabled" : "")
        }
      >
        {start}
        {end ? " - " + end : null}
      </div>
      {isAdmin ? (
        <div
          className="d-flex justify-content-between"
          style={{ color: "green", backgroundColor: "#ebff795e", padding: 5 }}
        >
          {/* <AddIcon className="cursorPointer" fontSize="small" /> */}
          <DeleteIcon className="cursorPointer" fontSize="small" />
          <EditIcon className="cursorPointer" fontSize="small" />
        </div>
      ) : null}
    </div>
  );
}

SuatChieu.propTypes = {
  thoiGianBatDau: PropTypes.string,
  thoiLuong: PropTypes.any,
  maLichChieu: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
};

SuatChieu.defaultProps = {
  thoiGianBatDau: "",
  isAdmin: false,
};
