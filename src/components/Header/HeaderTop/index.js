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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import SearchBox from "../../SearchBox";

export default function HeaderTop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "10",
        backgroundColor: "#00000080",
        width: "100%",
      }}
    >
      <Container>
        <Navbar dark expand="md" className="d-flex justify-content-between">
          <NavbarBrand>
            <Link to="/home">
              <img
                src="images/header-logo1.png"
                alt="header-logo"
                height={70}
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-between">
            <Nav navbar>
              <NavItem>
                <Link to="/home"><NavLink>TRANG CHỦ</NavLink></Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  THỂ LOẠI
                </NavLink>
              </NavItem>
            </Nav>
            {/* <InputGroup style={{ width: 300 }}>
            <Input placeholder="Tìm kiếm-..." />
            <InputGroupAddon addonType="append">
              <InputGroupText>O</InputGroupText>
            </InputGroupAddon>
          </InputGroup> */}
            <Nav navbar>
              <SearchBox />
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink>ĐĂNG KÝ</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
