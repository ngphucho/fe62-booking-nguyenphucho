import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../actions/movie";

import IsLoading from "../../components/IsLoading";
import MovieDetail from "../../components/MovieDetail";

export default function Movie() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { movie, isLoading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [movieId]);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <MovieDetail detail={movie} />
  );
}
