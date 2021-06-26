import React, { useState } from "react";
import { useSelector } from "react-redux";
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
          <div>
            <SlideBar />
          </div>
          <div className="mainContent pt-0">
            <div className="navBar">
              <NavBar />
            </div>
            <PageTitle />
            <div className="container-fluid">{children}</div>
          </div>
        </div>
        <SnackbarThongBao />
        {/* <Popup /> */}
      </div>
    </div>
  );
}
