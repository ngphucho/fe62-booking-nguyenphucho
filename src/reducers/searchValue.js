import {
  CHANGE_VALUE_SEARCH,
  SEARCH_MOVIE_ID_FAILURE,
  SEARCH_MOVIE_ID_REQUEST,
  SEARCH_MOVIE_ID_SUCCESS,
} from "../constants/searchValue";

const initialState = {
  value: "",
  movie: {},
  isLoading: false,
  error: "",
};

function changeValueSearch(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE_SEARCH: {
      return {
        value: action.payload.value,
      };
    }
    //
    case SEARCH_MOVIE_ID_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case SEARCH_MOVIE_ID_SUCCESS: {
      return {
        ...state,
        movie: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case SEARCH_MOVIE_ID_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    //
    default:
      return state;
  }
}

export default changeValueSearch;
