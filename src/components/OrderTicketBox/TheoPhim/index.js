import React, { useEffect, useState } from "react";
import MySelect from "../../Controls/MySelect";
import { useSelector } from "react-redux";

import { cloneArrayIdName } from "../../../utils/myFunction";
import lichChieuPhimAPI from "../../../services/lichChieuPhimAPI";

export default function TheoPhim() {
  const { danhSachPhim } = useSelector((state) => state.danhSachPhim);
  const [heThongRapChieu, setHeThongRapChieu] = useState([]);
  const [cumRapChieu, setCumRapChieu] = useState([]);
  const [lichChieuPhim, setLichChieuPhim] = useState([]);

  const [maPhim, setMaPhim] = useState(null);
  const [maHeThongRap, setMaHeThongRap] = useState(null);
  const [maCumRap, setMaCumRap] = useState(null);

  // ============= function
  const handleChonPhim = (value) => {
    setMaPhim(value);
  };

  const handleChonHeThongRap = (value) => {
    setMaHeThongRap(value);
  };

  const handleChonRap = (value) => {
    setMaCumRap(value);
  };

  const layHeThongRapChieu = async (value) => {
    try {
      const { data } = await lichChieuPhimAPI.layThongTinLichChieuPhim(value);
      setHeThongRapChieu(data.heThongRapChieu);
      console.log(data);
    } catch (erro) {
      console.log(erro);
    }
  };

  // ============= lifecycle
  useEffect(() => {
    if (maPhim) {
      layHeThongRapChieu(maPhim);
    }
  }, [maPhim]);

  useEffect(() => {
    if (maHeThongRap) {
      const index = heThongRapChieu.findIndex(
        (item) => item.maHeThongRap === maHeThongRap
      );
      if (index > 0) {
        setCumRapChieu(heThongRapChieu[index].cumRapChieu);
      }
    }
  }, [maHeThongRap]);

  useEffect(() => {
    if (maCumRap) {
      const index = cumRapChieu.findIndex((item) => item.maCumRap === maCumRap);
      setLichChieuPhim(cumRapChieu[index].lichChieuPhim);
    }
  }, [maCumRap]);

  return (
    <div class="d-md-flex">
      <div className="chonPhim">
        <MySelect
          danhSach={cloneArrayIdName(danhSachPhim, "maPhim", "tenPhim")}
          handleChon={handleChonPhim}
          label="Phim"
        />
      </div>

      <div className="chonHeThongRap">
        <MySelect
          danhSach={cloneArrayIdName(
            heThongRapChieu,
            "maHeThongRap",
            "tenHeThongRap"
          )}
          handleChon={handleChonHeThongRap}
          label="Hệ Thống Rạp"
        />
      </div>

      <div className="chonCumRap">
        <MySelect
          danhSach={cloneArrayIdName(cumRapChieu, "maCumRap", "tenCumRap")}
          handleChon={handleChonRap}
          label="Cụm Rạp"
        />
      </div>

      <div className="chonSuat">
        <MySelect
          danhSach={cloneArrayIdName(
            lichChieuPhim,
            "maLichChieu",
            "ngayChieuGioChieu"
          )}
        />
      </div>
    </div>
  );
}
