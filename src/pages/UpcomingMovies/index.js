import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/movies";
import IsLoading from "../../components/IsLoading";
import SubContent from "../../components/SubContent";

export default function UpcomingMovies() {
  const { movies, isLoading, errror } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      setUpcomingMovies([]);
      const today = new Date("2019-07-29T00:00:00");
      movies.forEach((movie) => {
        const day = new Date(movie.ngayKhoiChieu);
        if (day > today) {
          setUpcomingMovies((upcomingMovies) => [
            ...upcomingMovies,
            movie,
          ]);
        }
      });
    }
  }, [movies]);

  return isLoading ? (
    <IsLoading />
  ) : errror ? (
    <div>{errror}</div>
  ) : (
    <div className="container">
      <SubContent title="PHIM SẮP CHIẾU" data={upcomingMovies} />
    </div>
  );
}
