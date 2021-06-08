import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import scheduleAPI from "../../services/scheduleAPI";
import SubTestPage2 from "./SubTestPage2";

export default function TestPage2() {
  const [heThongRap, setHeThongRap] = useState(null);

  useEffect(async () => {
    const { data } = await scheduleAPI.layThongTinLichChieuHeThongRap("");
    setHeThongRap(data);
  }, []);

  const [activeTab, setActiveTab] = useState("CGV");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return heThongRap ? (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <Nav vertical tabs>
            {heThongRap.map((item) => (
              <NavItem key={item.maHeThongRap}>
                <NavLink
                  className={classnames({
                    active: activeTab === item.maHeThongRap,
                  })}
                  onClick={() => {
                    toggle(item.maHeThongRap);
                  }}
                >
                  {item.tenHeThongRap}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
        <div className="col-10">
          <TabContent activeTab={activeTab}>
            {heThongRap.map((item) => (
              <TabPane key={item.maHeThongRap} tabId={item.maHeThongRap}>
                <Row>
                  <Col sm="12">
                    <SubTestPage2 danhSachCumRap={item.lstCumRap} />
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
