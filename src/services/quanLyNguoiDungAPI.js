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

  layDanhSachNguoiDungPhanTrang: (data) => {
    // const newParams = { MaNhom: "GP13", ...params };
    const params = {
      MaNhom: "GP01",
      tuKhoa: "",
      soTrang: 5,
      soPhanTuTrenTrang: 10,
    };
    return axiosClient.get(
      "/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang",
      {params}
    );
  },
};

export default quanLyNguoiDungAPI;
