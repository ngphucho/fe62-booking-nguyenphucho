import {
  LAY_DANH_SACH_LOAI_NGUOI_DUNG_REQUEST,
  LAY_DANH_SACH_LOAI_NGUOI_DUNG_SUCCESS,
  LAY_DANH_SACH_LOAI_NGUOI_DUNG_FAILURE,
} from "../constants/quanLyNguoiDung";

const initialState = {
  danhSachLoaiNguoiDung: null,
  isLoading: true,
  error: null,
};

const danhSachLoaiNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_LOAI_NGUOI_DUNG_REQUEST: {
      return {
        danhSachLoaiNguoiDung: null,
        isLoading: true,
        error: null,
      };
    }
    case LAY_DANH_SACH_LOAI_NGUOI_DUNG_SUCCESS: {
      return {
        danhSachLoaiNguoiDung: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case LAY_DANH_SACH_LOAI_NGUOI_DUNG_FAILURE: {
      return {
        danhSachLoaiNguoiDung: null,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default danhSachLoaiNguoiDungReducer;
