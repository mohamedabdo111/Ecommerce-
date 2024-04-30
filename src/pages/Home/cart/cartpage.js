import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cartitem from "../../../components/Carts/cartitem";
import Cartcheck from "../../../components/Carts/cartcheck";
import GetAllCartHock from "../../../exporthoocks/card/get-all-cart-hock";

const Cartpage = () => {
  const [res, cartItems, totalPrice] = GetAllCartHock();
  console.log(res);
  return (
    <Container className="p-3" style={{ minHeight: "70vh" }}>
      <Row className=" fw-bold fs-4">عربه التسوق</Row>
      <Row>
        <Col xs="12" md="9">
          {cartItems.length >= 1 ? (
            cartItems.map((item, index) => {
              return (
                <Cartitem colorone={"red"} key={index} item={item}></Cartitem>
              );
            })
          ) : (
            <h3 className=" text-center">لا يوجد منتجات في العربه</h3>
          )}
        </Col>
        <Col xs="12" md="3">
          <Cartcheck totalPrice={totalPrice}></Cartcheck>
        </Col>
      </Row>
    </Container>
  );
};
export default Cartpage;
