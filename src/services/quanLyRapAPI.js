import axiosClient from "./axiosClient";

const quanLyRapAPI = {
  layThongTinHeThongRap: (id) => {
    const params = {
      maHeThongRap: id,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap", { params });
  },
  // layDanhSachPhimTheoTen: (name) => {
  //   const params = {
  //     maNhom: "GP13",
  //     tenPhim: name,
  //   };
  //   return axiosClient.get("/QuanLyPhim/LayDanhSachPhim", { params });
  // },
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
