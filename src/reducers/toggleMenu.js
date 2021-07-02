import {
  TOGGLE_MENU_HIDE,
  TOGGLE_MENU_SHOW,
  TOGGLE_MENU,
} from "../constants/toggleMenu";

const initialState = {
  isOpen: false,
};

const toggleMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU_HIDE: {
      return {
        ...state,
        isOpen: false,
      };
    }
    case TOGGLE_MENU_SHOW: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case TOGGLE_MENU: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    default:
      return state;
  }
};

export default toggleMenuReducer;
