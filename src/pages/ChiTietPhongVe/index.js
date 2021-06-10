import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { layDanhSachPhongVe } from "../../actions/quanLyDatVe";
import DanhSachGhe from "../../components/DanhSachGhe";

export default function ChiTietPhongVe() {
  const dispatch = useDispatch();
  const { danhSachPhongVe, isLoading, error } = useSelector(
    (state) => state.danhSachPhongVe
  );
  const { maLichChieu } = useParams();

  useEffect(() => {
    dispatch(layDanhSachPhongVe(maLichChieu));
  }, []);

  useEffect(() => {
    // console.log("sdfsdfsdf", danhSachPhongVe);
  }, [danhSachPhongVe]);

  return danhSachPhongVe ? (
    <div className="chiTietPhongVe">
      <div className="container">
        <div>Chi tiet phim</div>
        <div className="row">
          <div className="col-md-9">
            <DanhSachGhe danhSachGhe={danhSachPhongVe.danhSachGhe} />
          </div>
          <div className="col-md-3">
            <div>Chi tiet dat ghe</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
