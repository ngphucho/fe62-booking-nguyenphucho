import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../actions/movie";
import scheduleAPI from "../../services/scheduleAPI";

import IsLoading from "../../components/IsLoading";
import MovieDetail from "../../components/MovieDetail";
import ThongTinLichChieuPhim from "../../components/ThongTinLichChieuPhim";

export default function Movie() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { movie, isLoading, error } = useSelector((state) => state.movie);
  const [thongTinLichChieuPhim, setThongTinLichChieuPhim] = useState(null);

  useEffect(async () => {
    dispatch(getMovieById(movieId)); // lay chi tiet phim
    // dispatch(layThongTinLichChieuPhim(movieId));
    const { data: heThongRapChieu } =
      await scheduleAPI.layThongTinLichChieuPhim(movieId);
    setThongTinLichChieuPhim(heThongRapChieu);
  }, [movieId]);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="movie">
      <MovieDetail detail={movie} />
      {thongTinLichChieuPhim ? (
        <ThongTinLichChieuPhim thongTinLichChieuPhim={thongTinLichChieuPhim} />
      ) : null}
    </div>
  );
}
