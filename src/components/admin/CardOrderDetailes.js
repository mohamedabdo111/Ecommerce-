import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewSpecificOrder from "../../exporthoocks/CheckOut/view-specific-order";
import Useritemallorder from "../User/useritemallorder";
import { useDispatch, useSelector } from "react-redux";
import { UpdateDeliver, UpdatePay } from "../../redux/actions/checkoutAction";
import notify from "../../exporthoocks/notification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardOrderDetailes = () => {
  const { id } = useParams();

  const [orders, response] = ViewSpecificOrder(id);

  const [pay, setPay] = useState("0");
  const [deliver, setDeliver] = useState("0");
  const [loading, setLoading] = useState(true);
  const [loadingDeliver, setLoadingDeliver] = useState(true);
  const dispatch = useDispatch();
  const ChangePay = (e) => {
    setPay(e.target.value);
  };
  const ChangeDeliver = (e) => {
    setDeliver(e.target.value);
  };

  const savePay = async () => {
    if (pay === "true") {
      setLoading(true);
      await dispatch(UpdatePay(id));
      setLoading(false);
    } else if (pay === "0") {
      notify("اختر حاله الدفع", "warn");
    }
  };
  const saveDeliver = async () => {
    if (deliver === "true") {
      setLoadingDeliver(true);
      await dispatch(UpdateDeliver(id));
      setLoadingDeliver(false);
    } else if (deliver === "0") {
      notify("اختر حاله التوصيل", "warn");
    }
  };

  const res = useSelector((item) => item.checkOut.updatepay);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم تعديل حاله الدفع", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  }, [loading]);

  const resDeliver = useSelector((item) => item.checkOut.deliver);
  console.log(resDeliver);
  useEffect(() => {
    if (loadingDeliver === false) {
      if (resDeliver && resDeliver.status === 200) {
        notify("تم تعديل حاله التوصيل", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  }, [loadingDeliver]);

  // console.log(orders);
  return (
    <div>
      {/* <h4> تفاصيل الطلب رقم # 55</h4> */}
      {/* <Cartitem colorone={"red"}></Cartitem> */}
      {/* <Cartitem item={orders.cartItems}></Cartitem> */}
      <Useritemallorder item={response}></Useritemallorder>
      <Row className="detales">
        <Col xs="12">
          <h4 className=" fw-bold">تفاصيل العميل</h4>
        </Col>

        <Col xs="12">
          <p>
            الاسم: <span>{response.user ? response.user.name : ""}</span>
          </p>
        </Col>
        <Col xs="12">
          <p>
            رقم الهاتف: <span>{response.user ? response.user.phone : ""}</span>
          </p>
        </Col>
        <Col xs="12">
          <p>
            الايميل: <span>{response.user ? response.user.email : ""}</span>
          </p>
        </Col>
        <Col xs="12">
          <Button className="bg-white w-100 text-dark border-secondary">
            المجموع <span>{response.totalOrderPrice}</span>
          </Button>
        </Col>

        <Col xs="6" className=" d-flex justify-content-center p-3">
          <Form.Select aria-label="Default select example" onChange={ChangePay}>
            <option> حاله الدفع</option>
            <option value="true">تم</option>
            <option value="fasle">لم يتم</option>
          </Form.Select>
          <Button
            className="bg-dark text-white mx-3 border-0 "
            onClick={savePay}
          >
            حفظ
          </Button>
        </Col>
        <Col xs="6" className=" d-flex justify-content-center p-3">
          <Form.Select
            aria-label="Default select example"
            onChange={ChangeDeliver}
          >
            <option value="0">حاله التوصيل</option>
            <option value="true">تم</option>
            <option value="false">لم يتم</option>
          </Form.Select>
          <Button
            className="bg-dark text-white mx-3 border-0 "
            onClick={saveDeliver}
          >
            حفظ
          </Button>
        </Col>
      </Row>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CardOrderDetailes;
