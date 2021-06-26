import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinPhim } from "../../actions/movie";
import lichChieuPhimAPI from "../../services/lichChieuPhimAPI";

import IsLoading from "../../components/IsLoading";
import MovieDetail from "../../components/MovieDetail";
import ThongTinLichChieuPhim from "../../components/ThongTinLichChieuPhim";

export default function Movie() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { movie, isLoading, error } = useSelector((state) => state.movie);
  const [thongTinLichChieuPhim, setThongTinLichChieuPhim] = useState(null);

  useEffect(() => {
    dispatch(layThongTinPhim(movieId)); // lay chi tiet phim
    const layTongTinLichChieu = async () => {
      const { data: heThongRapChieu } =
        await lichChieuPhimAPI.layThongTinLichChieuPhim(movieId);
      setThongTinLichChieuPhim(heThongRapChieu);
    };
    layTongTinLichChieu();
  }, [movieId]);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="movie">
      <MovieDetail detail={movie} />
      {thongTinLichChieuPhim && (
        <ThongTinLichChieuPhim thongTinLichChieuPhim={thongTinLichChieuPhim} />
      )}
    </div>
  );
}
