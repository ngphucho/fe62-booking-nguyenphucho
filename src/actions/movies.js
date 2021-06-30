import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from "../constants/movies";

import quanLyPhimAPI from "../services/quanLyPhimAPI";
// import { httpToHttps } from "../utils/myFunction";

export function layDanhSachPhim() {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIES_REQUEST });
    try {
      const { data } = await quanLyPhimAPI.layDanhSachPhim();
      // console.log("before", data);
      // console.log("after", httpToHttps(data));
      dispatch({ type: GET_MOVIES_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function layDanhSachPhimTheoTen(keyword) {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIES_REQUEST });
    try {
      const { data } = await quanLyPhimAPI.layDanhSachPhimTheoTen(keyword);
      dispatch({ type: GET_MOVIES_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
