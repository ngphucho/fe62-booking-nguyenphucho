import React from "react";
import CinemaItem from "../CinemaItem";

export default function ListCinemas({ cinemas }) {
  return (
    <div className="container">
      <div className="row">
        {cinemas.map((item, index) => (
          <div className="col-md-2" key={index}>
            <CinemaItem cinema={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
