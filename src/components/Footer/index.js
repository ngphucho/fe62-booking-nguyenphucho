import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-light footer">
      <div className="container">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-7">
            <div className="border-bottom" style={{ textAlign: "right" }}>
              RETURN TO TOP ^
            </div>
          </div>
          <div className="col-5 pb-5">
            <img
              className="bottom-logo"
              src="./images/footer-logo1.png"
              alt="bottom-log"
            />
            <div className="contact-logo-box">
              <span className="contact-logo">
                <i class="fab fa-facebook"></i>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span className="contact-logo">
                <FontAwesomeIcon icon={faYoutube} />
              </span>
              <span className="contact-logo">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="contact-logo">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </div>
          </div>
          <div className="col-7 d-flex flex-column justify-content-around">
            <div className="footer-nav">
              <b>ABOUT</b>
              <a href="#" className="footer-nav-item">
                Privacy
              </a>
              <a href="#" className="footer-nav-item">
                Notice
              </a>
              <a href="#" className="footer-nav-item">
                Privacy
              </a>
              <a href="#" className="footer-nav-item">
                Notice
              </a>
            </div>
            <div className="footer-nav">
              <b>CONTACT</b>
              <a href="#" className="footer-nav-item">
                Privacy
              </a>
              <a href="#" className="footer-nav-item">
                Notice
              </a>
              <a href="#" className="footer-nav-item">
                Privacy
              </a>
              <a href="#" className="footer-nav-item">
                Notice
              </a>
            </div>
            <div className="footer-nav">
              <b>CONECT</b>
              <a href="#" className="footer-nav-item">
                Privacy
              </a>
              <a href="#" className="footer-nav-item">
                Notice
              </a>
              <a href="#" className="footer-nav-item">
                Privacy
              </a>
              <a href="#" className="footer-nav-item">
                Notice
              </a>
            </div>
            </div>
          <div className="col-5 border-top py-2">Copyright ©2021</div>
        </div>
      </div>
    </div>
  );
}
