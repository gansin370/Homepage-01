import React from "react";
/* css */
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/homeStyle.css";

import "../img/S_32p_4bay_Livingroom.png";
import "../img/S_32p_4bay_Bedroom.png";
import "../img/S_32p_4bay_Kitchen.png";
import "../img/S_34p_3bay.png";
import "../img/2_S_34p_3bay_01.png";
import "../img/S_Hilside_1.png";
import "../img/S_Hilside_2.png";
import "../img/S_Hilside_3.png";

import "../img/ShiningpassMap2.png";

import "../img/img_introduction.jpg";
import "../img/img_interior.jpg";
import "../img/img_produce.jpg";

import "../img/HillsideImg.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import Carousel from "react-bootstrap/Carousel";
import { Button, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const opts = {
    width: "100%",
    height: "700",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      loop: 1,
      mute: 1,
      playlist: "QP7h4dc5zZo", // 유튜브 영상 ID 입력
    },
  };
  return (
    <div className="home-body">
      {/* 컨텐츠_네브바 아래 그림 설명 */}
      <section id="main-01">
        <div className="container">
          <div className="row">
            <div className="col-md-12 cts-01-tbox">
              <h1></h1>
              <h2></h2>
            </div>
            {/* 메인 배너 */}
            <div className="slider-area">
              <Carousel data-bs-theme="light">
                {" "}
                <Carousel.Item>
                  <img
                    src="../img/S_Hilside_1.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="../img/S_Hilside_2.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="../img/S_Hilside_3.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>{" "}
                {/* <Carousel.Item>
                  <img
                    src="../img/S_32p_4bay_Kitchen.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="../img/S_32p_4bay_Livingroom.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                 */}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section id="cts-0">
        <div className="centeior">
          <div className="row">
            <Container>
              <Row>
                <Col>
                  <Card
                    className="cts-0-card"
                    style={{ width: "81rem", height: "47.5rem" }}>
                    <Card.Img
                      variant="top"
                      src="../img/S_32p_4bay_Kitchen.png"
                    />
                    <Card.Body>
                      <div>
                        <Card.Title className="cts-01-banner-title">
                          {/*  MODEL HOUSE */}
                        </Card.Title>
                      </div>
                      <Card.Text className="cts-01-banner-text"></Card.Text>
                      <Card.Text className="cts-01-banner-text2"></Card.Text>
                      {/*  <Button variant="primary">
                          <Link to="/interior" className="nav-menu">
                            인테리어 디자인
                          </Link>
                        </Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            <div className="cts-line"></div>
            <Container>
              <Row>
                <Col md="auto">
                  <Card
                    className="cts-0-card"
                    style={{ width: "81rem", height: "47.5rem" }}>
                    <Card.Img
                      variant="top"
                      src="../img/S_32p_4bay_Livingroom.png"
                    />
                    <Card.Body>
                      <div>
                        <Card.Title className="cts-01-banner-title">
                          {/*  INTERIOR */}
                        </Card.Title>
                      </div>
                      <Card.Text className="cts-01-banner-text"></Card.Text>
                      <Card.Text className="cts-01-banner-text2"></Card.Text>
                      {/* <Button variant="primary">
                          <Link to="/interior" className="nav-menu">
                            인테리어 디자인
                          </Link>
                        </Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section id="cts-01">
        <div className="container">
          <div className="row">
            <div className="cts-01-tbox">
              {/* <h1>SHINGING PASS </h1> */}
              {/* <h2>3D INTERIOR & DIGITAL TWIN</h2> */}
            </div>
            {/* 메인 배너 공간 */}

            <div className="cts-space">
              <div className="cts-box-space">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-banner">
        <div className="barnner-img-box">
          {/*    <img className="bannerimg" src="img/HillsideImg.png" /> */}
        </div>
      </section>
      {/* 회사 위치 */}
      <section id="bottom-banner">
        <div className="container">
          <div className="banner-space">
            <div className="banner-title-text">
              {/* <h1>CONTACT</h1>
              <h2 className="">INTRODUCE COMPANY LOCATION</h2> */}
            </div>
            {/* 지도 */}
            <div className="map-space">
              <div className="mainMap">
                <Row>
                  <Col>
                    <img
                      src="../img/ShiningpassMap2.png"
                      class="d-block w-100"
                      alt="..."
                      width={100}
                    />
                  </Col>
                  <Col>
                    <div className="map-title-text">
                      {/*  <h4>LOCATION</h4> */}
                      <span>
                        서울특별시 강남구 언주로 703 <br />
                        논현동 90-2 <br />
                        010-5590-04823
                      </span>
                      <span></span>
                      <span></span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            {/* 위치 */}
            {/* <div className="col-cts">
              <div className="main-add">
                <span>서울특별시 강남구 언주로 703 논현동 90-2</span>
                <span></span>
                <span></span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section id="process">
        <div className="container">
          <div className="row">
            <div className="col-md-12 cts-01-tbox">
              {/* <h1>PROCESS</h1>
              <h3 className="">고퀼리티 아파트 인테리어 제작</h3>
              <p>
                목표 달성과 원활한 경험의 프로세스,
                <br />
                요청을 받아 비용 견적과 아파트 레이아웃에 대한
                <br />
                명확한 다이어그램을 갖춘 상세한 인테리얼 디자인을 만듭니다.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
