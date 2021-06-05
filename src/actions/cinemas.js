import {
  GET_CINEMAS_REQUEST,
  GET_CINEMAS_SUCCESS,
  GET_CINEMAS_FAILURE,
  GET_CINEMAS_BY_ID_REQUEST,
  GET_CINEMAS_BY_ID_SUCCESS,
  GET_CINEMAS_BY_ID_FAILURE
} from "../constants/cinemas";

import cinemasAPI from "../services/cinemasAPI";

export function getCinemas() {
  return async (dispatch) => {
    dispatch({ type: GET_CINEMAS_REQUEST });
    try {
      const { data } = await cinemasAPI.getCinemas();
      dispatch({ type: GET_CINEMAS_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_CINEMAS_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function getCinemasById(id) {
  return async (dispatch) => {
    dispatch({ type: GET_CINEMAS_BY_ID_REQUEST });
    try {
      const { data } = await cinemasAPI.getCinemas(id);
      dispatch({ type: GET_CINEMAS_BY_ID_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_CINEMAS_BY_ID_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
