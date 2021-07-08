import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, Redirect, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Label,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserPlus,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { login } from "../../actions/auth";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tên đăng nhập"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { userInfo, error } = useSelector((state) => state.auth);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const onSubmit = (data) => dispatch(login(data));

  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    if (userInfo.maLoaiNguoiDung === "QuanTri") {
      return <Redirect to="/admin" />;
    }
    return <Redirect to="/" />;
  }

  return (
    <div className="login container-fluid">
      <div className="container">
        <div className="dangNhapHeader d-flex flex-row justify-content-between align-items-center">
          <Link to="/home">
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />
              <div className="text">TRANG CHỦ</div>
            </div>
          </Link>
          <Link to="/sign-up">
            <div className="icon">
              <FontAwesomeIcon icon={faUserPlus} />
              <div className="text">ĐĂNG KÝ</div>
            </div>
          </Link>
        </div>
        <div className="formBox">
          <div className="title">
            <h3 className="text-center">ĐĂNG NHẬP</h3>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} className="text-light">
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
                      placeholder="Tên đăng nhập"
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
            <FormGroup className="inputGroup">
              <Label>
                Quên mật khẩu?{" "}
                <span className="quenMK cursorPointer">Bấm vào đây</span>
              </Label>
            </FormGroup>
            <div className="text-center inputGroup">
              <Button disabled={!isValid}>Đăng nhập</Button>
              <br />
              {error && (
                <div className="d-inline-block alert alert-danger p-1 mt-1">
                  {error}
                </div>
              )}
            </div>
          </Form>
        </div>
        <div className="dangNhapFooter text-center">
          <img className="img-fluid" src="./images/header-logo1.png"></img>
        </div>
      </div>
      <div className="backgroundImage">
        <img src="./images/login-bg.jpg" alt="login background" />
      </div>
    </div>
  );
}
