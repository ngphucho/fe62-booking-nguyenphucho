import React from "react";
import { Link } from "react-router-dom";

export default function CinemaItem({ cinema }) {
  return (
    <Link to={"/cinemas/cinema/" + cinema?.maHeThongRap}>
      <div className="card itemCinemaCard my-2 py-3 text-center">
        <div className="itemCinemaImage">
          <img
            className="card-img-top"
            style={{ width: "70%" }}
            src={cinema?.logo}
            alt={cinema?.biDanh}
          />
        </div>
        <div className="card-body itemCinemaBody p-0">
          <h6 className="card-title itemCinemaTitle pt-3">
            {cinema?.tenHeThongRap}
          </h6>
        </div>
      </div>
    </Link>
  );
}
