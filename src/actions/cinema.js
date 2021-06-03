import {
  GET_CINEMA_REQUEST,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_FAILURE,
} from "../constants/cinema";

import cinemasAPI from "../services/cinemasAPI";

export function getCinemaById(id) {
  return async (dispatch) => {
    dispatch({ type: GET_CINEMA_REQUEST });
    try {
      const { data } = await cinemasAPI.getCinemaById(id);
      dispatch({ type: GET_CINEMA_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_CINEMA_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
