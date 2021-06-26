import React from "react";
import CinemaItem from "../CinemaItem";

export default function ListCinemas({ danhSachHeThongRap }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {danhSachHeThongRap.map((item, index) => (
          <div className="col-2" key={index}>
            <CinemaItem cinema={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
