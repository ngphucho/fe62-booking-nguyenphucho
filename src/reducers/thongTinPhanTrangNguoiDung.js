import { THAY_DOI_THONG_TIN_PHAN_TRANG_NGUOI_DUNG } from "../constants/quanLyNguoiDung";

const thongTinPhanTrangNguoiDung = localStorage.getItem(
  "thongTinPhanTrangNguoiDung"
)
  ? JSON.parse(localStorage.getItem("thongTinPhanTrangNguoiDung"))
  : {
      MaNhom: "GP13",
      tuKhoa: null,
      soTrang: 1,
      soPhanTuTrenTrang: 10,
    };

const thongTinPhanTrangNguoiDungReducer = (
  state = thongTinPhanTrangNguoiDung,
  action
) => {
  switch (action.type) {
    case THAY_DOI_THONG_TIN_PHAN_TRANG_NGUOI_DUNG: {
      return action.payload.data;
    }
    default:
      return state;
  }
};

export default thongTinPhanTrangNguoiDungReducer;