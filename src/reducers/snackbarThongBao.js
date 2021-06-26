import { SNACKBAR_THONG_BAO_TOGGLE } from "../constants/snackbarThongBao";

const initialState = {
  isOpen: false,
  message: "",
  type: "success",
  autoHideTime: null,
};

const snackbarThongBaoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACKBAR_THONG_BAO_TOGGLE: {
      return {
        isOpen: !state.isOpen,
        message: action.payload.data.message,
        type: action.payload.data.type,
        autoHideTime: action.payload.data.autoHideTime,
      };
    }
    default:
      return state;
  }
};

export default snackbarThongBaoReducer;
