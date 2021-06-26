import {
  GET_MOVIES_SEARCH_REQUEST,
  GET_MOVIES_SEARCH_SUCCESS,
  GET_MOVIES_SEARCH_FAILURE,
} from "../constants/moviesSearch";

import quanLyPhimAPI from "../services/quanLyPhimAPI";

export function layDanhSachPhimTheoTen(keyword) {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIES_SEARCH_REQUEST });
    try {
      const { data } = await quanLyPhimAPI.layDanhSachPhimTheoTen(keyword);
      dispatch({ type: GET_MOVIES_SEARCH_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIES_SEARCH_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
