import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import "../img/imgtext.png";
const Navigation = () => {
  return (
    <div id="Navbar" className="sticky-top">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/" className="nav-title">
            <img src="../img/Logo.png" width={80} />
            <h4>SHINING PASS</h4>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-menu">
              {/* <img src="../img/imgtext.png" width={380} /> */}
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
