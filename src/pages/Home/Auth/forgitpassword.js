import React from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import "../../../style.css";
import { Link } from "react-router-dom";
import loginHock from "../../../exporthoocks/auth/loginHock";
import AuthSignUp from "../../../exporthoocks/auth/signupHock";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgitpasswordHock from "../../../exporthoocks/auth/forgitpasswordHock";

const Forgitpassword = () => {
  const [email, onChageEmail, onClickBtn] = ForgitpasswordHock();
  return (
    <div className="Forms heightpage">
      <Form style={{ maxWidth: "400px" }} className="text-center m-auto">
        <h3 className="loginFont">نسيت كلمه السر</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="الايميل..."
            className="text-center"
            onChange={onChageEmail}
            value={email}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100 bg-dark border-0"
          onClick={onClickBtn}
        >
          ارسال الكود
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Forgitpassword;
