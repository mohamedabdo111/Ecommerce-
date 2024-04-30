import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../../../components/admin/adminsidebar";
import Adminallproduct from "../../../components/admin/Adminallproduct";
import PaginationCode from "../../../components/utility/pagination";
import ViewAllProductAdimnHock from "../../../exporthoocks/admin/view-allproduct-hock";
import { useDispatch } from "react-redux";
import { GetNumberOfPage } from "../../../redux/actions/ProductAction";
const Adminallproductpage = () => {
  const [items, PageCount, onpress] = ViewAllProductAdimnHock();
  console.log(items);

  if (PageCount) {
    var nums = PageCount.numberOfPages;
  } else {
    nums = 0;
  }
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="2">
          <AdminSidebar></AdminSidebar>
        </Col>
        <Col xs="8" sm="8" md="10">
          <Adminallproduct product={items}></Adminallproduct>
          {nums > 1 ? (
            <PaginationCode pageCount={nums} onpress={onpress}></PaginationCode>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Adminallproductpage;
