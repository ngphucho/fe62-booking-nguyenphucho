import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSelectedMovie } from "../../actions/selectedMovie";

export default function MovieDetail({ detail }) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Chi tiết phim</h1>
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid" style={{maxHeight: "400px"}} src={detail.hinhAnh} alt={detail.biDanh} />
        </div>
        <div className="col-md-7">
          <h3>{detail.tenPhim}</h3>
          <p>Đánh giá: {detail.danhGia}</p>
          <p>Mô tả: {detail.moTa}</p>
          <p>Ngày khởi chiếu: {detail.ngayKhoiChieu}</p>
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
