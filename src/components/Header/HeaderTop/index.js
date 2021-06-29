import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Cinemas from "../../../pages/Cinemas";
import SearchBox from "../../SearchBox";
import { logout } from "../../../actions/auth";
import { useMediaQuery } from "react-responsive";

export default function HeaderTop() {
  const isMd = useMediaQuery({ minWidth: 768 });
  const { activePage } = useSelector((state) => state.pageTitle);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  const navData = [
    {
      name: "TRANG CHỦ",
      link: "/home",
    },
    {
      name: "RẠP",
      link: "/cinemas",
    },
  ];

  return (
    <div className="headerTop">
      <Container fluid="lg" className="position-static">
        <Navbar
          dark
          expand="md"
          className="d-flex justify-content-between position-static p-0 myNavbar"
        >
          {/* left (logo)*/}
          <NavbarBrand>
            <Link to="/home">
              <img
                className="logoHeader"
                src={
                  isMd
                    ? "./images/header-logo1.png"
                    : "./images/mini-logo-white.png"
                }
                alt="header-logo"
                height={isMd ? 70 : 50}
                style={{ margin: isMd ? 0 : "10px 0" }}
                onMouseOver={(e) => {
                  e.currentTarget.src = isMd
                    ? "./images/header-logo1.png"
                    : "./images/mini-logo-white-hover.png";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.src = isMd
                    ? "./images/header-logo1.png"
                    : "./images/mini-logo-white.png";
                }}
              />
            </Link>
          </NavbarBrand>

          {/* middle (nut menu)*/}
          <NavbarToggler onClick={toggle} />

          {/* right */}
          <Collapse
            isOpen={isOpen}
            navbar
            className="justify-content-between position-static headerRight"
          >
            {/* thanh tiem kiem */}
            <Nav navbar className="order-md-1">
              <SearchBox />
            </Nav>

            {/* thanh dieu huong */}
            <Nav className="position-static order-md-0" navbar>
              {/* Trang chu */}
              <NavItem active={activePage === 1}>
                <Link to="/home">
                  <NavLink onClick={closeMenu}>TRANG CHỦ</NavLink>
                </Link>
              </NavItem>

              {/* cum rap */}
              <UncontrolledDropdown
                active={activePage === 2}
                nav
                inNavbar
                className="position-static"
              >
                <DropdownToggle nav>CỤM RẠP</DropdownToggle>
                <DropdownMenu className="border-0 rounded-0 p-0 rapMenu">
                  <DropdownItem onClick={closeMenu}>
                    <Cinemas />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* Tat ca phim */}
              <UncontrolledDropdown
                active={activePage === 3}
                nav
                inNavbar
                className="position-static"
              >
                <DropdownToggle nav>PHIM</DropdownToggle>
                <DropdownMenu className="border-0 rounded-0 p-0 subMenu">
                  <Link to="/tat-ca-phim">
                    <DropdownItem onClick={closeMenu}>TẤT CẢ PHIM</DropdownItem>
                  </Link>
                  <Link to="/phim-dang-chieu">
                    <DropdownItem onClick={closeMenu}>
                      PHIM ĐANG CHIẾU
                    </DropdownItem>
                  </Link>
                  <Link to="/phim-sap-chieu">
                    <DropdownItem onClick={closeMenu}>
                      PHIM SẮP CHIẾU
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* {navData.map((item, index) => (
                <NavItem key={index}>
                  <Link to={item.link}>
                    <NavLink>{item.name}</NavLink>
                  </Link>
                </NavItem>
              ))} */}
            </Nav>

            {/* thanh userinfo */}
            <Nav navbar className="order-md-2">
              {userInfo ? (
                // <NavItem style={{cursor: "pointer"}} onClick={()=>{dispatch(logout())}}>
                //   {/* <Link to="/login"> */}
                //   <NavLink>{userInfo.taiKhoan}</NavLink>
                //   {/* </Link> */}
                // </NavItem>
                <UncontrolledDropdown
                  active={activePage === 4}
                  nav
                  inNavbar
                  className="position-static"
                >
                  <DropdownToggle nav>
                    <AccountCircleIcon />
                    <span style={{ paddingLeft: 10 }}>{userInfo.hoTen}</span>
                  </DropdownToggle>
                  <DropdownMenu
                    className="border-0 rounded-0 p-0 subMenu"
                    // style={{ top: "96px", backgroundColor: "#ffffff80" }}
                  >
                    <Link to={"/thong-tin-tai-khoan/" + userInfo.taiKhoan}>
                      <DropdownItem onClick={closeMenu}>
                        Thông tin cá nhân
                      </DropdownItem>
                    </Link>
                    <DropdownItem
                      onClick={() => {
                        closeMenu();
                        dispatch(logout());
                      }}
                    >
                      Đăng xuất
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <>
                  <NavItem>
                    <Link to="/login">
                      <NavLink onClick={closeMenu}>ĐĂNG NHẬP</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/sign-up">
                      <NavLink onClick={closeMenu}>ĐĂNG KÝ</NavLink>
                    </Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
