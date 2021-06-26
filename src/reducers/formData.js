import { FORM_DATA_CHANGE } from "../constants/formData";

const initialState = {
  type: "",
  button: "",
  values: null,
};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_DATA_CHANGE: {
      return {
        ...action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default formDataReducer;
