import React from "react";
import { useDispatch } from "react-redux";
import TimKiemPhim from "./TimKiemPhim";
import { popupModalToggle } from "../../../../actions/popupModal";
import { changeFormData } from "../../../../actions/formData";

export default function ThanhCongCuQuanLyPhim() {
  const dispatch = useDispatch();
  return (
    <div className="container-fluid d-flex justify-content-between bg-light">
      <div className="timKiemPhim">
        <TimKiemPhim />
      </div>
      <div className="themPhim">
        <button
          onClick={() => {
            dispatch(
              popupModalToggle({
                title: "THÊM PHIM",
              })
            );
            dispatch(
              changeFormData({
                button: "Thêm",
                type: "add",
              })
            );
          }}
          className="btn btn-success"
        >
          Thêm Phim
        </button>
      </div>
    </div>
  );
}
