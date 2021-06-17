import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getMovies } from "../../actions/movies";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TrailerModal from "../../components/TrailerModal";

export default function AppLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
      <TrailerModal></TrailerModal>
    </>
  );
}
