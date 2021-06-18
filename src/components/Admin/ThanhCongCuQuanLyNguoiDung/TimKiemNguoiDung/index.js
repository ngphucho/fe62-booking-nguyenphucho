import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { timKiemNguoiDungPhanTrang } from "../../../../actions/quanLyNguoiDung";

export default function TimKiemNguoiDung() {
  const dispatch = useDispatch();
  const { MaNhom, soPhanTuTrenTrang } = useSelector(
    (state) => state.thongTinPhanTrangNguoiDung
  );
  const { control, handleSubmit } = useForm();
  const onSubmit = (value) => {
    dispatch(
      timKiemNguoiDungPhanTrang({
        tuKhoa: value.tuKhoa.trim() !== "" ? value.tuKhoa.trim() : null,
        MaNhom,
        soPhanTuTrenTrang,
        soTrang: 1,
      })
    );
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="d-flex">
      <FormGroup>
        <Controller
          name="tuKhoa"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder="... tim kiem"
              className="bg-white border-0 rounded-0"
            ></Input>
          )}
        />
      </FormGroup>
      <Button color="success">Tim kiem</Button>
    </Form>
  );
}
