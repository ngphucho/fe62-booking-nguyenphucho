import { combineReducers } from "redux";
import movies from "./movies"; // Luu tat ca phim
import selectedMovie from "./selectedMovie"; // Luu 1 object phim duoc chon de dung chung cho nhieu component
import movie from "./movie"; // Luu detail cua phim
import moviesSearch from "./moviesSearch"; // Luu ket qua tim kiem phim
import cinemas from "./cinemas"; // Luu danh sach rap phim
import cinema from "./cinema"; // Luu danh dach cum ram (cinema detail)
import selectedCinema from "./selectedCinema"; // Luu cinemas duoc chon
import auth from "./auth"; // Luu userInfo
import schedules from "./schedules"; // Luu danh sach lich chieu
import danhSachPhongVe from "./danhSachPhongVe"; // Luu danh sach phong ve
import danhSachLoaiNguoiDung from "./danhSachLoaiNguoiDung"; // Danh sach loai nguoi dung
import danhSachNguoiDungPhanTrang from "./danhSachNguoiDungPhanTrang"; // Danh sach loai nguoi dung phan trang
import thongTinPhanTrangNguoiDung from "./thongTinPhanTrangNguoiDung";// chua thong tin phan trang

const rootReducer = combineReducers({
  // nơi chứa các reducers con
  movies,
  selectedMovie,
  movie,
  moviesSearch,
  cinemas,
  cinema,
  selectedCinema,
  auth,
  schedules,
  danhSachPhongVe,
  danhSachLoaiNguoiDung,
  danhSachNguoiDungPhanTrang,
  thongTinPhanTrangNguoiDung,
});

export default rootReducer;
