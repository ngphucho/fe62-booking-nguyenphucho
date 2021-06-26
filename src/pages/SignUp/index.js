import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import FormDangKy from "../../components/Controls/FormDangKy";
import SnackbarThongBao from "../../components/Controls/SnackbarThongBao";
import { changeFormData } from "../../actions/formData";
import { useEffect } from "react";

export default function SignUp() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const history = useHistory();
  if (userInfo) {
    history.push("/home");
  }
  useEffect(() => {
    dispatch(
      changeFormData({
        type: "sign_up",
        button: "Đăng ký",
        values: null,
      })
    );
  });
  return (
    <div className="signUp container-fluid">
      <div
        style={{ height: "100%" }}
        className="container px-5 w-50 d-flex flex-column justify-content-around"
      >
        <div className="d-flex flex-row justify-content-between align-items-center">
          <Link to="/home">
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />
              <div className="text">Trang chủ</div>
            </div>
          </Link>
          <div className="title">
            <h1 className="text-center">Sign Up</h1>
          </div>
          <Link to="/login">
            <div className="icon">
              <FontAwesomeIcon icon={faUserPlus} />
              <div className="text">Đăng nhập</div>
            </div>
          </Link>
        </div>

        <div>
          <FormDangKy button="Đăng ký" type="sign_up" />
        </div>

        <div className="logo text-center">
          <img
            className="img-fluid"
            style={{ width: "150px" }}
            src="./images/header-logo1.png"
          ></img>
        </div>
        <SnackbarThongBao />
      </div>
    </div>
  );
}
