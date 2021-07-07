import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { layDanhSachPhongVe } from "../../actions/quanLyDatVe";
import DanhSachGhe from "../../components/DanhSachGhe";
import IsLoading from "../../components/IsLoading";
import ChiTietPhimPhongVe from "../../components/ChiTietPhimPhongVe";
import ChiTietDatGhe from "../../components/ChiTietDatGhe";
import GiaiThich from "../../components/GiaiThich";
import { useMediaQuery } from "react-responsive";

export default function ChiTietPhongVe() {
  const isMd = useMediaQuery({ minWidth: 768 });
  const dispatch = useDispatch();
  const [isSuccess, setSuccess] = useState(false);
  const { danhSachPhongVe, isLoading, error } = useSelector(
    (state) => state.danhSachPhongVe
  );
  const { maLichChieu } = useParams();

  useEffect(() => {
    dispatch(layDanhSachPhongVe(maLichChieu));
  }, []);

  if (isSuccess) {
    setTimeout(() => {
      // setSuccess(false);
      window.location.reload();
    }, 3000);
    // return <div>Đặt vé thành công</div>;
  }

  return !isLoading && danhSachPhongVe ? (
    <div className="chiTietPhongVe">
      <div className="container">
        <div className="row">
          <div className="col-md-8 left">
            <div className="container-fluid p-0 mb-3 chiTietPhimPhongVe">
              <ChiTietPhimPhongVe chiTietPhim={danhSachPhongVe.thongTinPhim} />
            </div>
            <div className="container-fluid p-0">
              <DanhSachGhe danhSachGhe={danhSachPhongVe.danhSachGhe} />
            </div>
            <div className="container-fluid p-0 giaiThichGhe">
              <GiaiThich edge={isMd?30:20}/>
            </div>
          </div>
          <div className="col-md-4 right">
            <div>
              <div>
                <ChiTietDatGhe
                  isSuccess={isSuccess}
                  setSuccess={setSuccess}
                  danhSachPhongVe={danhSachPhongVe}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <IsLoading />
  );
}
