import React, { useState } from "react";
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
        <NavbarBrand href="/">
          <img src="images/header-logo1.png" alt="header-logo" height={70} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-between">
          <Nav navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <InputGroup style={{ width: 300 }}>
            <Input placeholder="Search..." />
            <InputGroupAddon addonType="append">
              <InputGroupText>O</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Nav navbar>
            <NavItem>
              <NavLink>Đăng Ký</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}
