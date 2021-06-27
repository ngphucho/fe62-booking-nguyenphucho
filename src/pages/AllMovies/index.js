import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import action
import { layDanhSachPhim } from "../../actions/movies";
import { pageTitleChange } from "../../actions/pageTitle";

import IsLoading from "../../components/IsLoading";
import SubContent from "../../components/SubContent";
export default function AllMovies() {
  const dispatch = useDispatch();
  const { danhSachPhim, isLoading, error } = useSelector((state) => state.danhSachPhim);

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //dispatch action goi API lay danh sach phim
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

  return isLoading ? (
    <IsLoading />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container">
      <SubContent title="TẤT CẢ PHIM" data={danhSachPhim} />
    </div>
  );
}
