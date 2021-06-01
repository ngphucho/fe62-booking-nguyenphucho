import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovies } from "../../actions/movies";
import { getMovieById } from "../../actions/searchValue";

export default function Search() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { movies } = useSelector((state) => state.movies);
  const { movie, isLoading, error } = useSelector((state) => state.searchValue);

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [movieId]);

  useEffect(() => {
    console.log("Movie detail: ", movie);
  }, [movie]);

  // return <div>search</div>

  return error?<div>{error}</div>:<div>
    <div>Ma Phim: {movie.maPhim}</div>
    <div>Ten Phim: {movie.tenPhim}</div>
    <div>Mo ta: {movie.moTa}</div>
    <div>Ngay khoi chieu: {movie.ngayKhoiChieu}</div>
    {/* <div>Lich chieu: {movie.lichChieu}</div>
    <div>Lich chieu: {movie.lichChieu}</div>
    <div>Lich chieu: {movie.lichChieu}</div>
    <div>Lich chieu: {movie.lichChieu}</div>
    <div>Lich chieu: {movie.lichChieu}</div> */}
  </div>
}
