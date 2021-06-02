import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CLOSE_TRAILER } from "../../constants/selectedMovie";
import { setOpen, changeSelectedMovie } from "../../actions/selectedMovie";

export default function MovieItem({ movie }) {
  // const [isOpen, setOpen] = useState(false);
  const { isOpen } = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="card text-white itemMovieCard my-2">
      <div className="itemMovieImage">
        <img
          className="card-img-top"
          height="100%"
          src={movie.hinhAnh}
          alt={movie.biDanh}
        />
      </div>
      <div className="itemMovieEffect d-flex flex-column justify-content-around">
        <p>Tên Phim: {movie.tenPhim}</p>
        <p>Mô tả: {movie.moTa.slice(0, 120)}</p>
        <p>Ngày khởi chiếu: {movie.ngayKhoiChieu.slice(0, 10)}</p>
        <div className="d-flex justify-content-around">
          <button
            className="btn btn-outline-success"
            onClick={() => {
              history.push("/movie/" + movie.maPhim);
            }}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              // dispatch(setOpen(true));
              dispatch(changeSelectedMovie(movie));
            }}
          >
            Trailer
          </button>
        </div>
      </div>
      <div className="card-body itemMovieBody text-center">
        <h5 className="card-title itemMovieTitle">{movie.tenPhim}</h5>
        <p className="card-text">{movie.danhGia}/10</p>
      </div>
    </div>
  );
}
// const arr = [
//   {
//     maPhim: 1329,
//     tenPhim: "Bố Già",
//     biDanh: "bo-gia",
//     trailer: "https://www.youtube.com/embed/jluSu8Rw6YE",
//     hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg",
//     moTa: "Tui Chưa Coi Nên Chưa Biết",
//     maNhom: "GP01",
//     ngayKhoiChieu: "2021-04-03T00:00:00",
//     danhGia: 10,
//   },
// ];
