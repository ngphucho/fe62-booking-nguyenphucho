import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function ClientRoute({ children, ...props }) {
  const { userInfo } = useSelector((state) => state.auth);
  // console.log("props ne", props);

  if (!userInfo) {
    return <Redirect to={`/login?redirectTo=${props.location.pathname}`} />;
  }
  if (userInfo.maLoaiNguoiDung !== "KhachHang") {
    return <Redirect to="/" />;
  }
  return <Route {...props}>{children}</Route>;
}
