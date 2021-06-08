import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import ThongTinLichChieuHeThongRapLV3 from "../ThongTinLichChieuHeThongRapLV3";

export default function ThongTinLichChieuHeThongRapLV2({ danhSachCumRap }) {
  const [activeTab, setActiveTab] = useState(danhSachCumRap[0].maCumRap);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return danhSachCumRap ? (
    <div className="container container-fluid-md">
      <div className="row">
        <div className="col-4 danhSachCumRapBox">
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
                <ThongTinLichChieuHeThongRapLV3 danhSachPhim={item.danhSachPhim} />
              </TabPane>
            ))}
          </TabContent>
        </div>
      </div>
    </div>
  ) : null;
}
