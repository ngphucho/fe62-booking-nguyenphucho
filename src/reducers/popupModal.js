import { POPUP_MODAL_TOGGLE } from "../constants/popupModal";

const initialState = {
  isOpen: false,
  title: "",
  // button: "",
  // type: "",
};

const popupModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_MODAL_TOGGLE: {
      const { title } = action.payload.data;
      return {
        isOpen: !state.isOpen,
        title,
        // button,
        // type,
      };
    }
    default:
      return state;
  }
};

export default popupModalReducer;
