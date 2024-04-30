import React from "react";
import { Col, Row } from "react-bootstrap";
import Useritemallorder from "./useritemallorder";
import ViewAllOrdersHock from "../../exporthoocks/CheckOut/view-all-orders-hock";
const UserAllorderscomp = () => {
  const [res, orders] = ViewAllOrdersHock();
  return (
    <Row className="p-2">
      <h4 className="mb-4">اهلا محمد زيدان</h4>
      {orders && orders.length >= 1 ? (
        orders.map((item, index) => {
          return <Useritemallorder key={index} item={item}></Useritemallorder>;
        })
      ) : (
        <h4>لا يوجد طلبات</h4>
      )}
    </Row>
  );
};

export default UserAllorderscomp;
