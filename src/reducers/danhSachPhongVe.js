import {
  LAY_DANH_SACH_PHONG_VE_REQUEST,
  LAY_DANH_SACH_PHONG_VE_SUCCESS,
  LAY_DANH_SACH_PHONG_VE_FAILURE,
  DAT_GHE,
} from "../constants/quanLyDatVe";

const initialState = {
  danhSachPhongVe: null,
  isLoading: true,
  error: null,
};

function danhSachPhongVeReducer(state = initialState, action) {
  switch (action.type) {
    //lay danh sach phong ve
    case LAY_DANH_SACH_PHONG_VE_REQUEST: {
      return {
        danhSachPhongVe: null,
        isLoading: true,
        error: null,
      };
    }
    case LAY_DANH_SACH_PHONG_VE_SUCCESS: {
      return {
        danhSachPhongVe: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case LAY_DANH_SACH_PHONG_VE_FAILURE: {
      return {
        danhSachPhongVe: null,
        isLoading: false,
        error: action.payload.error,
      };
    }
    // chon / huy ghe
    case DAT_GHE: {
      const newState = { ...state };
      const { row, col } = action.payload;
      newState.danhSachPhongVe.danhSachGhe[row][col].dangChon =
        !newState.danhSachPhongVe.danhSachGhe[row][col].dangChon;
      return newState;
    }
    default:
      return state;
  }
}

export default danhSachPhongVeReducer;
