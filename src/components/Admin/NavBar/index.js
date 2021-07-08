import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { logout } from "../../../actions/auth";
import PageTitle from "../PageTitle";

export default function NavBar() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar dark expand="md">
        <NavbarBrand>
          <PageTitle />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="d-md-flex justify-content-end">
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar className="position-static">
              <DropdownToggle nav>
                <AccountCircleIcon />
                <span style={{ paddingLeft: 10, letterSpacing: 2 }}>
                  {userInfo.taiKhoan}
                </span>
              </DropdownToggle>
              <DropdownMenu
                className="border-0 rounded-0 p-0"
                style={{ top: "70px", right: 0, backgroundColor: "#00000080" }}
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
