import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../../../components/admin/adminsidebar";
import AddMoreCategory from "../../../components/admin/adminaddcategory";
const AdminAddCategory = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="2">
          <AdminSidebar></AdminSidebar>
        </Col>
        <Col xs="7" sm="7" md="10">
          <AddMoreCategory></AddMoreCategory>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddCategory;
