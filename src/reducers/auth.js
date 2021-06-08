import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/auth";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo,
  isLoading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case LOGOUT: {
      return {
        userInfo: null,
        isLoading: false,
        error: null,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
