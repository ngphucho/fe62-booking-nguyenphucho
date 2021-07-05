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
      <div className="container">
        <div className="dangKyHeader d-flex flex-row justify-content-between align-items-center">
          <Link to="/home">
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />
              <div className="text">Trang chủ</div>
            </div>
          </Link>

          <Link to="/login">
            <div className="icon">
              <FontAwesomeIcon icon={faUserPlus} />
              <div className="text">Đăng nhập</div>
            </div>
          </Link>
        </div>

        <div className="formBox">
          <div className="title">
            <h3 className="text-center">ĐĂNG KÝ</h3>
          </div>
          <FormDangKy button="Đăng ký" type="sign_up" />
        </div>

        <div className="dangKyFooter text-center">
          <img className="img-fluid" src="./images/header-logo1.png"></img>
        </div>
        <SnackbarThongBao />
      </div>
      <div className="backgroundImage">
        <img src="./images/sign-up-bg.jpg" alt="login background" />
      </div>
    </div>
  );
}
