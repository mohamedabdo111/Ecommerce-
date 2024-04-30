import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import UserViewAddressHock from "../../exporthoocks/user address/User_View_Address_Hock";
import CreateOrderHock from "../../exporthoocks/CheckOut/create-order-hock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const [items] = UserViewAddressHock();

  const [ShowId, ClickToDone] = CreateOrderHock();
  return (
    <>
      <Row className=" fw-bold fs-4 my-3">اختر طريقه الدفع</Row>
      <Row>
        <Col className="bgrlight p-2 rounded-2 shadow">
          <div className="p-3">
            <input type="radio" label="1" id="one" name="group1"></input>
            <label className="mx-2" for="one">
              الدفع عبر الفيزا
            </label>
          </div>
          <div className="p-3">
            <input type="radio" label="2" name="group1" id="two"></input>
            <label className="mx-2" for="two">
              الدفع عند الاستلام
            </label>
          </div>

          <Form.Select
            aria-label="Default select example"
            className="w-50 mb-2 me-3"
            onChange={ShowId}
          >
            <option value="0">اختر العنوان</option>
            {items && items.length >= 1
              ? items.map((item, index) => {
                  return (
                    <option value={item._id} key={index}>
                      {item.alias}
                    </option>
                  );
                })
              : null}
          </Form.Select>
        </Col>
      </Row>
      <div className="my-3 d-flex justify-content-end">
        <Button className=" bg-white border-secondary mx-2 text-dark">
          20000 جنيه
        </Button>
        <Button
          className=" border-dark bg-dark text-white"
          onClick={ClickToDone}
        >
          اتمام الشراء
        </Button>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Checkout;
