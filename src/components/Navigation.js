import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/nav.css";
const Navigation = () => {
  return (
    <div id="Navbar" className="sticky-top">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            {/* <img src="" width={100} />
            SHINGING PASS */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-menu">
              SHINING PASS
            </Link>
            {/*    <Link to="/introduction" className="nav-menu">
              디자인소개
            </Link>
   
            <Link to="/interior" className="nav-menu">
              인테리어 디자인
            </Link>

            <Link to="/cusotmer" className="nav-menu">
              제작문의
            </Link> */}
          </Nav>

        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Navigation;
