import {
  CHANGE_VALUE_SEARCH,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from "../constants/movie";

const initialState = {
  value: "",
  movie: {},
  isLoading: true,
  error: "",
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE_SEARCH: {
      return {
        value: action.payload.value,
      };
    }
    //
    case GET_MOVIE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_MOVIE_SUCCESS: {
      return {
        ...state,
        movie: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case GET_MOVIE_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    //
    default:
      return state;
  }
}

export default movieReducer;
