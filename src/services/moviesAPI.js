import axiosClient from "./axiosClient";

const moviesAPI = {
  getMovies: () => {
    return axiosClient.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP13");
  },
  getMoviesByName: (name) => {
    const params = {
      maNhom: "GP13",
      tenPhim: name,
    };
    return axiosClient.get("/QuanLyPhim/LayDanhSachPhim", { params });
  },
  getMovieById: (id) => {
    const params = {
      MaPhim: id,
    };
    return axiosClient.get("/QuanLyPhim/LayThongTinPhim", { params });
  },
};

export default moviesAPI;
