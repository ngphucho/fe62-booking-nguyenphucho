import { THONG_TIN_TIM_kIEM_PHIM_CHANGE } from "../constants/thongTinTimKiemPhim";

const initialState = {
  tenPhim: "",
  tuNgay: "",
  denNgay: "",
  listCheckBox: [],
  danhGia: [1, 10],
};

const thongTinTimKiemPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case THONG_TIN_TIM_kIEM_PHIM_CHANGE: {
      console.log("reducer", action.payload.data);
      return action.payload.data;
    }
    default:
      return state;
  }
};

export default thongTinTimKiemPhimReducer;
