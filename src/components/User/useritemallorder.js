import React from "react";

import { Userordercard } from "./Userordercard";
import { Col, Row } from "react-bootstrap";

const Useritemallorder = ({ item }) => {
  // console.log(item);
  return (
    <div className="bg-white shadow rounded-2 mb-4 p-2">
      <Row xs="12">
        <Col>
          <p className="fw-bold">رقم الطلب # {item.id}</p>
        </Col>
      </Row>
      <Row>
        {item && item.cartItems
          ? item.cartItems.map((i, index) => {
              return <Userordercard conponent={i} key={index}></Userordercard>;
            })
          : null}
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-between">
            <p className="fw-bold mt-2 mb-0">
              التوصيل :{" "}
              <span className=" text-secondary">
                {item.isDelivered === false ? "لم يتم" : "تم"}
              </span>
            </p>
            <p className="fw-bold mt-2 mb-0">
              الدفع :{" "}
              <span className=" text-secondary">
                {item.isPaid === false ? "لم يتم" : "تم"}
              </span>
            </p>
            <p className="fw-bold mt-2 mb-0">
              طريقه الدفع :{" "}
              <span className=" text-secondary">
                {item.paymentMethodType === "cash" ? "كاش" : "فيزا"}
              </span>
            </p>
            <p className="fw-bold mt-2 mb-0">{item.totalOrderPrice} جنيه</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Useritemallorder;
