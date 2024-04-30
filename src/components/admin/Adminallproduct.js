import React from "react";
import Adminproductcard from "./Adminproductcard";
import { Row } from "react-bootstrap";

const Adminallproduct = ({ product }) => {
  return (
    <div>
      <h4>اداره المنتجات</h4>
      <Row>
        {product ? (
          product.map((item) => (
            <Adminproductcard product={item}></Adminproductcard>
          ))
        ) : (
          <h4>لا يوجد منتجات</h4>
        )}
      </Row>
    </div>
  );
};

export default Adminallproduct;
