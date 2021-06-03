import {
  GET_CINEMAS_REQUEST,
  GET_CINEMAS_SUCCESS,
  GET_CINEMAS_FAILURE,
} from "../constants/cinemas";

const initialState = {
  cinemas: [],
  isLoading: false,
  error: null,
};

function cinemasReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CINEMAS_REQUEST: {
      return {
        cinemas: [],
        isLoading: true,
        error: null,
      };
    }
    case GET_CINEMAS_SUCCESS: {
      return {
        isLoading: false,
        error: null,
        cinemas: action.payload.data,
      };
    }
    case GET_CINEMAS_FAILURE: {
      return {
        cinemas: [],
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}

export default cinemasReducer;
