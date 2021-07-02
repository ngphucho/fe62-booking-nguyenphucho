import React from "react";
import CinemaItem from "../CinemaItem";

export default function ListCinemas({ danhSachHeThongRap }) {
  return (
    <div className="container-fluid">
      <div className="row listCinema">
        {danhSachHeThongRap.map((item, index) => (
          <div className="col-md-2 col-auto cinemaItem" key={index}>
            <CinemaItem cinema={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
