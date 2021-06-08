import React from "react";

export default function SubFilm({danhSachPhim}) {
  return danhSachPhim ? (
    <div className="container">
      <div className="row">
        {danhSachPhim.map((item) => (
          <div className="col-4">{item.tenPhim}</div>
        ))}
      </div>
    </div>
  ) : null;
}
