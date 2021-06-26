import { PAGE_TITLE_CHANGE } from "../constants/pageTitle";

export const pageTitleChange = (data) => {
  return { type: PAGE_TITLE_CHANGE, payload: { data } };
};
