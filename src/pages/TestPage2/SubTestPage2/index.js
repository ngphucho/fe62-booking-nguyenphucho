import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import SubFilm from "../SubFilm";

export default function SubTestPage2({ danhSachCumRap }) {
  const [activeTab, setActiveTab] = useState(danhSachCumRap[0].maCumRap);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return danhSachCumRap ? (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Nav vertical tabs>
            {danhSachCumRap.map((item) => (
              <NavItem key={item.maCumRap}>
                <NavLink
                  className={classnames({
                    active: activeTab === item.maCumRap,
                  })}
                  onClick={() => {
                    toggle(item.maCumRap);
                  }}
                >
                  {item.tenCumRap}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
        <div className="col-8">
          <TabContent activeTab={activeTab}>
            {danhSachCumRap.map((item) => (
              <TabPane key={item.maCumRap} tabId={item.maCumRap}>
                <Row>
                  <Col sm="12">
                    <SubFilm danhSachPhim={item.danhSachPhim} />
                  </Col>
                </Row>
              </TabPane>
            ))}
          </TabContent>
        </div>
      </div>
    </div>
  ) : null;
}
