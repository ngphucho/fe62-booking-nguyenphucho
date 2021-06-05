import React, { useState } from "react";
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

export default function HeaderTop() {
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
              <NavItem>
                <Link to="/login">
                  <NavLink>ĐĂNG KÝ</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
