import axiosClient from "./axiosClient";

const quanLyNguoiDungAPI = {
  //lay thong tin nguoi dung + lich su dat ve
  thongTinTaiKhoan: (taiKhoan) => {
    const params = {
      taiKhoan,
    };
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan", params);
  },

  //cap nhat thong tin nguoi dung
  capNhatThongTinNguoiDung: (values) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  },

  layDanhSachLoaiNguoiDung: () => {
    return axiosClient.get("/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },

  layDanhSachNguoiDungPhanTrang: (params) => {
    return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
      params,
    });
  },

  timKiemNguoiDungPhanTrang: (params) => {
    return axiosClient.get("/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang", {
      params,
    });
  },

  xoaNguoiDung: (TaiKhoan) => {
    const params = {
      TaiKhoan,
    };
    return axiosClient.delete("/QuanLyNguoiDung/XoaNguoiDung", { params });
  },
};

export default quanLyNguoiDungAPI;
