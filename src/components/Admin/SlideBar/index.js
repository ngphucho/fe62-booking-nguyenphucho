import React, { useState } from "react";
import { slideBarList } from "./slideBarList";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { pageTitleChange } from "../../../actions/pageTitle";

export default function SlideBar() {
  const [showSlideBar, setShowSlideBar] = useState(true);
  const { activePage } = useSelector((state) => state.pageTitle);
  const dispatch = useDispatch();

  return (
    <div className={showSlideBar ? "slideBar show" : "slideBar"}>
      <div className="imageLogoBox">
        <Link to="/home">
          <img
            className="imageLogo"
            src={
              showSlideBar
                ? "./images/header-logo1.png"
                : "./images/mini-logo-white.png"
            }
            alt="logo"
          />
        </Link>
      </div>
      <ul>
        {slideBarList.map((item, index) => (
          <Link key={index} to={item.link}>
            <li
              onClick={() => {
                dispatch(
                  pageTitleChange({
                    activePage: index + 1,
                    pageTitle: item.title,
                  })
                );
              }}
              className={index + 1 === activePage ? "active" : null}
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
        <ArrowForwardIosIcon color="secondary" />
      </div>
    </div>
  );
}
