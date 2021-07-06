import React from "react";
import SnackbarThongBao from "../../components/Controls/SnackbarThongBao";
// import Popup from "../../components/Controls/Popup"

import NavBar from "../../components/Admin/NavBar";
import SlideBar from "../../components/Admin/SlideBar";
import PageTitle from "../../components/Admin/PageTitle";

export default function AdminLayout({ children }) {
  return (
    <div className="admin">
      <div className="container-fluid px-0">
        <div className="d-flex">
          {/* slidebar */}
          <div className="slideBarBox">
            <SlideBar />
          </div>

          {/* main content */}
          <div className="mainContent">
            {/* navbar */}
            <div className="navBar">
              <NavBar />
            </div>

            {/* children */}
            {/* <PageTitle /> */}
            <div className="container-fluid p-0">{children}</div>
          </div>
        </div>
        <SnackbarThongBao />
        {/* <Popup /> */}
      </div>
    </div>
  );
}
