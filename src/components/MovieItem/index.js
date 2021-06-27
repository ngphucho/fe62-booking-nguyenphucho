import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeSelectedMovie } from "../../actions/selectedMovie";
import { generateStar } from "../../utils/myFunction";
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
        <div className="text-content">
          <p>
            <span>Tên Phim: </span>
            {movie.tenPhim}
          </p>
          <p>
            <span>Ngày khởi chiếu: </span>
            {movie.ngayKhoiChieu.slice(0, 10)}
          </p>
          <p>
            <span>Mô tả: </span>
            {movie.moTa.slice(0, 120)}
          </p>
        </div>
        <div className="d-flex justify-content-around button-content">
          <div
            onClick={() => {
              history.push("/movie/" + movie.maPhim);
            }}
          >
            Chi tiết
          </div>
          <div
            onClick={() => {
              // dispatch(setOpen(true));
              dispatch(changeSelectedMovie(movie));
            }}
          >
            Trailer
          </div>
        </div>
      </div>
      <div className="card-body itemMovieBody text-center">
        <h5 className="card-title itemMovieTitle">{movie.tenPhim}</h5>
        <p className="card-text movieScore">{generateStar(movie.danhGia, 10)}</p>
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
