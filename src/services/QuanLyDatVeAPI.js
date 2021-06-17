import axiosClient from "./axiosClient";

const QuanLyDatVeAPI = {
  LayDanhSachPhongVe: (maLichChieu) => {
    const params = {
      MaLichChieu: maLichChieu,
    };
    return axiosClient.get("/QuanLyDatVe/LayDanhSachPhongVe", { params });
  },

  datVe: (values) => {
    return axiosClient.post("/QuanLyDatVe/DatVe", values);
  },
};

export default QuanLyDatVeAPI;
