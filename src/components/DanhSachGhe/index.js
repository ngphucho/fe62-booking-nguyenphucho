import React from "react";
import { chairToggle } from "../../actions/quanLyDatVe";
import { useDispatch } from "react-redux";

export default function DanhSachGhe({ danhSachGhe }) {
  // console.log("DanhSachGhe", danhSachGhe);
  const dispatch = useDispatch();
  const toggle = (x, y) => {
    dispatch(chairToggle(x, y));
  };
  //su ly class cho cac loai ghe
  const chairBoxStyle = (item) => {
    const result = "chairBox";
    if (!item) {
      return result + " none";
    }
    if (item.daDat) {
      return result + " daDat";
    }
    if (item.dangChon) {
      return result + " dangChon";
    }
    return result + " chuaChon";
  };

  return (
    <div className="container-fluid danhSachGhe">
      {danhSachGhe.map((row, x) => (
        <div key={x} className="row">
          {row.map((item, y) => (
            <div key={y} className={"col square p-1"}>
              <div
                onClick={
                  item
                    ? () => {
                        toggle(x, y);
                      }
                    : null
                }
                className={chairBoxStyle(item)}
              >
                {item.tenGhe}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
