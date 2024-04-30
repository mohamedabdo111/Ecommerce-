import React from "react";
import { Row } from "react-bootstrap";
import Cards from "../products/productcard";

const Product = () => {
  return (
    <Row className="justify-content-center p-2">
      <Cards></Cards>
    </Row>
  );
};

export default Product;
