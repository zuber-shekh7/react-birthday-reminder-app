import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="py-4 shadow" bg="light" expand="lg">
      <Link className="navbar-brand" to="/">
        Birthday Reminder
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/birthdays">
            Birthdays
          </Link>
          <Link className="nav-link" to="/signin">
            Sign in
          </Link>
          <Link className="nav-link" to="/signup">
            Sign up
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
