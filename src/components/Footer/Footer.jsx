import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function Footer() {
  return (
    <>
      <Container fluid className="Footer_Container">
        <Container fluid="sm">
          <div className="Footer_Center">
            <div>
              <a href="#hola">Company</a>
            </div>
            <div>
              <a href="#hola">Partners</a>
            </div>
            <div>
              <a href="#hola">Security Audit</a>
            </div>
            <div>
              <a href="#hola">Privacy Policy</a>
            </div>
            <div>
              <a href="#hola">Contact</a>
            </div>
            <div className="Footer_Copy">
               <a href="#hola"> <AiOutlineCopyrightCircle /> Powered by TARP Token.</a>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
