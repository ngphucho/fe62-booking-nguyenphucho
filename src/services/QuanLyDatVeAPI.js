import axiosClient from "./axiosClient";

const QuanLyDatVeAPI = {
  LayDanhSachPhongVe: (maLichChieu) => {
    const params = {
      MaLichChieu: maLichChieu,
    };
    return axiosClient.get("/QuanLyDatVe/LayDanhSachPhongVe", { params });
  },
};

export default QuanLyDatVeAPI;
