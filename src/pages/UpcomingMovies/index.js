import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhim } from "../../actions/movies";
import IsLoading from "../../components/IsLoading";
import SubContent from "../../components/SubContent";
import { pageTitleChange } from "../../actions/pageTitle";

export default function UpcomingMovies() {
  const { danhSachPhim, isLoading, error } = useSelector((state) => state.danhSachPhim);
  const dispatch = useDispatch();
  const [upcomingMovies, setUpcomingMovies] = useState([]);

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

  useEffect(() => {
    if (danhSachPhim.length > 0) {
      setUpcomingMovies([]);
      const today = new Date("2019-07-29T00:00:00");
      danhSachPhim.forEach((movie) => {
        const day = new Date(movie.ngayKhoiChieu);
        if (day > today) {
          setUpcomingMovies((upcomingMovies) => [
            ...upcomingMovies,
            movie,
          ]);
        }
      });
    }
  }, [danhSachPhim]);

  return isLoading ? (
    <IsLoading />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container">
      <SubContent title="PHIM SẮP CHIẾU" data={upcomingMovies} />
    </div>
  );
}
