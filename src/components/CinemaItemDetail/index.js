import React from "react";

export default function CinemaItemDetail({ detail }) {
  return (
    <div>
      <p>Tên cụm rạp: {detail.tenCumRap}</p>
      <p>Địa chỉ: {detail.diaChi}</p>
      <p>Số rạp: {detail.danhSachRap.length}</p>
    </div>
  );
}
