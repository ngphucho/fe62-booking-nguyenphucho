import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/auth";
import authAPI from "../services/authAPI";

export function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: LOGOUT });
  };
}
