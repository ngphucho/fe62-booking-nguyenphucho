import { PAGE_TITLE_CHANGE } from "../constants/pageTitle";

const initialState = {
  pageTitle: "",
  activePage: 1,
};

const pageTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_TITLE_CHANGE: {
      return {
        pageTitle: action.payload.data.pageTitle,
        activePage: action.payload.data.activePage,
      };
    }
    default:
      return state;
  }
};

export default pageTitleReducer;
