import {
  GET_CINEMA_REQUEST,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_FAILURE,
} from "../constants/cinema";

import quanLyRapAPI from "../services/quanLyRapAPI";

export function layThongTinCumRapTheoHeThong(id) {
  return async (dispatch) => {
    dispatch({ type: GET_CINEMA_REQUEST });
    try {
      const { data } = await quanLyRapAPI.layThongTinCumRapTheoHeThong(id);
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
