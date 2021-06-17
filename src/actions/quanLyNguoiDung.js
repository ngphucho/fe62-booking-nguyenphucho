import {
  //LOAI NGUOI DUNG
  LAY_DANH_SACH_LOAI_NGUOI_DUNG_REQUEST,
  LAY_DANH_SACH_LOAI_NGUOI_DUNG_SUCCESS,
  LAY_DANH_SACH_LOAI_NGUOI_DUNG_FAILURE,
  //DANH SACH NGUOI DUNG PHAN TRANG
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_REQUEST,
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_SUCCESS,
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_FAILURE,
} from "../constants/quanLyNguoiDung";
import quanLyNguoiDungAPI from "../services/quanLyNguoiDungAPI";

export const layDanhSachLoaiNguoiDung = () => {
  return async (dispatch) => {
    dispatch({ type: LAY_DANH_SACH_LOAI_NGUOI_DUNG_REQUEST });
    try {
      const { data } = await quanLyNguoiDungAPI.layDanhSachLoaiNguoiDung();
      dispatch({
        type: LAY_DANH_SACH_LOAI_NGUOI_DUNG_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: LAY_DANH_SACH_LOAI_NGUOI_DUNG_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
};

export const layDanhSachNguoiDungPhanTrang = (params) => {
  return async (dispatch) => {
    dispatch({ type: LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_REQUEST });
    try {
      const { data } = await quanLyNguoiDungAPI.layDanhSachNguoiDungPhanTrang(
        params
      );
      dispatch({
        type: LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
};
