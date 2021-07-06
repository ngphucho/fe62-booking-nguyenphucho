import React from "react";
import { useDispatch } from "react-redux";
import TimKiemNguoiDung from "./TimKiemNguoiDung";
import { popupModalToggle } from "../../../actions/popupModal";
import { changeFormData } from "../../../actions/formData";

export default function ThanhCongCuQuanLyNguoiDung() {
  const dispatch = useDispatch();
  return (
    <div className="thanhCongCuQuanLyNguoiDung">
      <div className="timKiemNguoiDung">
        <TimKiemNguoiDung />
      </div>
      <div className="themNguoiDung">
        <button
          onClick={() => {
            dispatch(
              popupModalToggle({
                title: "THÊM NGƯỜI DÙNG",
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
          Thêm người dùng
        </button>
      </div>
    </div>
  );
}
