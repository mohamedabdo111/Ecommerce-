import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../../../components/admin/adminsidebar";
import Adminallproduct from "../../../components/admin/Adminallproduct";
import PaginationCode from "../../../components/utility/pagination";
import Adminorders from "../../../components/admin/Adminorders";
const Adminallproductpagee = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="2">
          <AdminSidebar></AdminSidebar>
        </Col>
        <Col xs="8" sm="8" md="10">
          <Adminorders></Adminorders>
          <PaginationCode></PaginationCode>
        </Col>
      </Row>
    </Container>
  );
};

export default Adminallproductpagee;
