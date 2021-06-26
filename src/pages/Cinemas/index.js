import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinHeThongRap } from "../../actions/heThongRap";
import IsLoading from "../../components/IsLoading";
import ListCinemas from "../../components/ListCinemas";

export default function Cinemas() {
  const dispatch = useDispatch();
  const { danhSachHeThongRap, isLoading, error } = useSelector((state) => state.danhSachHeThongRap);

  useEffect(() => {
    dispatch(layThongTinHeThongRap());
  }, []);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : (
    <ListCinemas danhSachHeThongRap={danhSachHeThongRap}></ListCinemas>
  );
}
