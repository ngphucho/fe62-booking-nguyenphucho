import React, { useEffect, useState } from "react";
import lichChieuPhimAPI from "../../services/lichChieuPhimAPI";
import { useForm, Controller } from "react-hook-form";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function TestPage() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [heThongRap, setHeThongRap] = useState(null);
  const [cumRap, setCumRap] = useState(null);
  const [phim, setPhim] = useState(null);

  useEffect(async () => {
    const { data } = await lichChieuPhimAPI.layThongTinLichChieuHeThongRap("");
    setHeThongRap(data);
  }, []);

  useEffect(() => {
    if (heThongRap) {
      console.log("1. he thong rap: ", heThongRap);
      setCumRap(heThongRap[0].lstCumRap);
    } else setCumRap(null);
  }, [heThongRap]);

  useEffect(() => {
    if (cumRap) {
      console.log("2. cum rap", cumRap);
      setPhim(cumRap[0].danhSachPhim);
    } else setPhim(null);
  }, [cumRap]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label>HE THONG RAP</Label>
        <Controller
          name="heThongRap"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="select"
              onChange={({ target }) => {
                const index = heThongRap.findIndex(
                  (item) => item.maHeThongRap === target.value
                );
                setCumRap(heThongRap[index].lstCumRap);
              }}
              disabled={!heThongRap}
            >
              {heThongRap ? (
                heThongRap.map((item) => (
                  <option key={item.maHeThongRap} value={item.maHeThongRap}>
                    {item.tenHeThongRap}
                  </option>
                ))
              ) : (
                <option>Không có dữ liệu</option>
              )}
            </Input>
          )}
        />
      </FormGroup>

      {/* cum rap */}
      <FormGroup>
        <Label>CUM RAP</Label>
        <Controller
          name="cumRap"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="select"
              onChange={({ target }) => {
                const index = cumRap.findIndex(
                  (item) => item.maCumRap === target.value
                );
                setPhim(cumRap[index].danhSachPhim);
              }}
              disabled={!cumRap}
            >
              {cumRap ? (
                cumRap.map((item) => (
                  <option key={item.maCumRap} value={item.maCumRap}>
                    {item.tenCumRap}
                  </option>
                ))
              ) : (
                <option>Không có dữ liệu</option>
              )}
            </Input>
          )}
        />
      </FormGroup>

      {/* Phim */}
      <FormGroup>
        <Label>PHIM</Label>
        <Controller
          name="phim"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="select"
              onChange={({ target }) => {
                console.log(target.value);
              }}
              disabled={!phim}
            >
              {phim ? (
                phim.map((item) => (
                  <>
                    <option
                      style={{
                        backgroundImage: `url(${item.hinhAnh})`,
                        height: "100px",
                        display: "block",
                        lineHeight: "100px",
                        fontSize: "50px",
                        padding: "20px"
                      }}
                      key={item.maPhim}
                      value={item.maPhim}
                    >
                      {item.tenPhim}
                    </option>
                    <option
                      style={{
                        backgroundImage: `url(${item.hinhAnh})`,
                        height: "100px",
                        display: "block",
                      }}
                    >
                      1
                    </option>
                  </>
                ))
              ) : (
                <option>Không có dữ liệu</option>
              )}
            </Input>
          )}
        />
      </FormGroup>
    </Form>
  );
}
