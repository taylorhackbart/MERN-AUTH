import React from "react";
import "./nav.css";
import logo from "./logo.png";
import { Navbar } from "react-bootstrap";
import AuthOptions from "../../components/auth/AuthOptions"

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="xl" bg="light" variant="light">
        <Navbar.Brand className="logo-button" href="/">
          <img className="logo" src={logo}></img>
        </Navbar.Brand>
        <div className="ml-auto">
          <AuthOptions />
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
