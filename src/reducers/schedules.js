import {
  LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUEST,
  LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_SUCCESS,
  LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_FAILURE,
} from "../constants/schedules";

const initialState = {
  type: null, //PHAN BIET LICH CHIEU THEO HE THONG RAP HAY THEO PHIM => TYPE = HE_THONG_RAP | PHIM
  data: null,
  isLoading: false,
  error: null,
};

function schedulesReducer(state = initialState, action) {
  switch (action.type) {
    case LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUEST: {
      return {
        type: null,
        data: null,
        isLoading: true,
        error: null,
      };
    }
    case LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_SUCCESS: {
      return {
        type: "HE_THONG_RAP",
        data: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_FAILURE: {
      return {
        type: null,
        data: null,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}

export default schedulesReducer;