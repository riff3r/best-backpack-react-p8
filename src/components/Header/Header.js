import React from "react";
import logo from "../../logo.png";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header className="mb-4">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Best Backpack
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
