import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Usersidebar from "../../../components/User/usersidebar";
import Userpersonalinfo from "../../../components/User/userpersonalinfo";

const UserPersonalInfoPage = () => {
  return (
    <Container>
      <Row className="mt-2 p-2">
        <Col xs="3" sm="3" md="2">
          <Usersidebar></Usersidebar>
        </Col>
        <Col xs="9" sm="9" md="10">
          <Userpersonalinfo></Userpersonalinfo>
        </Col>
      </Row>
    </Container>
  );
};

export default UserPersonalInfoPage;
