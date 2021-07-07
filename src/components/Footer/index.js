import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as LLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";

export default function Footer() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <div className="footer">
      <div className="container-md">
        <div className="row">
          <div className="col-sm-5"></div>
          <div className="col-sm-7">
            <div
              className="border-bottom goToTop"
              style={{ textAlign: "right" }}
            >
              <span
                className="cursorPointer"
                onClick={() => {
                  scroll.scrollToTop();
                }}
              >
                RETURN TO TOP ^
              </span>
            </div>
          </div>
          <div className="col-sm-5 footerLogo">
            <Link to="/home">
              <img
                className="bottom-logo"
                src="./images/footer-logo1.png"
                alt="bottom-log"
              />
            </Link>
            <div className="contact-logo-box">
              <span className="contact-logo">
                <a href="https://www.facebook.com/" target="blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </span>

              <span className="contact-logo">
                <a href="https://www.youtube.com/" target="blank">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </span>
              <span className="contact-logo">
                <a href="https://www.instagram.com/" target="blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </span>
              <span className="contact-logo">
                <a href="https://twitter.com/" target="blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </span>
            </div>
          </div>
          <div className="col-sm-7 d-flex flex-column justify-content-around footerNavBox">
            <div className="footer-nav about">
              <b>MH Movie</b>
              <span className="d-inline-block">
                <a href="/" className="footer-nav-item">
                  Giới thiệu
                </a>
                <a href="/" className="footer-nav-item">
                  Tuyển dụng
                </a>
                <a href="/" className="footer-nav-item">
                  Chính sách
                </a>
                <a href="/" className="footer-nav-item">
                  Điều khoản sử dụng
                </a>
              </span>
            </div>
            <div className="footer-nav">
              <b>Hỗ trợ KH</b>
              <span className="d-inline-block">
                <a href="/" className="footer-nav-item">
                  Hướng dẫn sử dụng
                </a>
                <a href="/" className="footer-nav-item">
                  Yêu cầu hỗ trợ
                </a>
                <a href="/" className="footer-nav-item">
                  Hotline{" "}
                  <span
                    style={{ color: "#0078d1", textDecoration: "underline" }}
                  >
                    0356046662
                  </span>
                </a>
                {/* <a href="/" className="footer-nav-item">
                Notice
              </a> */}
              </span>
            </div>
            <div className="footer-nav">
              <b className="d-none d-sm-inline-block">Ứng dụng</b>
              <span className="d-inline-block">
                <a href="/" className="footer-nav-item">
                  <AppleIcon />
                </a>
                <a href="/" className="footer-nav-item">
                  <AndroidIcon />
                </a>
                {/* <a href="/" className="footer-nav-item">
                Privacy
              </a>
              <a href="/" className="footer-nav-item">
                Notice
              </a> */}
              </span>
            </div>
          </div>
          <div className="col-sm-5 border-top py-2 copyright">
            Copyright ©2021
          </div>
        </div>
      </div>
    </div>
  );
}
