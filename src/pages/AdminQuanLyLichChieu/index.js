import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@material-ui/core";

import ThongTinLichChieuPhim from "../../components/ThongTinLichChieuPhim";
import MySelect from "../../components/Controls/MySelect";
import DateInput from "../../components/Controls/DateInput";

import { layDanhSachPhim } from "../../actions/movies";
import { layThongTinHeThongRap } from "../../actions/heThongRap";
import { layThongTinCumRapTheoHeThong } from "../../actions/cinema";
import lichChieuPhimAPI from "../../services/lichChieuPhimAPI";
import { snackbarThongBaoToggle } from "../../actions/snackbarThongBao";
import quanLyDatVeAPI from "../../services/quanLyDatVeAPI";

import qs from "qs";
import { cloneArrayIdName } from "../../utils/myFunction";
import { formatDDMMYYYY } from "../../utils/timeFunction";
import TimeInput from "../../components/Controls/TimeInput";
import MyInput from "../../components/Controls/MyInput";
import quanLyRapAPI from "../../services/quanLyRapAPI";

export default function AdminQuanLyLichChieu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const { danhSachPhim } = useSelector((state) => state.danhSachPhim);
  const { danhSachHeThongRap } = useSelector(
    (state) => state.danhSachHeThongRap
  );
  const { danhSachCumRap } = useSelector((state) => state.danhSachCumRap);
  const [danhSachRap, setDanhSachRap] = useState([]);
  const [thongTinLichChieuPhim, setThongTinLichChieuPhim] = useState(null);
  const [maPhim, setMaPhim] = useState();
  const [maHeThongRap, setMaHeThongRap] = useState();
  const [maCumRap, setMaCumRap] = useState();
  const [maRap, setMaRap] = useState();
  const [ngayChieu, setNgayChieu] = useState();
  const [gioChieu, setGioChieu] = useState();
  const [giaVe, setGiaVe] = useState();

  //set maPhim
  const handleChonPhim = (value) => {
    // console.log(maPhim)
    // history.push("/admin/quan-ly-lich-chieu?maPhim=" + maPhim);
    setMaPhim(value);
  };

  //set maHeThongRap
  const handleChonHeThongRap = (value) => {
    setMaHeThongRap(value);
  };

  // set maCumRap
  const handleChonCumRap = (value) => {
    setMaCumRap(value);
  };

  // set maRap
  const handleChonRap = (value) => {
    setMaRap(value);
  };

  // set ngayChieu
  const handleChonNgay = (value) => {
    const date = formatDDMMYYYY(value, "/");
    setNgayChieu(date);
  };

  // set gioChieu
  const handleChonGio = (value) => {
    setGioChieu(value + ":00");
  };

  const handleChonGia = (value) => {
    setGiaVe(value);
  };

  // ham them lich chieu
  const handleThemLichChieu = async () => {
    const params = {
      maPhim,
      maRap,
      giaVe,
      ngayChieuGioChieu: `${ngayChieu} ${gioChieu}`,
    };
    try {
      const data = await quanLyDatVeAPI.taoLichChieu(params);
      dispatch(
        snackbarThongBaoToggle({
          message: "Thêm lịch chiếu thành công",
          type: "success",
          autoHideTime: 3000,
        })
      );
      layThongTinLichChieu(maPhim);
    } catch (error) {
      console.log(error);
      dispatch(
        snackbarThongBaoToggle({
          message: error.response.data,
          type: "error",
          autoHideTime: 3000,
        })
      );
    }
  };

  //lay thong tin lich chieu phim theo maPhim
  const layThongTinLichChieu = async (maPhim) => {
    const { data } = await lichChieuPhimAPI.layThongTinLichChieuPhim(maPhim);
    // console.log(data);
    setThongTinLichChieuPhim(data);
  };

  //filter lich chieu phim de in ra man hinh
  const filterLichChieu = () => {
    const lichChieuFiltered = (
      <div>
        <div className="bg-warning">{thongTinLichChieuPhim.tenPhim}</div>
        <div>
          {thongTinLichChieuPhim.heThongRapChieu.map((heThongRap) => {
            // !maHeThongRap || maHeThongRap === heThongRap.maHeThongRap
            if (heThongRap.maHeThongRap === maHeThongRap || !maHeThongRap) {
              return (
                <div >
                  <div className="bg-success">{heThongRap.tenHeThongRap}</div>
                  <div>
                    {heThongRap.cumRapChieu.map((cumRap) => {
                      if (cumRap.maCumRap === maCumRap || !maCumRap) {
                        return (
                          <div>
                            <div className="bg-danger">{cumRap.tenCumRap}</div>
                            <div className="row">
                              {cumRap.lichChieuPhim.map((lichChieu) => {
                                if (lichChieu) {
                                  return (
                                    <div className="col-md-4">
                                      <div className="bg-light m-1">
                                        <div>{lichChieu.ngayChieuGioChieu}</div>
                                        <div>{lichChieu.tenRap}</div>
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
    console.log(lichChieuFiltered);
    return lichChieuFiltered;
  };

  // =======USEEFFECT=========
  //render lan dau
  useEffect(() => {
    dispatch(layDanhSachPhim());
  }, []);

  //render khi location thay doi
  useEffect(() => {
    const { maPhim: movieId } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    // console.log(movieId);
    if (!movieId) return;
    setMaPhim(parseInt(movieId));
  }, [location]);

  //render khi maPhim thay doi
  useEffect(() => {
    if (maPhim) {
      dispatch(layThongTinHeThongRap());
      layThongTinLichChieu(maPhim);
      setMaHeThongRap(null);
    }
  }, [maPhim]);

  //render khi maHeThongRapThayDoi
  useEffect(() => {
    if (maHeThongRap) {
      // console.log("lay by id", maHeThongRap);
      dispatch(layThongTinCumRapTheoHeThong(maHeThongRap));
      setMaCumRap(null);
    }
  }, [maHeThongRap]);

  // render khi maCumRap thay doi
  useEffect(() => {
    if (maCumRap) {
      const index = danhSachCumRap.findIndex(
        (item) => item.maCumRap === maCumRap
      );
      if (index > 0) {
        setDanhSachRap(danhSachCumRap[index].danhSachRap);
      }
    }
  }, [maCumRap]);

  //render khi thongTinLichChieuPhim thay doi => goi ham filter lich chieu de xuat ra man hinh
  useEffect(() => {
    if (thongTinLichChieuPhim) {
      filterLichChieu();
      // console.log(thongTinLichChieuPhim);
    }
  }, [thongTinLichChieuPhim]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* chon phim */}
        <div className="chonPhim-select">
          <MySelect
            danhSach={cloneArrayIdName(danhSachPhim, "maPhim", "tenPhim")}
            handleChon={handleChonPhim}
            label={"Phim"}
            defaultValue={maPhim ? maPhim.toString() : ""}
          />
        </div>
        {/* chon he thong rap */}
        <div className="chonHeThongRap-select">
          <MySelect
            danhSach={cloneArrayIdName(
              danhSachHeThongRap,
              "maHeThongRap",
              "tenHeThongRap"
            )}
            handleChon={handleChonHeThongRap}
            label={"Hệ thống rạp"}
          />
        </div>
        {/* chon cum rap */}
        <div className="chonCumRap-select">
          <MySelect
            danhSach={cloneArrayIdName(danhSachCumRap, "maCumRap", "tenCumRap")}
            handleChon={handleChonCumRap}
            label={"Cụm Rạp"}
          />
        </div>
        {/* chon rap */}
        <div className="chonRap-select">
          <MySelect
            danhSach={cloneArrayIdName(danhSachRap, "maRap", "tenRap")}
            handleChon={handleChonRap}
            label={"Rạp"}
          />
        </div>
        {/* Chon ngay */}
        <div className="chonNgay">
          <DateInput data={{ disabled: !maRap }} handleChon={handleChonNgay} />
        </div>
        {/* Chon gio */}
        <div className="chonGio">
          <TimeInput
            data={{ disabled: !ngayChieu }}
            handleChon={handleChonGio}
          />
        </div>
        <div className="chonGia">
          <MyInput data={{ disabled: !gioChieu }} handleChon={handleChonGia} />
        </div>
        {/* Nut them lich chieu */}
        <div className="nutThemLich">
          <Button
            variant="outlined"
            disabled={!giaVe}
            onClick={() => {
              handleThemLichChieu();
            }}
          >
            Thêm lịch chiếu
          </Button>
        </div>
      </div>

      {/* {thongTinLichChieuPhim && (
        <ThongTinLichChieuPhim thongTinLichChieuPhim={thongTinLichChieuPhim} />
      )} */}
      {thongTinLichChieuPhim && filterLichChieu()}
    </div>
  );
}