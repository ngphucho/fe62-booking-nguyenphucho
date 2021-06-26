import { SNACKBAR_THONG_BAO_TOGGLE } from "../constants/snackbarThongBao";

export const snackbarThongBaoToggle = (data) => {
  return { type: SNACKBAR_THONG_BAO_TOGGLE, payload: { data } };
};
