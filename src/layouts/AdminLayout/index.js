import React, { useState } from "react";

import NavBar from "../../components/Admin/NavBar";
import SlideBar from "../../components/Admin/SlideBar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin">
      <div className="container">
        <div className="navBar">
          <NavBar />
        </div>
        <div className="d-flex">
          <div>
            <SlideBar />
          </div>
          <div className="mainContent">
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
