import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// import action
import { toggleMenu } from "../../actions/toggleMenu";

export default function CinemaItem({ cinema }) {
  const dispatch = useDispatch();
  return (
    <Link to={"/cinemas/cinema/" + cinema?.maHeThongRap}>
      <div
        onClick={() => {
          // close submenu o man hinh nho
          dispatch(toggleMenu("close"));
        }}
        className="card bg-transparent border-0 itemCinemaCard my-2 py-3 text-center"
      >
        <div className="itemCinemaImage">
          <img
            className="card-img-top"
            style={{ maxWidth: "65%", minWidth: 90 }}
            src={cinema?.logo}
            alt={cinema?.biDanh}
          />
        </div>
        <div className="card-body itemCinemaBody p-0 d-none d-md-block">
          <h6 className="card-title itemCinemaTitle pt-3 text-light">
            {cinema?.tenHeThongRap}
          </h6>
        </div>
      </div>
    </Link>
  );
}
