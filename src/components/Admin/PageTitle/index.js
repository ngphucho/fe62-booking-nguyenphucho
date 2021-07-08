import React from "react";
import { useSelector } from "react-redux";
import { slideBarList } from "../SlideBar/slideBarList";

export default function PageTitle() {
  const { activePage } = useSelector((state) => state.pageTitle);
  return (
    <h5 style={{ textTransform: "uppercase", marginBottom: 0 }}>
      {slideBarList[activePage - 1]?.title}
    </h5>
  );
}
