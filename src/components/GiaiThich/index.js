import React from "react";
import MovieIcon from "@material-ui/icons/Movie";

export default function GiaiThich() {
  const edge = 40;
  const Square = ({ edge, background, border, opacity, icon }) => {
    return (
      <div
        style={{
          width: edge,
          height: edge,
          backgroundColor: background,
          border: border,
          opacity: opacity,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1em",
        }}
      >
        {icon || "000"}
      </div>
    );
  };

  return (
    <>
      {/* ghe viep */}
      <div className="gheVip">
        <span>Ghế Vip</span>
        {Square({ edge, background: "var(--color-gheVip)" })}
      </div>

      {/* ghe thuong */}
      <div className="gheThuong">
        <span>Ghế Thường</span>
        {Square({ edge, background: "var(--color-gheThuong)" })}
      </div>

      {/* ghe dang chon */}
      <div className="gheDangChon">
        <span>Ghế Đang Chọn</span>
        {Square({ edge, border: "2px solid var(--color-dangChon)" })}
      </div>

      {/* ghe da dat truoc */}
      <div className="gheDaDat">
        <span>Ghế Đã Được Đặt</span>
        {Square({
          edge,
          icon: <MovieIcon />,
          opacity: "0.4",
          background: "#00000020",
        })}
      </div>
    </>
  );
}
