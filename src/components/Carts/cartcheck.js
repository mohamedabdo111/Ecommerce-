import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ClearAllCartHock from "../../exporthoocks/card/clear-all-cart-hock";
import GetAllCartHock from "../../exporthoocks/card/get-all-cart-hock";
import notify from "../../exporthoocks/notification";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cartcheck = () => {
  const [ClickToClearAll] = ClearAllCartHock();
  const navigate = useNavigate();
  const [
    res,
    cartItems,
    totalPrice,
    couponName,
    ChangeCouponName,
    ClickCoupon,
  ] = GetAllCartHock();

  // console.log(cartItems);
  const handelDone = () => {
    if (cartItems.length > 0) {
      navigate("/order/paymentmethod");
    }
  };
  return (
    <div className="my-2 stylest">
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          className="p-2 rounded-0 text-center"
          placeholder="كود الخصم"
          value={couponName}
          onChange={ChangeCouponName}
        />
        <Button className=" rounded-0 bg-dark border-0" onClick={ClickCoupon}>
          تطبيق
        </Button>
      </InputGroup>

      <div className="btn bg-light w-100 text-dark border-dark sallary">
        {totalPrice}
      </div>

      <Button
        className=" bg-dark w-100 text-light border-dark my-2"
        onClick={handelDone}
      >
        اتمام الشراء
      </Button>
      <Button
        className=" bg-danger w-100  border-0 my-2"
        onClick={ClickToClearAll}
      >
        مسح كل المنتجات
      </Button>
    </div>
  );
};

export default Cartcheck;
