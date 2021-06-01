import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "../../components/MainContent";
import MyCarousel from "../../components/MyCarousel";
import { getMovies } from "../../actions/movies";
import OrderTicketBox from "../../components/OrderTicketBox";
import TrailerModal from "../../components/TrailerModal";

export default function Home() {
  const dispatch = useDispatch();
  // const { category } = useParams();
  const { movies, error } = useSelector((state) => state.movies);
  const { value } = useSelector((state) => state.searchValue);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [comingMovies, setComingMovies] = useState([]);

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    dispatch(getMovies());
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

  //chay moi khi inputValue thay doi => goi lenh tim kiem/ di den trang detail
  useEffect(() => {
    // if(Array().indexOf(movie=>movie.tenPhim===))
    console.log(value);
  }, [value]);

  return (
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
