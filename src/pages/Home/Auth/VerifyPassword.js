import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../../style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyPasswordHock from "../../../exporthoocks/auth/VerifyPasswordHock";

const VerifyPassword = () => {
  const [number, changeinput, OnClick] = VerifyPasswordHock();
  return (
    <div className="Forms heightpage">
      <Form style={{ maxWidth: "400px" }} className="text-center m-auto">
        <h3 className="loginFont">ادخل الكود المرسل علي الايميل</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="الكود المرسل"
            className="text-center"
            onChange={changeinput}
            value={number}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100 bg-dark border-0"
          onClick={OnClick}
        >
          تاكيد
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default VerifyPassword;
