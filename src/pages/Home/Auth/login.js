import React, { useContext, useEffect } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import "../../../style.css";
import { Link, useNavigate } from "react-router-dom";
import loginHock from "../../../exporthoocks/auth/loginHock";
import AuthSignUp from "../../../exporthoocks/auth/signupHock";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorContext, Users } from "./Context";

const Login = () => {
  const [
    email,
    password,
    loading,
    Ispress,
    onchangename,
    onchangepassword,
    onClick,
  ] = loginHock();

  return (
    <div className="Forms heightpage ">
      <Form style={{ maxWidth: "400px" }} className="text-center m-auto">
        <h3 className="loginFont">تسجيل الدخول</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="الايميل..."
            className="text-center"
            onChange={onchangename}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="كلمه السر ..."
            className="text-center"
            onChange={onchangepassword}
            value={password}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100 bg-dark border-0"
          onClick={onClick}
        >
          تسجيل الدخول
        </Button>
        <div className="click-here">
          <Form.Text>
            ليس لديك حساب؟
            <Link
              to="/register"
              className="text-danger text-decoration-underline"
            >
              <span>اضغط هنا</span>
            </Link>
          </Form.Text>
        </div>
        <div>
          <Form.Text>
            <Link
              to="/user/forgitpassword"
              className="text-decoration-none text-primary"
            >
              هل نسيت كلمه السر
            </Link>
          </Form.Text>
        </div>
      </Form>

      <div>
        <img src=""></img>
      </div>

      <Container>
        {Ispress ? (
          loading ? (
            <div className="spin">
              <Spinner animation="border" />
            </div>
          ) : null
        ) : null}
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Login;
