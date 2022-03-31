import React, { useState } from "react";
import "./HomePage.css";
import ImageLogo from "../../images/image12.png";
import pancakeLogo from "../../images/pancakeLogo.png";
import dinoLogo from "../../images/dinoLogo.png";
import squidLogo from "../../images/squidLogo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePageCoins from "./HomePageCoins/HomePageCoins.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import { Container, Image, Row, Col, Dropdown, Button } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Container fluid className="HomePage_Container">
        <Row className="HomePage_Row__Image">
          <Col xl={12}>
            <Image src={ImageLogo} fluid />
          </Col>
        </Row>

        {/* -----TEXTOS---- */}

        <Row className="HomePage_Row__Text">
          <Col xl={12}>
            <h5>POWERED BY TARP TOKEN</h5>
            <h2>
              The AI Powered Tool That Measures <br />
              The Security of Your Crypto Portfolio
            </h2>
            <p>Automatically know the red flags on any token!</p>
          </Col>
        </Row>

        {/* -----DROPDOWNS----- */}

        <Row className="HomePage_Row__Dropdown">
          <Col>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle className="Dropdown_Search" id="dropdown-basic">
                Search project by name or contract address
              </Dropdown.Toggle>

              <Dropdown.Menu className="HomePage_Dropdown">
                <Dropdown.Item href="#">
                  <p>
                    #55 <Image fluid src={pancakeLogo} /> <b>Pancake Swap</b>
                    (CAKE)
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <p>
                    #2545 <Image fluid src={dinoLogo} />{" "}
                    <b>Dinoland Metaverse</b>
                    (DNL)
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <p>
                    #3993 <Image fluid src={squidLogo} /> <b>Squid Game</b>
                    (SQUID)
                  </p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                className="HomePage_Dropdown_Network"
                id="dropdown-autoclose-true"
              >
                Network
              </Dropdown.Toggle>
              <Dropdown.Menu className="HomePage_Dropdown">
                <Dropdown.Item href="#">
                  <p>
                    <b>Ethereum</b>
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <p>
                    <b>BNB Chain</b>
                  </p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button className="HomePage_Button_Read" variant="warning">
              Read <HiOutlineArrowNarrowRight />
            </Button>
          </Col>
        </Row>

        {/* -----STATISTICS---- */}

        <Container fluid="sm" className="HomePage_Container_Statistics">
          <Row className="HomePage_Row_Statistics">
            <Col sl={6} xl={6}>
              <div className="ContainerInfo">
                <div className="Statistics_Title">
                  <h4>Contracts Analyzed</h4>
                  <h3>
                    <HiOutlineDotsCircleHorizontal />
                  </h3>
                </div>
                <div className="Statistics_Info">
                  <h2>1.23k</h2>
                </div>
                <div className="Statistics_Text">
                  <p>More than 200 this week</p>
                </div>
              </div>
            </Col>
            <Col sl={6} xl={6}>
              <div className="ContainerInfo">
                <div className="Statistics_Title">
                  <h4>Scams detected</h4>
                  <h3>
                    <HiOutlineDotsCircleHorizontal />
                  </h3>
                </div>
                <div className="Statistics_Info">
                  <h2>431</h2>
                </div>
                <div className="Statistics_Text">
                  <p>7 scams detected this week</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <p id="TextInfo">
              Creating an account grants you the benefit of tracking your crypto
              portfolio and give you the possibility to receive notifications
              when a <br />
              token you’re invested in, changes certain code inside the contract
              or when the liquidity lock is expired.
            </p>
          </Col>
        </Row>

        <HomePageCoins />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
