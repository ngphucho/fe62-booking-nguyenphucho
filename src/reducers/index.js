import { combineReducers } from "redux";
import movies from "./movies"; // Luu tat ca phim
import selectedMovie from "./selectedMovie"; // Luu 1 object phim duoc chon de dung chung cho nhieu component
import movie from "./movie"; // Luu detail cua phim
import moviesSearch from "./moviesSearch"; // Luu ket qua tim kiem phim
import cinemas from "./cinemas"; // Luu danh sach rap phim
import cinema from "./cinema"; // Luu danh dach cum ram (cinema detail)
import selectedCinema from "./selectedCinema";// Luu cinemas duoc chon
// import auth from "./auth";

const rootReducer = combineReducers({
  // nơi chứa các reducers con
  movies,
  selectedMovie,
  movie,
  moviesSearch,
  cinemas,
  cinema,
  selectedCinema,
  // auth,
});

export default rootReducer;
