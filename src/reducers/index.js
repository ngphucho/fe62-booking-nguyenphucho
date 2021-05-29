import { combineReducers } from "redux";
import movies from "./movies";
// import auth from "./auth";

const rootReducer = combineReducers({
  // nơi chứa các reducers con
  movies,
  // auth,
});

export default rootReducer;