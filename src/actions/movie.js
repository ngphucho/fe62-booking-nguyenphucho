import {
  CHANGE_VALUE_SEARCH,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from "../constants/movie";
import quanLyPhimAPI from "../services/quanLyPhimAPI";

export function changeValueSearch(value) {
  return {
    type: CHANGE_VALUE_SEARCH,
    payload: {
      value,
    },
  };
}

export function layThongTinPhim(id) {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE_REQUEST });
    try {
      const { data } = await quanLyPhimAPI.layThongTinPhim(id);
      dispatch({ type: GET_MOVIE_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
