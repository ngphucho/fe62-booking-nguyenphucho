import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserPlus,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  return (
    <div className="signUp container-fluid">
      <div
        style={{ height: "100%" }}
        className="container px-5 w-50 d-flex flex-column justify-content-around"
      >
        <div className="d-flex flex-row justify-content-between align-items-center">
          <Link to="/home">
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />
              <div className="text">Trang chủ</div>
            </div>
          </Link>
          <div className="title">
            <h1 className="text-center">Sign Up</h1>
          </div>
          <Link to="/login">
            <div className="icon">
              <FontAwesomeIcon icon={faUserPlus} />
              <div className="text">Đăng nhập</div>
            </div>
          </Link>
        </div>
        <div className="formBox">
          <Form className="text-light">
            {/* FULL NAME */}
            <InputGroup className="inputGroup">
              <Input type="text" placeholder="Họ và tên" className="rounded-0" />
              <InputGroupAddon addonType="append">
                <InputGroupText className="rounded-0 bg-white">
                  <span><FontAwesomeIcon icon={faUser} /></span>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {/* USERNAME */}
            <InputGroup className="inputGroup">
              <Input type="text" placeholder="Tên người dùng" className="rounded-0" />
              <InputGroupAddon addonType="append">
                <InputGroupText className="rounded-0 bg-white">
                  <span><FontAwesomeIcon icon={faUser} /></span>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {/* PASSWORD */}
            <InputGroup className="inputGroup">
              <Input
                type="password"
                placeholder="Mật khẩu"
                className="rounded-0"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText className="rounded-0 bg-white">
                  <span><FontAwesomeIcon icon={faKey} /></span>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {/* EMAIL */}
            <InputGroup className="inputGroup">
              <Input type="email" placeholder="Email" className="rounded-0" />
              <InputGroupAddon addonType="append">
                <InputGroupText className="rounded-0 bg-white">
                  <span><FontAwesomeIcon icon={faUser} /></span>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {/* PHONE NUMBER */}
            <InputGroup className="inputGroup">
              <Input type="text" placeholder="Số điện thoại" className="rounded-0" />
              <InputGroupAddon addonType="append">
                <InputGroupText className="rounded-0 bg-white">
                  <span><FontAwesomeIcon icon={faUser} /></span>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {/* <div>
              Quên mật khẩu? <span>Bấm vào đây</span>
            </div> */}
            <div className="text-center inputGroup">
              <Button type="button">Đăng nhập</Button>
            </div>
          </Form>
        </div>
        <div className="logo text-center">
          <img
            className="img-fluid"
            style={{ width: "150px" }}
            src="./images/header-logo1.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
