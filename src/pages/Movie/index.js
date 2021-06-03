import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovies } from "../../actions/movies";
import { getMovieById } from "../../actions/movie";

import IsLoading from "../../components/IsLoading";
import MovieDetail from "../../components/MovieDetail";

export default function Movie() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { movies } = useSelector((state) => state.movies);
  const { movie, isLoading, error } = useSelector((state) => state.movie);

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    // console.log("3. MoviePage");
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [movieId]);

  useEffect(() => {
    // console.log("movie: ", movie);
  }, [movie]);

  // return <div>search</div>

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <MovieDetail detail={movie} />
  );
}
