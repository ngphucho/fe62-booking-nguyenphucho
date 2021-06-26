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
import lichChieuPhimAPI from "../../services/lichChieuPhimAPI";
import SubTestPage2 from "./SubTestPage2";

export default function TestPage2() {
  const [heThongRap, setHeThongRap] = useState(null);

  useEffect(async () => {
    const { data } = await lichChieuPhimAPI.layThongTinLichChieuHeThongRap("");
    setHeThongRap(data);
    for (let heThongRap of data) {
      console.log("=======HE THONG RAP========", heThongRap.maHeThongRap); //in ra he thong rap. CGV, BHD,...
      for (let cumRap of heThongRap.lstCumRap) {
        console.log("====CUM RAP=====", cumRap.maCumRap); //in ra tung cum rap trong he thong rap
        for (let phim of cumRap.danhSachPhim) {
          console.log("=PHIM=", phim.tenPhim); // in ra phim trong tung cum rap
        }
      }
    }
  }, []);

  const [activeTab, setActiveTab] = useState("CGV");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // useEffect(()=>{
  //   for (let heThongRap of res) {
  //     console.log(heThongRap); //in ra he thong rap. CGV, BHD,...
  //     for (cumRap of heThongRap.lstCumRap) {
  //       console.log(cumRap); //in ra tung cum rap trong he thong rap
  //       for (phim of cumRap.danhSachPhim) {
  //         console.log(phim); // in ra phim trong tung cum rap
  //       }
  //     }
  //   }
  // },[heThongRap])

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



// for (let heThongRap of res) {
//   console.log("=======HE THONG RAP========", heThongRap.maHeThongRap); //in ra he thong rap. CGV, BHD,...
//   for (let cumRap of heThongRap.lstCumRap) {
//     console.log("====CUM RAP=====", cumRap.maCumRap); //in ra tung cum rap trong he thong rap
//     for (let phim of cumRap.danhSachPhim) {
//       console.log("=PHIM=", phim.tenPhim); // in ra phim trong tung cum rap
//     }
//   }
// }