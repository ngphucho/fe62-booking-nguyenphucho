import {
  GET_CINEMAS_REQUEST,
  GET_CINEMAS_SUCCESS,
  GET_CINEMAS_FAILURE,
} from "../constants/heThongRap";

const initialState = {
  danhSachHeThongRap: [],
  isLoading: false,
  error: null,
};

function danhSachHeThongRapReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CINEMAS_REQUEST: {
      return {
        danhSachHeThongRap: [],
        isLoading: true,
        error: null,
      };
    }
    case GET_CINEMAS_SUCCESS: {
      return {
        isLoading: false,
        error: null,
        danhSachHeThongRap: action.payload.data,
      };
    }
    case GET_CINEMAS_FAILURE: {
      return {
        danhSachHeThongRap: [],
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}

export default danhSachHeThongRapReducer;
