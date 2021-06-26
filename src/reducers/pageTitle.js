import { PAGE_TITLE_CHANGE } from "../constants/pageTitle";

const initialState = {
  pageTitle: "Quản lý người dùng",
};

const pageTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_TITLE_CHANGE: {
      return {
        pageTitle: action.payload.data.pageTitle,
      };
    }
    default:
      return state;
  }
};

export default pageTitleReducer;
