import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../../style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetpasswordHock from "../../../exporthoocks/auth/ResetpasswordHock";

const ResetPassword = () => {
  const [
    number,
    Confirmnumber,
    changepassword,
    changeconfirmpassword,
    OnClick,
  ] = ResetpasswordHock();

  return (
    <div className="Forms heightpage">
      <Form style={{ maxWidth: "400px" }} className="text-center m-auto">
        <h3 className="loginFont"> كلمه سر جديدة</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="password"
            placeholder="ادخل كلمه السر الجديدة"
            className="text-center"
            onChange={changepassword}
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

export default ResetPassword;
