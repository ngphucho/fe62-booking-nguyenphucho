import { combineReducers } from "redux";
import movies from "./movies";// Luu tat ca phim
import selectedMovie from "./selectedMovie";// Luu 1 object phim duoc chon de dung chung cho nhieu component
import movie from "./movie";// Luu detail cua phim
import moviesSearch from "./moviesSearch";// Luu ket qua tim kiem phim
// import auth from "./auth";

const rootReducer = combineReducers({
  // nơi chứa các reducers con
  movies,
  selectedMovie,
  movie,
  moviesSearch,
  // auth,
});

export default rootReducer;
