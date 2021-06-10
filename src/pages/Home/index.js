import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "../../components/MainContent";
import MyCarousel from "../../components/MyCarousel";
import { getMovies } from "../../actions/movies";
import OrderTicketBox from "../../components/OrderTicketBox";
import IsLoading from "../../components/IsLoading";
import { Container } from "reactstrap";
import { layThongTinLichChieuHeThongRap } from "../../actions/schedules";
import ThongTinLichChieuHeThongRap2 from "../ThongTinLichChieuHeThongRap2";

export default function Home() {
  const dispatch = useDispatch();
  const { movies, error, isLoading } = useSelector((state) => state.movies);
  const [nowShowingMovies, setNowShowingMovies] = useState([]);
  const [upcomingMovies, setUpComingMovies] = useState([]);
  const [isPending, setPending] = useState(true);
  const { data } = useSelector((state) => state.schedules);

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    dispatch(getMovies());
    dispatch(layThongTinLichChieuHeThongRap());
    setTimeout(() => {
      setPending(false);
    }, 2000);
  }, []);

  //Chay khi movie thay doi => tao 2 mang moi: mang phim dang chieu va mang phim sap chieu
  useEffect(() => {
    if (movies.length > 0) {
      setNowShowingMovies([]);
      setUpComingMovies([]);
      const today = new Date("2019-07-29T00:00:00");
      movies.forEach((movie) => {
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
  }, [movies]);

  return isLoading || isPending ? (
    <IsLoading></IsLoading>
  ) : (
    <div className="home">
      <MyCarousel></MyCarousel>

      {/* <MainContent></MainContent> */}
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <Container>
            <OrderTicketBox></OrderTicketBox>
          </Container>
          <MainContent
            currentMovies={nowShowingMovies.slice(0, 8)}
            comingMovies={upcomingMovies.slice(0, 8)}
          ></MainContent>
          {data ? (
            <ThongTinLichChieuHeThongRap2 danhSachHeThongRap={data} />
          ) : null}
        </div>
      )}
    </div>
  );
}
