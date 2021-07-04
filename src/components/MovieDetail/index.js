import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSelectedMovie } from "../../actions/selectedMovie";
import { formatDDMMYYYY } from "../../utils/timeFunction";

export default function MovieDetail({ detail }) {
  // console.log("detail: ", detail);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="chiTietPhimBox">
      <h3>CHI TIẾT PHIM</h3>
      <div className="row mt-3">
        <div className="col-lg-3 col-sm-4 chiTietPhimImageBox">
          <div className="imageContent">
            <img
              className="img-fluid"
              style={{ width: "100%" }}
              src={detail.hinhAnh}
              alt={detail.biDanh}
            />
          </div>
          <div className="imageFrame"></div>
        </div>
        <div className="col-lg-9 col-sm-8 chiTietPhimTextBox">
          <h4>{detail.tenPhim}</h4>
          <p>
            <b>Ngày khởi chiếu:</b> {formatDDMMYYYY(detail.ngayKhoiChieu, "/")}
          </p>
          <p>
            <b>Mô tả:</b> {detail.moTa}
          </p>
          <p>
            <b>Đánh giá:</b> {detail.danhGia}/10{" "}
          </p>
          <p>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                // dispatch(setOpen(true));
                dispatch(changeSelectedMovie(detail));
              }}
            >
              Trailer
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
