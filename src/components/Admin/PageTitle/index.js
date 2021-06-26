import React from "react";
import { useSelector } from "react-redux";

export default function PageTitle() {
  const { pageTitle } = useSelector((state) => state.pageTitle);
  return <h1>{pageTitle}</h1>;
}
