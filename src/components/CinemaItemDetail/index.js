import React from "react";

export default function CinemaItemDetail({ detail }) {
  return (
    <div className="cumRapBox">
      <div className="imageBox">
        <img src="./images/cinema-address.jpg" alt="cinema address" />
      </div>
      <div className="textBox">
        <p>
          <span className="label">Tên cụm rạp: </span>
          {detail.tenCumRap}
        </p>
        <p>
          <span className="label">Địa chỉ: </span>
          {detail.diaChi.replace("[Bản đồ]", "")}
        </p>
        <p>
          <span className="label">Số rạp: </span>
          {detail.danhSachRap.length}
        </p>
      </div>
    </div>
  );
}
