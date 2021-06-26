import {
  GET_CINEMAS_BY_ID_REQUEST,
  GET_CINEMAS_BY_ID_SUCCESS,
  GET_CINEMAS_BY_ID_FAILURE,
} from "../constants/heThongRap";

const initialState = {
  selectedCinema: {},
  isLoading: false,
  error: null,
};

function selectedCinemaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CINEMAS_BY_ID_REQUEST: {
      return {
        selectedCinema: {},
        isLoading: true,
        error: null,
      };
    }
    case GET_CINEMAS_BY_ID_SUCCESS: {
      return {
        selectedCinema: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case GET_CINEMAS_BY_ID_FAILURE: {
      return {
        selectedCinema: {},
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}

export default selectedCinemaReducer;
