import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import IsLoading from "../../components/IsLoading";
import MovieDetail from "../../components/MovieDetail";
import ThongTinLichChieuPhim from "../../components/ThongTinLichChieuPhim";

//import action
import { toggleMenu } from "../../actions/toggleMenu";
import { layThongTinPhim } from "../../actions/movie";

// import services
import lichChieuPhimAPI from "../../services/lichChieuPhimAPI";

// import khac
import { phanTichMang } from "../../utils/myFunction";

export default function Movie() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { movie, isLoading, error } = useSelector((state) => state.movie);
  const [thongTinLichChieuPhim, setThongTinLichChieuPhim] = useState(null);
  const [thongTinLichChieuPhimFilter, setThongTinLichChieuPhimFiter] = useState(
    []
  );

  useEffect(() => {
    dispatch(layThongTinPhim(movieId)); // lay chi tiet phim
    const layTongTinLichChieu = async () => {
      const { data: heThongRapChieu } =
        await lichChieuPhimAPI.layThongTinLichChieuPhim(movieId);
      setThongTinLichChieuPhim(heThongRapChieu);
    };
    layTongTinLichChieu();
  }, [movieId]);

  //close submenu o man hinh nho
  useEffect(() => {
    dispatch(toggleMenu("close"));
  }, []);

  //xu ly thong tin lich chieu
  useEffect(() => {
    if (thongTinLichChieuPhim) {
      setThongTinLichChieuPhimFiter(phanTichMang(thongTinLichChieuPhim));
    }
  }, [thongTinLichChieuPhim]);

  // useEffect(() => {
  //   if (thongTinLichChieuPhimFilter) {
  //     console.log(thongTinLichChieuPhimFilter);
  //   }
  // }, [thongTinLichChieuPhimFilter]);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="movie container-md bodyContainer">
      <MovieDetail detail={movie} />
      {thongTinLichChieuPhim && (
        <ThongTinLichChieuPhim thongTinLichChieuPhim={thongTinLichChieuPhim} />
      )}
    </div>
  );
}
