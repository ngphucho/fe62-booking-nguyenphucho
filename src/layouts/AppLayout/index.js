import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { layDanhSachPhim } from "../../actions/movies";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TrailerModal from "../../components/TrailerModal";

export default function AppLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhim());
  }, []);
  return (
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Header></Header>
      <div style={{flexGrow: 1}}>
      {children}
      </div>
      <Footer></Footer>
      <TrailerModal></TrailerModal>
    </div>
  );
}
