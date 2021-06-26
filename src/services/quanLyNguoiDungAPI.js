import axiosClient from "./axiosClient";

const quanLyNguoiDungAPI = {
  //lay thong tin nguoi dung + lich su dat ve
  thongTinTaiKhoan: (taiKhoan) => {
    const params = {
      taiKhoan,
    };
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan", params);
  },

  //them nguoi dung moi (quyen admin)
  themNguoiDung: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", values);
  },

  //cap nhat thong tin nguoi dung
  capNhatThongTinNguoiDung: (values) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  },

  //lay danh sach loai nguoi dung (quyen admin)
  layDanhSachLoaiNguoiDung: () => {
    return axiosClient.get("/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },

  //lay danh sach nguoi dung phan trang (quyen admin)
  layDanhSachNguoiDungPhanTrang: (params) => {
    return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
      params,
    });
  },

  //tim kiem nguoi dung phan trang (quyen admin)
  timKiemNguoiDungPhanTrang: (params) => {
    return axiosClient.get("/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang", {
      params,
    });
  },

  //xoa nguoi dung (quyen admin)
  xoaNguoiDung: (TaiKhoan) => {
    const params = {
      TaiKhoan,
    };
    return axiosClient.delete("/QuanLyNguoiDung/XoaNguoiDung", { params });
  },
};

export default quanLyNguoiDungAPI;
