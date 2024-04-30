import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../../../components/admin/adminsidebar";
import Addbrand from "../../../components/admin/addbrand";

const AddBrandpage = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="2">
          <AdminSidebar></AdminSidebar>
        </Col>
        <Col xs="8" sm="8" md="10">
          <Addbrand></Addbrand>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBrandpage;
