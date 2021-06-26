import { THONG_TIN_TIM_kIEM_PHIM_CHANGE } from "../constants/thongTinTimKiemPhim";

export const thongTinTimKiemPhimChange = (data) => {
  return { type: THONG_TIN_TIM_kIEM_PHIM_CHANGE, payload: { data } };
};
