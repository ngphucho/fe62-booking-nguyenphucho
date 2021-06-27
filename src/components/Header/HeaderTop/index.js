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

export default function HeaderTop() {
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

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <div className="headerTop">
      <Container fluid="md" className="position-static">
        <Navbar
          dark
          expand="md"
          className="d-flex justify-content-between position-static p-0"
        >
          {/* left (logo)*/}
          <NavbarBrand>
            <Link to="/home">
              <img
                src="./images/header-logo1.png"
                alt="header-logo"
                height={70}
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
              <NavItem active={activePage === 1}>
                <Link to="/home">
                  <NavLink onClick={closeMenu}>TRANG CHỦ</NavLink>
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link to="/cinemas">
                  <NavLink>RẠP</NavLink>
                </Link>
              </NavItem> */}
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
                  active={activePage === 3}
                  nav
                  inNavbar
                  className="position-static"
                >
                  <DropdownToggle nav>
                    <AccountCircleIcon />
                    <span style={{ paddingLeft: 10 }}>{userInfo.hoTen}</span>
                  </DropdownToggle>
                  <DropdownMenu
                    className="border-0 rounded-0 p-0 userInfoMunu"
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
