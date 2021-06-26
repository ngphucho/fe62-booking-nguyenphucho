import axios from "axios";
import axiosClient from "./axiosClient";

const quanLyPhimAPI = {
  layDanhSachPhim: () => {
    //=> layDanhSachPhim
    return axiosClient.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP13");
  },
  layDanhSachPhimTheoTen: (name) => {
    const params = {
      maNhom: "GP13",
      tenPhim: name,
    };
    return axiosClient.get("/QuanLyPhim/LayDanhSachPhim", { params });
  },
  layThongTinPhim: (id) => {
    const params = {
      MaPhim: id,
    };
    return axiosClient.get("/QuanLyPhim/LayThongTinPhim", { params });
  },

  // ============ADMIN
  //xoa phim
  xoaPhim: (MaPhim) => {
    const params = {
      MaPhim,
    };
    return axiosClient.delete("/QuanLyPhim/XoaPhim", { params });
  },

  //them phim
  themPhimUploadHinh: (formData) => {
    return axiosClient.post("/QuanLyPhim/ThemPhimUploadHinh", formData);
  },

  //cap nhat phim khong upload hinh (url hinh anh)
  capNhatPhim: (values) => {
    return axiosClient.post("/QuanLyPhim/CapNhatPhim", values);
  },

  //cap nhat phim upload hinh
  capNhatPhimUpload: (formData) => {
    return axiosClient.post("/QuanLyPhim/CapNhatPhimUpload", formData);
  },
};

export default quanLyPhimAPI;
