import React, { useState } from "react";
import { slideBarList } from "./slideBarList";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function SlideBar() {
  const [showSlideBar, setShowSlideBar] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const changeActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <div className={showSlideBar ? "slideBar show" : "slideBar"}>
      <div>
        <img
          className="img-fluid w-50 py-4 d-block mx-auto"
          src="./images/header-logo1.png"
          alt="logo"
        />
      </div>
      <ul>
        {slideBarList.map((item, index) => (
          <Link key={index} to={item.link}>
            <li
              onClick={() => {
                changeActivePage(index);
              }}
              className={index === activePage ? "active" : null}
            >
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
            </li>
          </Link>
        ))}
      </ul>
      <div
        onClick={() => {
          setShowSlideBar(!showSlideBar);
        }}
        className="toggleButton"
      >
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}
