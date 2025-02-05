import React from "react";
import "../styles/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="fotter-space"></div>
      <Container fluid>
        <Row>
          <Col>
            <h1>SHINING PASS</h1>
          </Col>
          <Col>
            <span>
              대표 : 추용재 | dydwo6530@naver.com | <br />
              주소: 서울특별시 강남구 언주로 703 논현동 90-2 |{" "}
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
