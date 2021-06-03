import axiosClient from "./axiosClient";

const cinemasAPI = {
  getCinemas: (id) => {
    const params = {
      maHeThongRap: id,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap", { params });
  },
  // getMoviesByName: (name) => {
  //   const params = {
  //     maNhom: "GP13",
  //     tenPhim: name,
  //   };
  //   return axiosClient.get("/QuanLyPhim/LayDanhSachPhim", { params });
  // },
  getCinemaById: (id) => {
    const params = {
      maHeThongRap: id,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params,
    });
  },
};

export default cinemasAPI;
