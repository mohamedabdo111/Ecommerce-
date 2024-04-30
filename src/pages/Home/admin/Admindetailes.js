import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../../../components/admin/adminsidebar";
import PaginationCode from "../../../components/utility/pagination";
import CardOrderDetailes from "../../../components/admin/CardOrderDetailes";
const Admindetailes = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="2">
          <AdminSidebar></AdminSidebar>
        </Col>
        <Col xs="7" sm="7" md="10">
          <CardOrderDetailes></CardOrderDetailes>
          {/* <PaginationCode></PaginationCode> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Admindetailes;
