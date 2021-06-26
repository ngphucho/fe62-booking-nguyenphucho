import {
  GET_CINEMAS_REQUEST,
  GET_CINEMAS_SUCCESS,
  GET_CINEMAS_FAILURE,
  GET_CINEMAS_BY_ID_REQUEST,
  GET_CINEMAS_BY_ID_SUCCESS,
  GET_CINEMAS_BY_ID_FAILURE,
} from "../constants/heThongRap";

import quanLyRapAPI from "../services/quanLyRapAPI";

export function layThongTinHeThongRap() {
  return async (dispatch) => {
    dispatch({ type: GET_CINEMAS_REQUEST });
    try {
      const { data } = await quanLyRapAPI.layThongTinHeThongRap();
      dispatch({ type: GET_CINEMAS_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_CINEMAS_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function layThongTinHeThongRapById(id) {
  return async (dispatch) => {
    // console.log("heeer");
    dispatch({ type: GET_CINEMAS_BY_ID_REQUEST });
    try {
      const { data } = await quanLyRapAPI.layThongTinHeThongRap(id);
      dispatch({ type: GET_CINEMAS_BY_ID_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_CINEMAS_BY_ID_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
