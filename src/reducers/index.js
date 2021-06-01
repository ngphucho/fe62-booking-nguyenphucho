import { combineReducers } from "redux";
import movies from "./movies";
import selectedMovie from "./selectedMovie";
import searchValue from "./searchValue";
// import auth from "./auth";

const rootReducer = combineReducers({
  // nơi chứa các reducers con
  movies,
  selectedMovie,
  searchValue,
  // auth,
});

export default rootReducer;
