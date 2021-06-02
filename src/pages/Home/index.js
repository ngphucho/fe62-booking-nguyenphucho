import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "../../components/MainContent";
import MyCarousel from "../../components/MyCarousel";
import { getMovies } from "../../actions/movies";
import OrderTicketBox from "../../components/OrderTicketBox";
import TrailerModal from "../../components/TrailerModal";
import IsLoading from "../../components/IsLoading";

export default function Home() {
  const dispatch = useDispatch();
  const { movies, error, isLoading } = useSelector((state) => state.movies);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [comingMovies, setComingMovies] = useState([]);
  const [isPending, setPending] = useState(true);

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    dispatch(getMovies());
    setTimeout(() => {
      setPending(false);
    }, 2000);
  }, []);

  //Chay khi movie thay doi => tao 2 mang moi: mang phim dang chieu va mang phim sap chieu
  useEffect(() => {
    if (movies.length > 0) {
      const today = new Date("2019-07-29T00:00:00");
      movies.forEach((movie) => {
        const day = new Date(movie.ngayKhoiChieu);
        if (day > today) {
          setComingMovies((comingMovies) => [...comingMovies, movie]);
        } else {
          setCurrentMovies((currentMovies) => [...currentMovies, movie]);
        }
      });
    }
  }, [movies]);

  return isLoading || isPending ? (
    <IsLoading></IsLoading>
  ) : (
    <div>
      <MyCarousel></MyCarousel>

      {/* <MainContent></MainContent> */}
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <TrailerModal></TrailerModal>
          <OrderTicketBox></OrderTicketBox>
          <MainContent
            currentMovies={currentMovies.slice(0, 8)}
            comingMovies={comingMovies.slice(0, 8)}
          ></MainContent>
        </div>
      )}
    </div>
  );
}
