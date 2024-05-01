import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/homeStyle.css";
import "../img/S_32p_4bay_Livingroom.png";
import "../img/S_32p_4bay_Bedroom.png";
import "../img/S_32p_4bay_Kitchen.png";
import "../img/S_34p_3bay.png";
import "../img/2_S_34p_3bay_01.png";

import "../img/HighresScreenshot00039.png";
import "../img/HighresScreenshot00040.png";
import "../img/HighresScreenshot00041.png";
import "../img/HighresScreenshot00042.png";

import "../img/ShiningpassMap.png";
import "../img/ShiningpassMap1.png";

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
      <section className="main-banner">
        <div className="barnner-img-box">
          <img className="bannerimg" src="img/HillsideImg.png" />
        </div>
      </section>
      {/* 컨텐츠_네브바 간단 설명 */}
      <section id="cts-01">
        <div className="container">
          <div className="row">
            <div className="cts-01-tbox">
              <h1>SHINGING PASS </h1>
              <h2>3D INTERIOR & DIGITAL TWIN</h2>
            </div>
            {/* 메인 배너 공간 */}


            <div className="cts-space">
              <div className="cts-box-space">
                <div></div>


              </div>
              <Container>
                <Row>
                  <Col>
                    <Card style={{ width: "25.2rem", height: "42rem" }}>
                      <Card.Img variant="top" src="../img/img_introduction.jpg" />
                      <Card.Body>
                        <div>
                          <Card.Title className="cts-01-banner-title">
                            COMPANY
                          </Card.Title>
                        </div>
                        <Card.Text className="cts-01-banner-text">
                          샤이닝패스 소개
                        </Card.Text>
                        <Card.Text className="cts-01-banner-text2">
                          Shining Path는 전담 소규모 팀이 주도하는 역동적인 스타트업입니다. 우리는 특히 디지털 트윈과 아파트 내부 3D 모델링 분야의 선구적인 기술을 전문으로 합니다. 혁신적인 접근 방식을 통해 몰입도 높고 매우 정확한 디지털 표현을 생성하여 공간을 시각화하고 관리하는 방식에 혁명을 일으킬 수 있습니다. Shining Path에서는 경계를 넓히고 디지털 모델링 및 시각화의 미래를 재정의하는 최첨단 솔루션을 제공하기 위해 최선을 다하고 있습니다.
                        </Card.Text>
                        {/*  <Button variant="primary">
                          <Link to="/interior" className="nav-menu">
                            인테리어 디자인
                          </Link>
                        </Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "25.2rem", height: "42rem" }}>
                      <Card.Img variant="top" src="../img/img_interior.jpg" />
                      <Card.Body>
                        <div>
                          <Card.Title className="cts-01-banner-title">
                            SERVICE
                          </Card.Title>
                        </div>
                        <Card.Text className="cts-01-banner-text">
                          3D 아파트 인테리어 제작
                        </Card.Text>
                        <Card.Text className="cts-01-banner-text2">
                          Shining Path에서는 Unreal Engine과 전문 3D 모델 생성 프로그램과 같은 업계 최고의 도구를 활용하여 아파트를 위한 멋진 인테리어 디자인을 제작합니다. 소프트웨어 플랫폼의 고급 기능을 활용하여 비교할 수 없는 현실감과 세부 묘사로 귀하의 비전을 생생하게 구현합니다. 디자인에 대한 전문 지식과 최첨단 기술을 결합하여 기대를 뛰어넘는 몰입감 있고 시각적으로 매력적인 경험을 제공합니다. 새로운 공간을 개념화하든 기존 공간을 재구상하든 Shining Path는 아이디어를 놀라운 현실로 바꾸는 신뢰할 수 있는 파트너입니다.
                        </Card.Text>
                        {/* <Button variant="primary">
                          <Link to="/interior" className="nav-menu">
                            인테리어 디자인
                          </Link>
                        </Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "25.2rem", height: "42rem" }}>
                      <Card.Img variant="top" src="../img/img_produce.jpg" />
                      <Card.Body>
                        <Card.Title className="cts-01-banner-title">
                          PROCESS
                        </Card.Title>
                        <Card.Text className="cts-01-banner-text">
                          프로덕트 라이프 사이클.
                        </Card.Text>
                        <Card.Text className="cts-01-banner-text2">
                        </Card.Text>
                        Shining Path의 제품 수명주기는 귀하의 요청을 접수하고 생산문의를 하는 것에서부터 시작됩니다. 고객님의 요구 사항을 이해한 후, 프로젝트를 완료하는 데 필요한 일정과 리소스를 설명하는 자세한 견적을 제공합니다.  바로 작업 시작과 동시에 구성 프로세스를 시작하는 이유입니다. 이 병렬 접근 방식을 통해 프로젝트 진행 상황에 대한 지속적인 업데이트와 통찰력을 얻을 수 있습니다. 마지막으로, 완료되면  기대에 부응하고 그 이상으로 세심하게 제작된 최종 결과를 받게 됩니다.
                        {/* <Button variant="primary">
                          <Link to="/cusotmer" className="nav-menu">
                            제작문의
                          </Link>
                        </Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>


            {/*     <div className="col-md-3 col-sm-6 cts-banner-img-box-01">
              <div className="cts-img-bn-box">
                <div className="cts-img-box"></div>

                <span className="cts-01-banner-title">COMPANY</span>
                <span>샤이닝패스 소개</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 cts-banner-img-box-01">
              <div className="cts-img-bn-box">
                <div className="cts-img-box"></div>

                <span>SERVICE</span>
                <span>3D 아파트 인테리어 제작</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 cts-banner-img-box-01">
              <div className="cts-img-bn-box">
                <div className="cts-img-box"></div>
                <span>PROCESS</span>
                <span>프로덕트 라이프 사이클</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/*포트폴리오 부분 */}
      <section id="main-01">
        <div className="container">
          <div className="row">
            <div className="col-md-12 cts-01-tbox">
              <h1>PORTFOLIO</h1>
              <h2>3D APARTMENT INGERIOR</h2>
            </div>
            {/* 메인 배너 */}
            <div className="slider-area">
              <Carousel data-bs-theme="light">
                <Carousel.Item>
                  <img
                    src="../img/S_32p_4bay_Livingroom.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5>Moden Living Room</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="../img/S_32p_4bay_Bedroom.png"
                    class="d-block w-100 h-1"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5>Bed Room</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="../img/S_32p_4bay_Kitchen.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5>Kitchen</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                  <img
                    src="../img/S_34p_3bay_01.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item> */}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* 회사 위치 */}
      <section id="bottom-banner">
        <div className="container">
          <div className="banner-space">
            <div className="banner-title-text">
              <h1>CONTACT</h1>
              <h2 className="">INTRODUCE COMPANY LOCATION</h2>
            </div>
            {/* 지도 */}
            <div className="map-space">
              <div className="mainMap">
                <Row>
                  <Col>
                    <img
                      src="../img/ShiningpassMap1.png"
                      class="d-block w-100"

                      alt="..."
                      width={100}
                    />
                  </Col>
                  <Col>
                    <div className="map-title-text">
                      <h4>LOCATION</h4>
                      <span>주소 : 서울특별시 강남구 언주로 703 <br />논현동 90-2 <br />Tel : 010-5590-04823</span>
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
              <h1>PROCESS</h1>
              <h3 className="">고퀼리티 아파트 인테리어 제작</h3>
              <p>
                목표 달성과 원활한 경험의 프로세스,
                <br />
                요청을 받아 비용 견적과 아파트 레이아웃에 대한
                <br />
                명확한 다이어그램을 갖춘 상세한 인테리얼 디자인을 만듭니다.
              </p>
              <div className="proces-box-container">
                <Container>
                  <Row>
                    <Col >
                      <Card style={{ width: "19rem", height: "12rem" }}>
                        <Card.Body>
                          <div>
                            <Card.Title className="cts-01-banner-title">
                              1. 제작문의
                            </Card.Title>
                          </div>
                          <Card.Text className="cts-01-banner-text">
                            Production inquiry
                          </Card.Text>
                          <Card.Text className="cts-01-banner-text2">
                            제품 제작 및
                            제품 컴펌에 대한
                            이야기를 나눕니다.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ width: "19rem", height: "12rem" }}>
                        <Card.Body>
                          <div>
                            <Card.Title className="cts-01-banner-title">
                              2. 작업내용 확인
                            </Card.Title>
                          </div>
                          <Card.Text className="cts-01-banner-text">
                            Production inquiry
                          </Card.Text>
                          <Card.Text className="cts-01-banner-text2">
                            제품의
                            주 목적 및 기능에 대한
                            이야기를 나눕니다.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ width: "19rem", height: "12rem" }}>
                        <Card.Body>
                          <div>
                            <Card.Title className="cts-01-banner-title">
                              3. 작업 시작 및 컴펌
                            </Card.Title>
                          </div>
                          <Card.Text className="cts-01-banner-text">
                            Start work & complete
                          </Card.Text>
                          <Card.Text className="cts-01-banner-text2">
                            제품 제작 및
                            제품 컴펌에 대한
                            이야기를 나눕니다.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card style={{ width: "19rem", height: "12rem" }}>
                        <Card.Body>
                          <div>
                            <Card.Title className="cts-01-banner-title">
                              4. 최종납품
                            </Card.Title>
                          </div>
                          <Card.Text className="cts-01-banner-text">
                            Entrega final
                          </Card.Text>
                          <Card.Text className="cts-01-banner-text2">
                            제품의
                            최종 결과에 대한
                            이야기를 나눕니다.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    {/*  <Col >

                      <div class="process-tbox">
                        <div>1. 제작문의</div>
                        <div>
                          프로덕트의
                          <br />주 목적 및 기능에 대한
                          <br />
                          이야기를 나눕니다.
                        </div>
                      </div>
                    </Col> */}
                  </Row>
                  <Row>
                    {/* <Col>

                      <div class="process-tbox">
                        <div>2. 작업내용 확인</div>
                        <div>
                          제품의
                          <br />주 목적 및 기능에 대한
                          <br />
                          이야기를 나눕니다.
                        </div>
                      </div></Col>
                    <Col>


                      <div class="process-tbox">
                        <div>4. 최종납품</div>
                        <div>
                          제품의
                          <br />최종 결과에 대한
                          <br />
                          이야기를 나눕니다.
                        </div>
                      </div></Col> */}

                  </Row>
                </Container>
              </div>


              {/*  <div class="process-box-space">
                <div class="process-box">





                  <div class="process-line"></div>
                  <div class="process-ntbox">
                    <div class="box-number">
                      <div>1</div>
                    </div>
                    <div class="process-tbox">
                      <div>기획</div>
                      <div>
                        프로덕트의
                        <br />주 목적 및 기능에 대한
                        <br />
                        이야기를 나눕니다.
                      </div>
                    </div>
                  </div>
                  <div class="process-ntbox">
                    <div class="box-number">
                      <div>1</div>
                    </div>
                    <div class="process-tbox">
                      <div>기획</div>
                      <div>
                        프로덕트의
                        <br />주 목적 및 기능에 대한
                        <br />
                        이야기를 나눕니다.
                      </div>
                    </div>
                  </div>
                  <div class="process-ntbox">
                    <div class="box-number">
                      <div>1</div>
                    </div>
                    <div class="process-tbox">
                      <div>기획</div>
                      <div>
                        프로덕트의
                        <br />주 목적 및 기능에 대한
                        <br />
                        이야기를 나눕니다.
                      </div>
                    </div>
                  </div>
                  <div class="process-ntbox">
                    <div class="box-number">
                      <div>1</div>
                    </div>
                    <div class="process-tbox">
                      <div>기획</div>
                      <div>
                        프로덕트의
                        <br />주 목적 및 기능에 대한
                        <br />
                        이야기를 나눕니다.
                      </div>
                    </div>
                  </div>
                  <div class="process-ntbox">
                    <div class="box-number">
                      <div>1</div>
                    </div>
                    <div class="process-tbox">
                      <div>기획</div>
                      <div>
                        프로덕트의
                        <br />주 목적 및 기능에 대한
                        <br />
                        이야기를 나눕니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="process-space-box">
              <div className="process-space-01">
                <div className="space-line"></div>
                <div className="process-box">
                  <div className="process-number-1">
                    <div>1</div>
                  </div>
                  <div className="process-tbox">
                    <div>전화상담</div>
                    <div>3D작업 상담 및 의뢰</div>
                  </div>
                </div>
                <div className="process-box"></div>
                <div className="process-box"></div>
                <div className="process-box"></div>
              </div>
            </div> */}
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
