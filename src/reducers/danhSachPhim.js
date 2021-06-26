import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from "../constants/movies";

const initialState = {
  danhSachPhim: [],
  isLoading: false,
  error: null,
};

function danhSachPhimReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_MOVIES_SUCCESS: {
      return {
        ...state,
        danhSachPhim: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case GET_MOVIES_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default danhSachPhimReducer;
