import {
  CHANGE_VALUE_SEARCH,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from "../constants/movie";
import moviesAPI from "../services/moviesAPI";

export function changeValueSearch(value) {
  return {
    type: CHANGE_VALUE_SEARCH,
    payload: {
      value,
    },
  };
}

export function getMovieById(id) {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE_REQUEST });
    try {
      const { data } = await moviesAPI.getMovieById(id);
      dispatch({ type: GET_MOVIE_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
