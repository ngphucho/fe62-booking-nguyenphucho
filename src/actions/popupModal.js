import { POPUP_MODAL_TOGGLE } from "../constants/popupModal";

export const popupModalToggle = (data) => {
  return { type: POPUP_MODAL_TOGGLE, payload: { data } };
};
