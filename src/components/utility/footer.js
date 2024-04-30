import React from "react";
import "../../style.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.png";
import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Row
      style={{ background: "#2C2C2C", width: "100%" }}
      className="p-5 m-auto"
    >
      <Container className=" d-flex flex-wrap">
        <Col xs="12" sm="6" md="4" lg="4" className="p-0 mb-4">
          <img src={logo} alt="logo" width={"150px"}></img>
        </Col>

        <Col xs="12" sm="6" md="4" lg="4" className="p-0 text-light mb-4">
          <h5 className="header-footer">Contacts</h5>
          <div>
            <p className="parent-footer">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              Damietta, Egypt
            </p>
            <p className="parent-footer">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01099419038
            </p>
            <p className="parent-footer">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
              moabdo346@gmail.com
            </p>
          </div>
        </Col>
        <Col xs="12" sm="6" md="4" lg="4" className="p-0 text-light mb-4">
          <h5 className="header-footer">Social Media</h5>
          <div className=" d-flex gap-4">
            <a href="https://www.facebook.com/zidanberg/" target="_blank">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
            <a href="">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-a-zidan/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </div>
        </Col>
      </Container>
    </Row>
  );
};

export default Footer;
