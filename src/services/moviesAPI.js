import axiosClient from "./axiosClient";

const moviesAPI = {
  getMovies: () => {
    return axiosClient.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP13");
  },
  getMoviesByName: (name) => {
    const params = {
      tenPhim: name,
      maNhom: "GP13",
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", { params });
  },
  getMovieById: (id) => {
    const params = {
      MaPhim: id,
    };
    return axiosClient.get("/QuanLyPhim/LayThongTinPhim", { params });
  },
};

export default moviesAPI;
