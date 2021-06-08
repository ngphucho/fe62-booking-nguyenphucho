import axiosClient from "./axiosClient";

const scheduleAPI = {
  //Lay thong tin lich chieu theo he thong rap => cum rap => phim => lich chieu
  layThongTinLichChieuHeThongRap: (maHeThongRap) => {
    //maHeThongRap có thể rỗng => trả về tất cả rạp
    const params = {
      maNhom: "GP01",
      maHeThongRap,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params,
    });
  },

  //Lay thong tin lich chieu theo ma phim => he thong rap => cum rap => lich chieu
  LayThongTinLichChieuPhim: (MaPhim) => {
    const params = {
      // maNhom: "GP13",
      MaPhim,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinLichChieuPhim", { params });
  },
};

export default scheduleAPI;
