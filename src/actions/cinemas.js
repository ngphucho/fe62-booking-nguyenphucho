import {
  GET_CINEMAS_REQUEST,
  GET_CINEMAS_SUCCESS,
  GET_CINEMAS_FAILURE,
} from "../constants/cinemas";

import cinemasAPI from "../services/cinemasAPI";

export function getCinemas(id) {
  return async (dispatch) => {
    dispatch({ type: GET_CINEMAS_REQUEST });
    try {
      const { data } = await cinemasAPI.getCinemas(id);
      dispatch({ type: GET_CINEMAS_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_CINEMAS_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
