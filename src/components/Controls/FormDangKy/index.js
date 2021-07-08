import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import {
  faKey,
  faUser,
  faEnvelope,
  faPhone,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import authAPI from "../../../services/authAPI";
import quanLyNguoiDungAPI from "../../../services/quanLyNguoiDungAPI";
import { login } from "../../../actions/auth";
import { snackbarThongBaoToggle } from "../../../actions/snackbarThongBao";

//material
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// import khac
import { appLayoutData } from "../../../utils/myData";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },

  select: {
    border: 0,
    borderRadius: 0,
    background: "#ffffff",
    height: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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

export default function FormDangKy() {
  const classes = useStyles();
  const {
    button,
    type,
    values: defaultFormValues,
  } = useSelector((state) => state.formData);
  // console.log(values);
  const { danhSachLoaiNguoiDung } = useSelector(
    (state) => state.danhSachLoaiNguoiDung
  );
  const { userInfo } = useSelector((state) => state.auth);
  const [resError, setResError] = useState(null); // luu ket qua loi server tra ve
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (values) => {
    const newValues = {
      ...values,
      maNhom: appLayoutData.maNhom,
      maLoaiNguoiDung: values.maLoaiNguoiDung
        ? values.maLoaiNguoiDung
        : "KhachHang",
    };
    switch (type) {
      case "sign_up": {
        try {
          const { data } = await authAPI.register(newValues);
          console.log(data);
          dispatch(
            snackbarThongBaoToggle({
              message: "Đăng ký thành công tài khoản " + data.taiKhoan,
              type: "success",
              autoHideTime: 3000,
            })
          );
          if (!userInfo) {
            setTimeout(() => {
              dispatch(
                login({ taiKhoan: data.taiKhoan, matKhau: data.matKhau })
              );
              history.push("/home");
            }, 3000);
          }
        } catch (error) {
          setResError(error.response.data);
        }
        break;
      }
      case "add": {
        try {
          const { data } = await quanLyNguoiDungAPI.themNguoiDung(newValues);
          console.log(data);
          dispatch(
            snackbarThongBaoToggle({
              message: "Đăng ký thành công tài khoản " + data.taiKhoan,
              type: "success",
              autoHideTime: 3000,
            })
          );
        } catch (error) {
          setResError(error.response.data);
        }
        break;
      }
      case "edit": {
        try {
          await quanLyNguoiDungAPI.capNhatThongTinNguoiDung(newValues);
          dispatch(
            snackbarThongBaoToggle({
              message: "Sửa thông tin tài khoản thành công",
              type: "success",
              autoHideTime: 3000,
            })
          );
        } catch (error) {
          setResError(error.response.data);
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="text-light ">
        {/* FULL NAME */}
        <FormGroup className="inputGroup">
          <InputGroup>
            <Controller
              name="hoTen"
              control={control}
              defaultValue={defaultFormValues ? defaultFormValues.hoTen : ""}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Họ và tên"
                  className="rounded-0"
                  onFocus={() => {
                    setResError(null);
                  }}
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
              defaultValue={defaultFormValues ? defaultFormValues.taiKhoan : ""}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Tên đăng nhập"
                  className="rounded-0"
                  onFocus={() => {
                    setResError(null);
                  }}
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
            <div className="alert alert-danger">{errors.taiKhoan.message}</div>
          )}
        </FormGroup>
        {/* PASSWORD */}
        <FormGroup className="inputGroup">
          <InputGroup>
            <Controller
              name="matKhau"
              control={control}
              defaultValue={defaultFormValues ? defaultFormValues.matKhau : ""}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Mật khẩu"
                  className="rounded-0"
                  onFocus={() => {
                    setResError(null);
                  }}
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
            <div className="alert alert-danger">{errors.matKhau.message}</div>
          )}
        </FormGroup>
        {/*CONFIRM PASSWORD */}
        <FormGroup className="inputGroup">
          <InputGroup>
            <Controller
              name="matKhau2"
              control={control}
              defaultValue={defaultFormValues ? defaultFormValues.matKhau : ""}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  className="rounded-0"
                  onFocus={() => {
                    setResError(null);
                  }}
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
            <div className="alert alert-danger">{errors.matKhau2.message}</div>
          )}
        </FormGroup>
        {/* EMAIL */}
        <FormGroup className="inputGroup">
          <InputGroup>
            <Controller
              name="email"
              control={control}
              defaultValue={defaultFormValues ? defaultFormValues.email : ""}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Email"
                  className="rounded-0"
                  onFocus={() => {
                    setResError(null);
                  }}
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
              defaultValue={defaultFormValues ? defaultFormValues.soDt : ""}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Số điện thoại"
                  className="rounded-0"
                  onFocus={() => {
                    setResError(null);
                  }}
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

        {/* LOAI NGUOI DUNG - CHI HIEN THI O GIAO DIEN ADMIN */}
        {userInfo?.maLoaiNguoiDung === "QuanTri" ? (
          <FormControl variant="outlined" className={classes.formControl}>
            {/* <InputLabel
            //  id="maLoaiNguoiDungLabel"
            >
              Loại người dùng
            </InputLabel> */}
            <Controller
              name="maLoaiNguoiDung"
              control={control}
              defaultValue={
                defaultFormValues
                  ? defaultFormValues.maLoaiNguoiDung
                  : "KhachHang"
              }
              render={({ field }) => (
                <Select
                  className={classes.select}
                  {...field}
                  // labelId="maLoaiNguoiDungLabel"
                  // id="maLoaiNguoiDung"
                  // onChange={console.log(getValues())}
                  label="Loại người dùng"
                  onFocus={() => {
                    setResError(null);
                  }}
                >
                  {danhSachLoaiNguoiDung.map((item) => (
                    <MenuItem
                      key={item.maLoaiNguoiDung}
                      value={item.maLoaiNguoiDung}
                    >
                      {item.tenLoai}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        ) : null}
        <FormGroup className="text-center inputGroup">
          <Button disabled={!isDirty || !isValid}>{button}</Button>
          {resError && <div className="alert alert-danger">{resError}</div>}
        </FormGroup>
      </Form>
    </>
  );
}
