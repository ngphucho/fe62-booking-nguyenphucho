import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import LichChieuTheoNgay from "../LichChieuTheoNgay";

const MyCollapse = (props) => {
  const { header, body, isOpen, setIsOpen, tab } = props;
  // const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(tab);

  return (
    <div className="collapseBox">
      <div
        className={"collapseHeader" + (isOpen ? " show" : "")}
        onClick={handleClick}
      >
        {header}
      </div>
      <div className="collapseBody customScrollbar">
        <Collapse isOpen={isOpen}>
          <div style={{ border: "1px solid red" }}>
            mong muon
            <LichChieuTheoNgay
              lichChieu={[
                {
                  maLichChieu: "42948",
                  maRap: "475",
                  tenRap: "Rạp 5",
                  ngayChieuGioChieu: "2021-05-20T16:30:00",
                  giaVe: 75000,
                  thoiLuong: 120,
                },
                {
                  maLichChieu: "42949",
                  maRap: "476",
                  tenRap: "Rạp 6",
                  ngayChieuGioChieu: "2021-05-20T16:30:00",
                  giaVe: 75000,
                  thoiLuong: 120,
                },
              ]}
            />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

MyCollapse.propTypes = {
  header: PropTypes.string,
  body: PropTypes.array,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  tab: PropTypes.number.isRequired,
};

MyCollapse.defaultProps = {
  header: "",
  body: [],
  isOpen: false,
  setIsOpen: null,
};

export default MyCollapse;
