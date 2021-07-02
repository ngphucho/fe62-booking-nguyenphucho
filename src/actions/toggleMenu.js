import {
  TOGGLE_MENU_HIDE,
  TOGGLE_MENU_SHOW,
  TOGGLE_MENU,
} from "../constants/toggleMenu";

export const toggleMenu = (type) => {
  if (type === "open") {
    return { type: TOGGLE_MENU_SHOW };
  }
  if (type === "close") {
    return { type: TOGGLE_MENU_HIDE };
  }
  return { type: TOGGLE_MENU };
};
