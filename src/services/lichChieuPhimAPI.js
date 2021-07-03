import axiosClient from "./axiosClient";
import { appLayoutData } from "../utils/myData";

const lichChieuPhimAPI = {
  //Lay thong tin lich chieu theo he thong rap => cum rap => phim => lich chieu
  layThongTinLichChieuHeThongRap: (maHeThongRap) => {
    //maHeThongRap có thể rỗng => trả về tất cả rạp
    const params = {
      maNhom: appLayoutData.maNhom,
      maHeThongRap,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params,
    });
  },

  //Lay thong tin lich chieu theo ma phim => he thong rap => cum rap => lich chieu
  layThongTinLichChieuPhim: (MaPhim) => {
    const params = {
      MaPhim,
    };
    return axiosClient.get("/QuanLyRap/LayThongTinLichChieuPhim", { params });
  },
};

export default lichChieuPhimAPI;
