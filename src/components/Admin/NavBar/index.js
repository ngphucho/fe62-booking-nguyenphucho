import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { logout } from "../../../actions/auth";

export default function NavBar() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar  className="d-flex justify-content-end">
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar className="position-static">
              <DropdownToggle nav>{userInfo.taiKhoan}</DropdownToggle>
              <DropdownMenu
                className="border-0 rounded-0 p-0"
                style={{ top: "56px", right: 0, backgroundColor: "#00000080" }}
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
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
