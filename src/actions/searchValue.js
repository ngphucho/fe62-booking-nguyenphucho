import {
  CHANGE_VALUE_SEARCH,
  SEARCH_MOVIE_ID_FAILURE,
  SEARCH_MOVIE_ID_REQUEST,
  SEARCH_MOVIE_ID_SUCCESS,
} from "../constants/searchValue";
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
    dispatch({ type: SEARCH_MOVIE_ID_REQUEST });
    try {
      const { data } = await moviesAPI.getMovieById(id);
      dispatch({ type: SEARCH_MOVIE_ID_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: SEARCH_MOVIE_ID_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
