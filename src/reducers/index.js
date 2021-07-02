import { combineReducers } from "redux";
import danhSachPhim from "./danhSachPhim"; // Luu tat ca phim
import selectedMovie from "./selectedMovie"; // Luu 1 object phim duoc chon de dung chung cho nhieu component
import movie from "./movie"; // Luu detail cua phim
import moviesSearch from "./moviesSearch"; // Luu ket qua tim kiem phim
import danhSachHeThongRap from "./danhSachHeThongRap"; // Luu danh sach rap phim
import danhSachCumRap from "./danhSachCumRap"; // Luu danh dach cum ram (cinema detail)
import selectedCinema from "./selectedCinema"; // Luu cinemas duoc chon
import auth from "./auth"; // Luu userInfo
import schedules from "./schedules"; // Luu danh sach lich chieu
import danhSachPhongVe from "./danhSachPhongVe"; // Luu danh sach phong ve
import danhSachLoaiNguoiDung from "./danhSachLoaiNguoiDung"; // Danh sach loai nguoi dung
import danhSachNguoiDungPhanTrang from "./danhSachNguoiDungPhanTrang"; // Danh sach loai nguoi dung phan trang
import thongTinPhanTrangNguoiDung from "./thongTinPhanTrangNguoiDung"; // chua thong tin phan trang
import snackbarThongBao from "./snackbarThongBao"; // luu bien bat tat snackbar thong bao trang thai
import popupModal from "./popupModal"; // toggle popup reducer + luu title popup
import formData from "./formData"; // chua thong tin form dang ky cua tai khoan duoc chon de cap nhat thong tin
import pageTitle from "./pageTitle"; // tieu de cua trang admin
import thongTinTimKiemPhim from "./thongTinTimKiemPhim"; // thong tin de sort data trong bang danh sach phim của admin
import toggleMenu from "./toggleMenu"; // collapse sub menu khi man hinh nho
const rootReducer = combineReducers({
  // nơi chứa các reducers con
  danhSachPhim,
  selectedMovie,
  movie,
  moviesSearch,
  danhSachHeThongRap,
  danhSachCumRap,
  selectedCinema,
  auth,
  schedules,
  danhSachPhongVe,
  danhSachLoaiNguoiDung,
  danhSachNguoiDungPhanTrang,
  thongTinPhanTrangNguoiDung,
  snackbarThongBao,
  popupModal,
  formData,
  pageTitle,
  thongTinTimKiemPhim,
  toggleMenu,
});

export default rootReducer;
