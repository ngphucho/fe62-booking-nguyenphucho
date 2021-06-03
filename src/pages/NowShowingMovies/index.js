import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/movies";
import IsLoading from "../../components/IsLoading";
import SubContent from "../../components/SubContent";

export default function NowShowingMovies() {
  const { movies, isLoading, errror } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [nowShowingMovies, setNowShowingMovies] = useState([]);

  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const today = new Date("2019-07-29T00:00:00");
      movies.forEach((movie) => {
        const day = new Date(movie.ngayKhoiChieu);
        if (day <= today) {
          setNowShowingMovies((nowShowingMovies) => [
            ...nowShowingMovies,
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
      <SubContent title="PHIM ĐANG CHIẾU" data={nowShowingMovies} />
    </div>
  );
}
