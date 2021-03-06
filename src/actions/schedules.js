import {
  LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUEST,
  LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_SUCCESS,
  LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_FAILURE,
} from "../constants/schedules";
import lichChieuPhimAPI from "../services/lichChieuPhimAPI";

export function layThongTinLichChieuHeThongRap(maHeThongRap) {
  return async (dispatch) => {
    dispatch({ type: LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUEST });
    try {
      const { data } = await lichChieuPhimAPI.layThongTinLichChieuHeThongRap(
        maHeThongRap
      );
      dispatch({
        type: LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
