import {
  GET_CINEMA_REQUEST,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_FAILURE,
} from "../constants/cinema";

const initialState = {
  danhSachCumRap: [],
  isLoading: false,
  error: null,
};

function danhSachCumRapReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CINEMA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case GET_CINEMA_SUCCESS: {
      // console.log("thanh cong", action.payload.data)
      return {
        ...state,
        isLoading: false,
        error: null,
        danhSachCumRap: action.payload.data,
      };
    }
    case GET_CINEMA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}

export default danhSachCumRapReducer;
