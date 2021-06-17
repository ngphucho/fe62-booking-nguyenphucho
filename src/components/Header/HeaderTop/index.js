import React, { useState } from "react";
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
import Cinemas from "../../../pages/Cinemas";
import SearchBox from "../../SearchBox";
import { logout } from "../../../actions/auth";
export default function HeaderTop() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
    <div
      style={{
        backgroundColor: "#000000",
        width: "100%",
      }}
    >
      <Container className="position-static">
        <Navbar
          dark
          expand="md"
          className="d-flex justify-content-between position-static"
        >
          <NavbarBrand>
            <Link to="/home">
              <img
                src="./images/header-logo1.png"
                alt="header-logo"
                height={70}
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse
            isOpen={isOpen}
            navbar
            className="justify-content-between position-static"
          >
            <Nav className="position-static" navbar>
              <NavItem>
                <Link to="/home">
                  <NavLink>TRANG CHỦ</NavLink>
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link to="/cinemas">
                  <NavLink>RẠP</NavLink>
                </Link>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar className="position-static">
                <DropdownToggle nav>RẠP</DropdownToggle>
                <DropdownMenu
                  className="border-0 rounded-0 p-0"
                  style={{ width: "100%", top: "96px", left: "0px" }}
                >
                  <DropdownItem>
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
            <Nav navbar>
              <SearchBox />
            </Nav>
            <Nav navbar>
              {userInfo ? (
                // <NavItem style={{cursor: "pointer"}} onClick={()=>{dispatch(logout())}}>
                //   {/* <Link to="/login"> */}
                //   <NavLink>{userInfo.taiKhoan}</NavLink>
                //   {/* </Link> */}
                // </NavItem>
                <UncontrolledDropdown nav inNavbar className="position-static">
                  <DropdownToggle nav>{userInfo.taiKhoan}</DropdownToggle>
                  <DropdownMenu
                    className="border-0 rounded-0 p-0"
                    style={{ top: "96px", backgroundColor: "#00000080" }}
                  >
                    <Link to={"/thong-tin-tai-khoan/" + userInfo.taiKhoan}>
                      <DropdownItem>Thông tin cá nhân</DropdownItem>
                    </Link>
                    <DropdownItem
                      onClick={() => {
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
                      <NavLink>ĐĂNG NHẬP</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/sign-up">
                      <NavLink>ĐĂNG KÝ</NavLink>
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
