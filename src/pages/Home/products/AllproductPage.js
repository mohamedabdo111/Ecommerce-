import React from "react";
import Subcategory from "../../../components/category/subcategory";
import "../../../style.css";
import Searchdroplist from "../../../components/utility/searchdroplist";
import Sidebar from "../../../components/utility/sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Cardsection from "../../../components/products/cardsection";
import PaginationCode from "../../../components/utility/pagination";
import GetAllProducHock from "../../../exporthoocks/Product/get-all-product-hock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllproductPage = () => {
  const [item, pageCount, onpress, getProduct] = GetAllProducHock();

  if (pageCount) {
    var numbers = pageCount;
  } else {
    numbers = 0;
  }

  return (
    <div>
      <Subcategory></Subcategory>
      <Searchdroplist
        title={`${item.length} منتج متاح ...`}
        onclickDisptach={getProduct}
      ></Searchdroplist>
      <Container>
        <Row>
          <Col xs="3" sm="2" md="2" lg="2">
            <Sidebar></Sidebar>
          </Col>
          <Col xs="9" sm="10" md="10" lg="10">
            <Cardsection product={item}></Cardsection>
          </Col>
        </Row>
      </Container>
      {numbers > 1 ? (
        <PaginationCode pageCount={numbers} onpress={onpress}></PaginationCode>
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AllproductPage;
