import React, { useState, useEffect } from "react";
import { debounce } from "../../utils/debounce";
import { Container } from "reactstrap";
import HeaderNavbar from "./HeaderNavbar";
import HeaderTop from "./HeaderTop";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navbarStyles, setNavbarStyles] = useState({
    position: "relative",
    // height: "60px",
    width: "100%",
    backgroundColor: "grey",
    textAlign: "center",
    transition: "top 0.6s",
    zIndex: "100",
  });

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 500
    );

    if (currentScrollPos >= 500) {
      setNavbarStyles((navbarStyles) => ({
        ...navbarStyles,
        position: "fixed",
      }));
    } else {
      setNavbarStyles((navbarStyles) => ({
        ...navbarStyles,
        position: "relative",
      }));
    }

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll, navbarStyles]);

  return (
    <Container
      fluid={true}
      className="p-0"
      style={{ ...navbarStyles, top: visible ? "0" : "-100%" }}
    >
      <HeaderTop></HeaderTop>
      {/* <HeaderNavbar></HeaderNavbar> */}
    </Container>
  );
}
