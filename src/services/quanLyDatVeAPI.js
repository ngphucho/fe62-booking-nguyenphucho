import axiosClient from "./axiosClient";

const quanLyDatVeAPI = {
  layDanhSachPhongVe: (maLichChieu) => {
    const params = {
      MaLichChieu: maLichChieu,
    };
    return axiosClient.get("/QuanLyDatVe/LayDanhSachPhongVe", { params });
  },

  datVe: (values) => {
    return axiosClient.post("/QuanLyDatVe/DatVe", values);
  },

  taoLichChieu: (params) => {
    return axiosClient.post("/QuanLyDatVe/TaoLichChieu", params);
  },
};

export default quanLyDatVeAPI;
