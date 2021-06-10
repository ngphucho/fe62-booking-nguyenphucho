import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import ThongTinLichChieuHeThongRapLV2 from "../ThongTinLichChieuHeThongRapLV2";

export default function ThongTinLichChieuHeThongRap({ danhSachHeThongRap }) {
  // console.log(danhSachHeThongRap);
  const [activeTab, setActiveTab] = useState(
    danhSachHeThongRap[0].maHeThongRap
  );
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return danhSachHeThongRap ? (
    <div className="container">
      <div className="row ThongTinLichChieuBox">
        <div className="col-1 danhSachHeThongRapBox">
          <Nav vertical tabs>
            {danhSachHeThongRap.map((item) => (
              <NavItem key={item.maHeThongRap}>
                <NavLink
                  className={classnames({
                    active: activeTab === item.maHeThongRap,
                  })}
                  onClick={() => {
                    toggle(item.maHeThongRap);
                  }}
                >
                  {/* CONTENT */}
                  <img className="rounded-circle w-100 normal-tab" src={item.logo} alt={item.tenHeThongRap} />
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
        <div className="col-11">
          <TabContent activeTab={activeTab}>
            {danhSachHeThongRap.map((item) => (
              <TabPane key={item.maHeThongRap} tabId={item.maHeThongRap}>
                <ThongTinLichChieuHeThongRapLV2
                  danhSachCumRap={item.lstCumRap}
                />
              </TabPane>
            ))}
          </TabContent>
        </div>
      </div>
    </div>
  ) : null;
}
