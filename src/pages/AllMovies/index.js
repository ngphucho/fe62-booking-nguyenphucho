import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//import action
import { layDanhSachPhim } from "../../actions/movies";
import { pageTitleChange } from "../../actions/pageTitle";
import { toggleMenu } from "../../actions/toggleMenu";

//import component
import IsLoading from "../../components/IsLoading";

//import khac
import PhanTrangAppLayout from "../../components/PhanTrangAppLayout";

export default function AllMovies() {
  const dispatch = useDispatch();
  const { danhSachPhim, isLoading, error } = useSelector(
    (state) => state.danhSachPhim
  );
  //dispatch action goi API lay danh sach phim
  useEffect(() => {
    dispatch(layDanhSachPhim());
  }, []);

  // set active page
  useEffect(() => {
    dispatch(
      pageTitleChange({
        activePage: 3,
        pageTitle: "",
      })
    );
  }, []);

  //close submenu o man hinh nho
  useEffect(() => {
    dispatch(toggleMenu("close"));
  }, []);

  return isLoading ? (
    <IsLoading />
  ) : error ? (
    <div>{error}</div>
  ) : (

    <PhanTrangAppLayout
      danhSachPhim={danhSachPhim}
      link="/tat-ca-phim"
      title="TẤT CẢ PHIM"
    />
  );
}
