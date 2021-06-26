import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FormControl, FormGroup, Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { inputList } from "./inputList";

//schema dieu kien rang buoc cho form
const schema = yup.object().shape({
  maPhim: yup.number().required().integer(),
  tenPhim: yup.string().required(),
  // biDanh: yup.string().required(),
  trailer: yup.string(),
  hinhAnh: yup.mixed().required(),
  moTa: yup.string().required(),
  maNhom: yup.string().required(),
  ngayKhoiChieu: yup.string().required(),
  danhGia: yup.number().required().integer().positive().min(0).max(10),
});
export default function FormPhim({ handleFormSubmit, formData }) {
  const dispatch = useDispatch();
  //khoi tao defautvalue cho form
  let defaultV = {};
  if (formData.values) {
    defaultV = formData.values;
  } else {
    inputList.forEach((item) => {
      // if (item.inputName !== "hinhAnh") {
      defaultV = { ...defaultV, [item.inputName]: item.deafaultValue };
      // }
    });
  }
  //luu file data hinh anh
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({
    defaultValues: defaultV,
    resolver: yupResolver(schema),
  });

  //goi khi sumbit form
  const onSubmit = async (values) => {
    handleFormSubmit({ values, type: formData.type });
  };

  //xu ly khi doi file anh
  const handleChange = (e) => {
    // setHinhAnh(e.target.files[0]);
    setValue("hinhAnh", e.target.files[0]);
    trigger(["hinhAnh"]);
  };

  //render input control
  const switchItem = (item) => {
    switch (item.type) {
      case "text":
      case "number":
        return (
          <>
            <Controller
              name={item.inputName}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  disabled={item.disabled}
                  hidden={item.disabled}
                  type={item.type}
                  label={item.label}
                  variant="outlined"
                />
              )}
            />
            {errors[item.inputName] && (
              <div className="alert alert-danger">
                {errors[item.inputName].message}
              </div>
            )}
          </>
        );
      case "file":
        return (
          <>
            <TextField
              type={item.type}
              variant="outlined"
              onChange={handleChange}
            />
            {errors[item.inputName] && (
              <div className="alert alert-danger">
                {errors[item.inputName].message}
              </div>
            )}
          </>
        );
      default:
        break;
    }
  };

  return (
    <form
      // onSubmitCapture={() => {
      //   console.log(getValues());
      // }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputList.map((item) => (
        <FormControl key={item.inputName}>{switchItem(item)}</FormControl>
      ))}
      <FormControl>
        <Button type="submit" variant="outlined">
          {formData.button}
        </Button>
      </FormControl>
    </form>
  );
}
