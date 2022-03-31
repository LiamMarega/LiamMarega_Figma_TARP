import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Modal,
  Button,
  Form,
  ModalBody,
} from "react-bootstrap";
import Logo from "../../images/Logo.png";
import "./NavBar.css";

/* importacion de iconos */
import {
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import { SiFacebook } from "react-icons/si";
import { AiFillGoogleCircle } from "react-icons/ai";

function NavBar() {
  const [navBarBackground, setNavBarBackgorund] = useState(false);

  const changeBackground = () => {
    if (screen.width < 1500) {
      if (window.scrollY >= 10) {
        setNavBarBackgorund(true);
      }
    } else if (window.scrollY >= 10) {
      setNavBarBackgorund(true);
    } else {
      setNavBarBackgorund(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* ----MODAL---- */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        centered
      >
        <div className="CentradoBotonCerrar">
          <Button id="ButtonClose" variant="secondary" onClick={handleClose}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 25L25 1M1 1L25 25"
                stroke="#D1D5DB"
                stroke-opacity="0.3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
        <Modal.Header>
          <h2>Create an account.</h2>
          <p>
            Creating an account grants you the benefit of tracking your crypto
            portfolio and gives you the possibility to receive notifications
            when a token you’re invested in, changes certain code inside the
            contract or when the liquidity lock is expired.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="email" placeholder="Liam Marega" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="liammarega85@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="**********" />
              <Form.Text className="text-muted">
                At least 10 characters with a capital letter and a number.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Header>
        <Modal.Body>
          <Button onClick={handleClose} id="ButtonRegister" type="submit">
            Sign up  <HiOutlineArrowNarrowRight/>
          </Button>
        </Modal.Body>

        <Modal.Footer>
          <div className="NavBar_Container_Modal_Footer">
            <h5>or sign up with</h5>
            <div className="NavBar_Modal_Buttons">
              <Button onClick={handleClose} id="ButtonRegister" type="submit">
                <SiFacebook />
                Facebook
              </Button>
              <Button onClick={handleClose} id="ButtonRegister" type="submit">
               <AiFillGoogleCircle />
                Google
              </Button>
            </div>
            <p>
              Already have an account? <b>Log in to TARP READER</b>{" "}
            </p>
          </div>
        </Modal.Footer>
      </Modal>

      {/* ----NAVBAR---- */}

      <Navbar fixed="top" variant="dark" expand="xxl">
        <Container
          className={navBarBackground ? "Navbar active" : "Navbar false"}
          fluid
        >
          {/* Logo */}
          <div className="NavBar_Logo">
            <Navbar.Brand href="#home">
              <Image fluid src={Logo} /> <h2>TARP Reader</h2>
            </Navbar.Brand>
          </div>

          {/* Links */}
          <div className="NavBar_Links">
            {/* Searchbar */}

            <Nav className="me-auto">
              <div className="form">
                <form action="post">
                  <i className="fa fa-search">
                    <BiSearchAlt2 />{" "}
                  </i>

                  <input
                    type="text"
                    className="form-control form-input"
                    placeholder="Search project"
                  />
                </form>
              </div>
              <Nav.Link href="#home">Company</Nav.Link>
              <Nav.Link href="#features">Customers</Nav.Link>
              <Nav.Link href="#pricing">Security Audit</Nav.Link>
              <Nav.Link
                onClick={handleShow}
                className="NavBar_SignUp"
                href="#signUp"
              >
                Sign Up
              </Nav.Link>
              <Nav.Link href="#login">Log in</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
