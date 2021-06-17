import {
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_REQUEST,
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_SUCCESS,
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_FAILURE,
} from "../constants/quanLyNguoiDung";

const initialState = {
  danhSachNguoiDungPhanTrang: null,
  isLoading: true,
  error: null,
};

const danhSachNguoiDungPhanTrangReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_REQUEST: {
      return {
        danhSachNguoiDungPhanTrang: null,
        isLoading: true,
        error: null,
      };
    }
    case LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_SUCCESS: {
      return {
        danhSachNguoiDungPhanTrang: action.payload.data,
        isLoading: false,
        error: null,
      };
    }
    case LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_FAILURE: {
      return {
        danhSachNguoiDungPhanTrang: null,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default danhSachNguoiDungPhanTrangReducer;
