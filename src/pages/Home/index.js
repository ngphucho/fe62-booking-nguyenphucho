import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "../../components/MainContent";
import MyCarousel from "../../components/MyCarousel";
import OrderTicketBox from "../../components/OrderTicketBox";
import IsLoading from "../../components/IsLoading";
import { layThongTinLichChieuHeThongRap } from "../../actions/schedules";
import ThongTinLichChieuHeThongRap2 from "../ThongTinLichChieuHeThongRap2";
import { pageTitleChange } from "../../actions/pageTitle";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isSm = useMediaQuery({ minWidth: 576 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const isLg = useMediaQuery({ minWidth: 992 });
  const isXl = useMediaQuery({ minWidth: 1200 });
  const dispatch = useDispatch();
  const { danhSachPhim, error, isLoading } = useSelector(
    (state) => state.danhSachPhim
  );
  const [nowShowingMovies, setNowShowingMovies] = useState([]);
  const [upcomingMovies, setUpComingMovies] = useState([]);
  const [isPending, setPending] = useState(true);
  const [soLuong, setSoLuong] = useState(() => {
    if (isXl) return 12;
    if (isLg) return 8;
    if (isSm) return 6;
    return 4;
  });
  const { data } = useSelector((state) => state.schedules);

  //Được chạy mỗi khi load trang này =>
  useEffect(() => {
    //lay thong tin lich chieu theo he thong rap
    dispatch(layThongTinLichChieuHeThongRap());

    //set thoi gian hien thi icon Loading (icon loading hien thi it nhat 2s, va an sau khi danhsachphim tai xong)
    setTimeout(() => {
      setPending(false);
    }, 2000);

    //set activePage
    dispatch(
      pageTitleChange({
        activePage: 1,
        pageTitle: "",
      })
    );
  }, []);

  // useEffect(()=>{
  //   window.scrollTo(0, 0);
  // })

  useEffect(() => {
    setSoLuong(() => {
      if (isXl) return 12;
      if (isLg) return 8;
      if (isSm) return 6;
      return 4;
    });
  }, [isXl, isLg, isSm]);

  //Chay khi movie thay doi => tao 2 mang moi: mang phim dang chieu va mang phim sap chieu
  useEffect(() => {
    if (danhSachPhim.length > 0) {
      setNowShowingMovies([]);
      setUpComingMovies([]);
      const today = new Date("2019-07-29T00:00:00");
      danhSachPhim.forEach((movie) => {
        const day = new Date(movie.ngayKhoiChieu);
        if (day > today) {
          setUpComingMovies((upcomingMovies) => [...upcomingMovies, movie]);
        } else {
          setNowShowingMovies((nowShowingMovies) => [
            ...nowShowingMovies,
            movie,
          ]);
        }
      });
    }
  }, [danhSachPhim]);

  // useEffect(() => {
  //   console.log(soLuong);
  // }, [soLuong]);

  return isLoading || isPending ? (
    <IsLoading></IsLoading>
  ) : (
    <div className="home">
      <MyCarousel></MyCarousel>

      {/* <MainContent></MainContent> */}
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="container-md homeBody p-0">
          <div className="oderTicketBox">
            <OrderTicketBox></OrderTicketBox>
          </div>
          <MainContent
            currentMovies={nowShowingMovies.slice(0, soLuong)}
            comingMovies={upcomingMovies.slice(0, soLuong)}
          ></MainContent>
          {data ? (
            <ThongTinLichChieuHeThongRap2 danhSachHeThongRap={data} />
          ) : null}
        </div>
      )}
    </div>
  );
}
