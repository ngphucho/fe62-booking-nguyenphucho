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
    let result = "chairBox";
    if (!item) {
      return result + " none";
    }
    result += ` ${item.loaiGhe}`;
    // console.log(item.loaiGhe)
    if (item.daDat) {
      return result + " daDat";
    }
    if (item.dangChon) {
      return result + " dangChon";
    }
    return result + " chuaChon";
  };

  return (
    <div className="danhSachGhe">
      {danhSachGhe.map((row, x) => (
        <div key={x} className="row rowChair">
          {row.map((item, y) => (
            <div key={y} className={"col square"}>
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
                {item.tenGhe ? `00${item.tenGhe}`.slice(-3) : null}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
