import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from "../constants/movies";

import moviesAPI from "../services/moviesAPI";

export function getMovies() {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIES_REQUEST });
    try {
      const { data } = await moviesAPI.getMovies();
      dispatch({ type: GET_MOVIES_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
