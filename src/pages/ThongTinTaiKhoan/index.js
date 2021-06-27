import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label, Form, FormGroup, Input, Button } from "reactstrap";
import quanLyNguoiDungAPI from "../../services/quanLyNguoiDungAPI";
import { useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { pageTitleChange } from "../../actions/pageTitle";

const schema = yup.object().shape({
  hoTen: yup.string().required("Vui lòng nhập họ tên"),
  // taiKhoan: yup
  //   .string()
  //   .required("Vui lòng nhập tài khoản")
  //   .min(6, "Tài khoản phải từ 6 - 20 ký tự")
  //   .max(20, "Tài khoản phải từ 6 - 20 ký tự"),
  checkBox: yup.bool(),
  matKhauCu: yup.string().when("checkBox", {
    is: true,
    then: yup.string().required("Vui lòng nhập mật khẩu cũ"),
    otherwise: yup.string().notRequired(),
  }),
  matKhauMoi: yup.string().when("checkBox", {
    is: true,
    then: yup.string().required("Vui lòng nhập mật khẩu mới"),
    otherwise: yup.string().notRequired(),
  }),
  matKhauMoi2: yup.string().when("checkBox", {
    is: true,
    then: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu mới")
      .oneOf([yup.ref("matKhauMoi"), null], "Mật khẩu mới chưa khớp"),
    otherwise: yup.string().notRequired(),
  }),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  soDT: yup.string().required("Vui lòng nhập số điện thoại"),
});

export default function ThongTinTaiKhoan() {
  const dispatch = useDispatch();
  const [resError, setResError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    setValue,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { checkBox: false },
  });

  //isUpdatePassword = false => không đôi mật khẩu, = true => đổi mật khẩu
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [inputList, setInputList] = useState([
    {
      name: "taiKhoan",
      label: "Tên tài khoản",
      placeholder: "Tên tài khoản",
      disabled: true,
    },
    {
      name: "hoTen",
      label: "Họ và tên",
      placeholder: "Họ và tên",
      disabled: true,
    },
    { name: "email", label: "Email", placeholder: "Email", disabled: true },
    {
      name: "soDT",
      label: "Số điện thoại",
      placeholder: "Số điện thoại",
      disabled: true,
    },
  ]);

  //if wrongpassword !== null => matKhauCu sai
  const [wrongPassword, setWrongPassword] = useState(null);

  const { userInfo } = useSelector((state) => state.auth);

  const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState(null);
  const [thongTinDatVe, setThongTinDatVe] = useState(null);

  const onSubmit = async (values) => {
    if (
      values.matKhauCu !== thongTinTaiKhoan.matKhau &&
      values.checkBox === true
    ) {
      setWrongPassword("Mật khẩu không đúng");
    } else {
      const newValues = {
        taiKhoan: values.taiKhoan,
        matKhau: values.checkBox ? values.matKhauMoi : thongTinTaiKhoan.matKhau,
        email: values.email,
        soDt: values.soDT,
        maNhom: "GP13",
        maLoaiNguoiDung: "KhachHang",
        hoTen: values.hoTen,
      };
      // console.log(newValues);
      try {
        const { data } = await quanLyNguoiDungAPI.capNhatThongTinNguoiDung(
          newValues
        );
        // console.log("cap nhat tai khoan thanh cong", data);
        dispatch(login({ taiKhoan: data.taiKhoan, matKhau: data.matKhau }));
        setSuccess(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(async () => {
    if (userInfo) {
      const { data } = await quanLyNguoiDungAPI.thongTinTaiKhoan(
        userInfo.taiKhoan
      );
      setThongTinTaiKhoan(data);
      setThongTinDatVe(data.thongTinDatVe);
    }
    if (isSuccess) {
      window.location.reload();
    }
  }, [userInfo]);

  useEffect(() => {
    dispatch(
      pageTitleChange({
        activePage: 4,
        pageTitle: "",
      })
    );
  }, []);

  return thongTinTaiKhoan && thongTinDatVe ? (
    <div className="container">
      <div className="thongTinCaNhan">
        <h1>THÔNG TIN CÁ NHÂN</h1>
        <div className="formBox">
          <Form onSubmit={handleSubmit(onSubmit)} className="text-dark">
            <div className="row">
              <div className="col-md-6 bg-light">
                {inputList.map((item, index) => (
                  <div key={index} className="row">
                    <div className="col-md-3">
                      <Label>{item.label}:</Label>
                    </div>
                    <div className="col-md-8">
                      <Controller
                        name={item.name}
                        control={control}
                        defaultValue={thongTinTaiKhoan[item.name]}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="text"
                            placeholder={item.placeholder}
                            className="rounded-0"
                            disabled={item.disabled}
                          />
                        )}
                      />
                      {errors[item.name] && (
                        <div className="alert alert-danger">
                          {errors[item.name].message}
                        </div>
                      )}
                    </div>
                    <div className="col-md-1">
                      {item.name === "taiKhoan" ? null : (
                        <div
                          onClick={() => {
                            const newInputList = [...inputList];
                            newInputList[index].disabled =
                              !newInputList[index].disabled;
                            if (item.disabled) {
                              // reset({
                              //   ...getValues(),
                              //   [item.name]: thongTinTaiKhoan[item.name],
                              // });
                              setValue(item.name, thongTinTaiKhoan[item.name]);
                            }
                            setInputList(newInputList);
                          }}
                        >
                          {item.disabled ? "Sửa" : "Hủy"}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6 bg-secondary">
                {/* Checkbox đổi mật khẩu */}
                <FormGroup check>
                  <Label
                    check
                    onChange={async () => {
                      if (isUpdatePassword) {
                        await trigger([
                          "matKhauCu",
                          "matKhauMoi",
                          "matKhauMoi2",
                        ]);
                      }
                      setIsUpdatePassword(!isUpdatePassword);
                      setWrongPassword(null);
                      // console.log(watch("checkBox"));
                      // console.log(dirtyFields);
                    }}
                  >
                    <Controller
                      name="checkBox"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="checkbox"
                          // defaultValue={true}
                          // onChange={() => {
                          //   setIsUpdatePassword(!isUpdatePassword);
                          // }}
                        />
                      )}
                    />{" "}
                    Đổi mật khẩu
                  </Label>
                </FormGroup>
                {/* PASSWORD Cũ*/}
                <div className="row">
                  <div className="col-md-3">
                    <Label>Mật khẩu cũ:</Label>
                  </div>
                  <div className="col-md-8">
                    <FormGroup className="inputGroup">
                      {/* <Controller
                        name="matKhauCu2"
                        control={control}
                        defaultValue={thongTinTaiKhoan.matKhau}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="password"
                            disabled={true}
                            hidden={true}
                          />
                        )}
                      /> */}
                      <Controller
                        name="matKhauCu"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="password"
                            placeholder="Mật khẩu cũ"
                            className="rounded-0"
                            disabled={!isUpdatePassword}
                            onFocus={() => {
                              setWrongPassword(null);
                            }}
                          />
                        )}
                      />
                      {(errors.matKhauCu || wrongPassword) && (
                        <div className="alert alert-danger">
                          {wrongPassword
                            ? wrongPassword
                            : errors.matKhauCu.message}
                        </div>
                      )}
                    </FormGroup>
                  </div>
                  <div className="col-md-1"></div>
                </div>
                {/* PASSWORD mới*/}
                <div className="row">
                  <div className="col-md-3">
                    <Label>Mật khẩu mới:</Label>
                  </div>
                  <div className="col-md-8">
                    <FormGroup className="inputGroup">
                      <Controller
                        name="matKhauMoi"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="password"
                            placeholder="Mật khẩu mới"
                            className="rounded-0"
                            disabled={!isUpdatePassword}
                          />
                        )}
                      />
                      {errors.matKhauMoi && (
                        <div className="alert alert-danger">
                          {errors.matKhauMoi.message}
                        </div>
                      )}
                    </FormGroup>
                  </div>
                  <div className="col-md-1"></div>
                </div>
                {/*CONFIRM PASSWORD mới*/}
                <div className="row">
                  <div className="col-md-3">
                    <Label>Xác nhận khẩu mới:</Label>
                  </div>
                  <div className="col-md-8">
                    <FormGroup className="inputGroup">
                      <Controller
                        name="matKhauMoi2"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="password"
                            placeholder="Xác nhận mật khẩu mới"
                            className="rounded-0"
                            disabled={!isUpdatePassword}
                          />
                        )}
                      />
                      {errors.matKhauMoi2 && (
                        <div className="alert alert-danger">
                          {errors.matKhauMoi2.message}
                        </div>
                      )}
                    </FormGroup>
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
            <FormGroup className="inputGroup">
              <Button
                disabled={
                  dirtyFields &&
                  Object.keys(dirtyFields).length === 0 &&
                  dirtyFields.constructor === Object
                }
                color="success"
              >
                Cập nhật thông tin
              </Button>
              {resError && <div className="alert alert-danger">{resError}</div>}
            </FormGroup>
          </Form>
        </div>
        <div className="lichSuDatVe">
          <h1>LỊCH SỬ ĐẶT VÉ</h1>
          {thongTinDatVe.map((item) => (
            <div key={item.maVe} className="p-1 mb-1 bg-light">
              <div>Mã vé: {item.maVe}</div>
              <div>Ngày đặt: {item.ngayDat}</div>
              <div>Tên phim: {item.tenPhim}</div>
              <div>Thời lượng: {item.thoiLuongPhim}</div>
              <div>
                Rạp phim: {item.danhSachGhe[0].tenHeThongRap} -{" "}
                {item.danhSachGhe[0].tenCumRap}
              </div>
              <div>
                Ghế:{" "}
                {item.danhSachGhe.map((ghe, index) => (
                  <span key={index}>ghế {ghe.tenGhe},</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}
