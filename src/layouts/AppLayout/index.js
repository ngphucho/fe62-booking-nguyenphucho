import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TrailerModal from "../../components/TrailerModal";

export default function AppLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
      <TrailerModal></TrailerModal>
    </>
  );
}
