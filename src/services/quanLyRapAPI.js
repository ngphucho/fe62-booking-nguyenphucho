import axiosClient from "./axiosClient";

const quanLyRapAPI = {
  layThongTinHeThongRap: (id) => {
    const params = {
      maHeThongRap: id,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap", { params });
  },

  layThongTinCumRapTheoHeThong: (id) => {
    const params = {
      maHeThongRap: id,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params,
    });
  },
};

export default quanLyRapAPI;
