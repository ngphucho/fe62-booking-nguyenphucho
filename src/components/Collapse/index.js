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
          {/* <div>
            <LichChieuTheoNgay lichChieu={body} />
          </div> */}
          <Card>
            <CardBody>
              <LichChieuTheoNgay lichChieu={body} />
            </CardBody>
          </Card>
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
