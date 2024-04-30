import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Checkout from "../../../components/payment/checkout";

const Paymentconf = () => {
  return (
    <Container className=" my-5">
      <Checkout></Checkout>
    </Container>
  );
};

export default Paymentconf;
