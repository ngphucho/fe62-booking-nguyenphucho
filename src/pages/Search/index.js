import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
//import action
import { getMovies } from "../../actions/movies";
import { getMoviesByName } from "../../actions/moviesSearch";

import IsLoading from "../../components/IsLoading";
import MovieItem from "../../components/MovieItem";

export default function Search() {
  const dispatch = useDispatch();
  let { keyword } = useParams();
  const history = useHistory();
  const { movies } = useSelector((state) => state.movies);
  const { moviesSearch, isLoading, error } = useSelector(
    (state) => state.moviesSearch
  );

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //dispatch action goi API lay danh sach phim
    console.log("2. SearchPage");
    console.log("moviesSearch1", moviesSearch);
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    console.log("keyword = " + keyword);
    dispatch(getMoviesByName(keyword));
  }, [keyword]);

  useEffect(() => {
    if (moviesSearch.length === 1 && keyword === moviesSearch[0].tenPhim) {
      console.log("moviesSearch2", moviesSearch);
      console.log("/movie/" + moviesSearch[0].maPhim);
      history.push("/movie/" + moviesSearch[0].maPhim);
    }
  }, [moviesSearch]);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : (
    <div className="container">
      <h1>Kết quả tìm kiếm</h1>
      <div className="row">
        {moviesSearch.map((item) => (
          <div key={item.moTa} className="col-md-3">
            <MovieItem movie={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
