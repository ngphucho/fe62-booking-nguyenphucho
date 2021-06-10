import {
  LAY_DANH_SACH_PHONG_VE_REQUEST,
  LAY_DANH_SACH_PHONG_VE_SUCCESS,
  LAY_DANH_SACH_PHONG_VE_FAILURE,
  DAT_GHE,
} from "../constants/quanLyDatVe";
import quanLyDatVeAPI from "../services/QuanLyDatVeAPI";
import createChairMap from "../utils/createChairMap";

// Lay danh sach phong ve
export const layDanhSachPhongVe = (maLichChieu) => {
  return async (dispatch) => {
    dispatch({ type: LAY_DANH_SACH_PHONG_VE_REQUEST });
    try {
      const {
        data: { thongTinPhim, danhSachGhe },
      } = await quanLyDatVeAPI.LayDanhSachPhongVe(maLichChieu);
      let i = 0;
      const chairMap = createChairMap.map1();
      const newDanhSachGhe = chairMap.map((row) => {
        return row.map((cell) => {
          if (cell) {
            return { ...danhSachGhe[i++], dangChon: false };
          }
          return cell;
        });
      });
      dispatch({
        type: LAY_DANH_SACH_PHONG_VE_SUCCESS,
        payload: { data: { thongTinPhim, danhSachGhe: newDanhSachGhe } },
      });
    } catch (error) {
      dispatch({
        type: LAY_DANH_SACH_PHONG_VE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
};

// Chon / huy chon ghe
export const chairToggle = (row, col) => {
  return { type: DAT_GHE, payload: { row, col } };
};
