import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "../../components/MainContent";
import MyCarousel from "../../components/MyCarousel";
import { getMovies } from "../../actions/movies";

export default function Home() {
  const dispatch = useDispatch();
  // const { category } = useParams();
  const { movies, error } = useSelector((state) => state.movies);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [comingMovies, setComingMovies] = useState([]);

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    dispatch(getMovies());
  }, []);

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
      // setCurrentMovies(cMovies=>[...]);
      // console.log("coming", comingMovies);
    }
  }, [movies]);
  return (
    <div>
      <MyCarousel></MyCarousel>
      {/* <MainContent></MainContent> */}
      {error ? (
        <div>{error}</div>
      ) : (
        <MainContent
          currentMovies={currentMovies.slice(0,8)}
          comingMovies={comingMovies.slice(0,8)}
        ></MainContent>
        // <div className="row">
        //   {movies.map((item) => (
        //     <div
        //       key={item.maPhim}
        //       className="card text-white col-md-4 p-2 border-0"
        //       style={{ height: "450px", overflow: "hidden" }}
        //     >
        //       <img
        //         className="card-img-top"
        //         style={{ height: "300px" }}
        //         src={item.hinhAnh}
        //         alt={item.biDanh}
        //       />
        //       <div className="card-body bg-primary ">
        //         <h4 className="card-title">{item.tenPhim}</h4>
        //         <p className="card-text">{item.moTa}</p>
        //       </div>
        //     </div>
        //   ))}
        // </div>
      )}
    </div>
  );
}
