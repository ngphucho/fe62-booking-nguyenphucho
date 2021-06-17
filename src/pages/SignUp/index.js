import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserPlus,
  faKey,
  faUser,
  faEnvelope,
  faPhone,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import authAPI from "../../services/authAPI";
import { login } from "../../actions/auth";

const schema = yup.object().shape({
  hoTen: yup.string().required("Vui lòng nhập họ tên"),
  taiKhoan: yup
    .string()
    .required("Vui lòng nhập tài khoản")
    .min(6, "Tài khoản phải từ 6 - 20 ký tự")
    .max(20, "Tài khoản phải từ 6 - 20 ký tự"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
  matKhau2: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu")
    .oneOf([yup.ref("matKhau"), null], "Mật khẩu chưa khớp"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  soDt: yup.string().required("Vui lòng nhập số điện thoại"),
});

export default function SignUp() {
  const { userInfo } = useSelector((state) => state.auth);
  const history = useHistory();
  if (userInfo) {
    history.push("/home");
  }
  const dispatch = useDispatch();
  const [resError, setResError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (values) => {
    const newValues = {
      ...values,
      maNhom: "GP13",
      maLoaiNguoiDung: "KhachHang",
    };
    try {
      const { data } = await authAPI.register(newValues);
      setSuccess(true);
      setTimeout(() => {
        dispatch(login({ taiKhoan: data.taiKhoan, matKhau: data.matKhau }));
        history.push("/home");
      }, 1500);
    } catch (error) {
      setResError(error.response.data);
    }
  };
  return isSuccess ? (
    <div>Đăng ký thành công</div>
  ) : (
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
        <div className="formBox">
          <Form onSubmit={handleSubmit(onSubmit)} className="text-light">
            {/* FULL NAME */}
            <FormGroup className="inputGroup">
              <InputGroup>
                <Controller
                  name="hoTen"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Họ và tên"
                      className="rounded-0"
                    />
                  )}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText className="rounded-0 bg-white">
                    <span>
                      <FontAwesomeIcon icon={faUserEdit} />
                    </span>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {errors.hoTen && (
                <div className="alert alert-danger">{errors.hoTen.message}</div>
              )}
            </FormGroup>
            {/* USERNAME */}
            <FormGroup className="inputGroup">
              <InputGroup>
                <Controller
                  name="taiKhoan"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Tên người dùng"
                      className="rounded-0"
                    />
                  )}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText className="rounded-0 bg-white">
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {errors.taiKhoan && (
                <div className="alert alert-danger">
                  {errors.taiKhoan.message}
                </div>
              )}
            </FormGroup>
            {/* PASSWORD */}
            <FormGroup className="inputGroup">
              <InputGroup>
                <Controller
                  name="matKhau"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="Mật khẩu"
                      className="rounded-0"
                    />
                  )}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText className="rounded-0 bg-white">
                    <span>
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {errors.matKhau && (
                <div className="alert alert-danger">
                  {errors.matKhau.message}
                </div>
              )}
            </FormGroup>
            {/*CONFIRM PASSWORD */}
            <FormGroup className="inputGroup">
              <InputGroup>
                <Controller
                  name="matKhau2"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="Xác nhận mật khẩu"
                      className="rounded-0"
                    />
                  )}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText className="rounded-0 bg-white">
                    <span>
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {errors.matKhau2 && (
                <div className="alert alert-danger">
                  {errors.matKhau2.message}
                </div>
              )}
            </FormGroup>
            {/* EMAIL */}
            <FormGroup className="inputGroup">
              <InputGroup>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Email"
                      className="rounded-0"
                    />
                  )}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText className="rounded-0 bg-white">
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {errors.email && (
                <div className="alert alert-danger">{errors.email.message}</div>
              )}
            </FormGroup>
            {/* PHONE NUMBER */}
            <FormGroup className="inputGroup">
              <InputGroup>
                <Controller
                  name="soDt"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Số điện thoại"
                      className="rounded-0"
                    />
                  )}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText className="rounded-0 bg-white">
                    <span>
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {errors.soDt && (
                <div className="alert alert-danger">{errors.soDt.message}</div>
              )}
            </FormGroup>
            <FormGroup className="text-center inputGroup">
              <Button>Đăng ký</Button>
              {resError && <div className="alert alert-danger">{resError}</div>}
            </FormGroup>
          </Form>
        </div>
        <div className="logo text-center">
          <img
            className="img-fluid"
            style={{ width: "150px" }}
            src="./images/header-logo1.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
