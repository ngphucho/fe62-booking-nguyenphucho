import {
  GET_MOVIES_SEARCH_REQUEST,
  GET_MOVIES_SEARCH_SUCCESS,
  GET_MOVIES_SEARCH_FAILURE,
} from "../constants/moviesSearch";

const initalState = {
  moviesSearch: [],
  isLoading: false,
  error: null,
};

function moviesSearchReducer(state = initalState, action) {
  switch (action.type) {
    case GET_MOVIES_SEARCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case GET_MOVIES_SEARCH_SUCCESS: {
      return {
        ...state,
        moviesSearch: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case GET_MOVIES_SEARCH_FAILURE: {
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

export default moviesSearchReducer;
