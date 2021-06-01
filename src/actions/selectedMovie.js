import {
  CHANGE_SELECTED_MOVIE,
  CLOSE_TRAILER,
} from "../constants/selectedMovie";

export function setOpen(status) {
  return {
    type: CLOSE_TRAILER,
    payload: { isOpen: status },
  };
}

export function changeSelectedMovie(data) {
  return {
    type: CHANGE_SELECTED_MOVIE,
    payload: { data: data },
  };
}
