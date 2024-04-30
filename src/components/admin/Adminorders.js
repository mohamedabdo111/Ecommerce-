import React from "react";
import { Row } from "react-bootstrap";
import AdminOrderCard from "./Adminordercard";
import ViewAllOrdersHock from "../../exporthoocks/CheckOut/view-all-orders-hock";

const Adminorders = () => {
  const [res, orders] = ViewAllOrdersHock();

  return (
    <div>
      <h4>اداره الطلبات</h4>
      <Row>
        {orders && orders.length >= 1 ? (
          orders.map((item, index) => {
            return <AdminOrderCard key={index} item={item}></AdminOrderCard>;
          })
        ) : (
          <h4>لا يوجد طلبات</h4>
        )}
      </Row>
    </div>
  );
};

export default Adminorders;
