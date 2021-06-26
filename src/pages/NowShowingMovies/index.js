import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhim } from "../../actions/movies";
import IsLoading from "../../components/IsLoading";
import SubContent from "../../components/SubContent";

export default function NowShowingMovies() {
  const { danhSachPhim, isLoading, errror } = useSelector((state) => state.danhSachPhim);
  const dispatch = useDispatch();
  const [nowShowingMovies, setNowShowingMovies] = useState([]);

  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    dispatch(layDanhSachPhim());
  }, []);

  useEffect(() => {
    if (danhSachPhim.length > 0) {
      setNowShowingMovies([]);
      const today = new Date("2019-07-29T00:00:00");
      danhSachPhim.forEach((movie) => {
        const day = new Date(movie.ngayKhoiChieu);
        if (day <= today) {
          setNowShowingMovies((nowShowingMovies) => [
            ...nowShowingMovies,
            movie,
          ]);
        }
      });
    }
  }, [danhSachPhim]);

  return isLoading ? (
    <IsLoading />
  ) : errror ? (
    <div>{errror}</div>
  ) : (
    <div className="container">
      <SubContent title="PHIM ĐANG CHIẾU" data={nowShowingMovies} />
    </div>
  );
}
