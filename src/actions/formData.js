import { FORM_DATA_CHANGE } from "../constants/formData";

export const changeFormData = (data) => {
  return { type: FORM_DATA_CHANGE, payload: { data } };
};
