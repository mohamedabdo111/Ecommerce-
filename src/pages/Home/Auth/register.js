import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../style.css";
import AuthSignUp from "../../../exporthoocks/auth/signupHock";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [
    name,
    email,
    password,
    confirmPass,
    phone,
    onchangename,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPass,
    onChangePhone,
    clickFunction,
  ] = AuthSignUp();

  return (
    <div className="Forms heightpage">
      <Form style={{ maxWidth: "400px" }} className="text-center m-auto">
        <h3 className="loginFont">تسجيل حساب جديد</h3>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            type="text"
            placeholder="اسم المستخدم"
            className="text-center"
            value={name}
            onChange={onchangename}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="text"
            placeholder="الايميل..."
            className="text-center"
            value={email}
            onChange={onChangeEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="كلمه السر ..."
            className="text-center"
            value={password}
            onChange={onChangePassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Control
            type="password"
            placeholder=" تاكيد كلمه السر ..."
            className="text-center"
            value={confirmPass}
            onChange={onChangeConfirmPass}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Control
            type="phone"
            placeholder="ادخل رقم الهاتف"
            className="text-center"
            value={phone}
            onChange={onChangePhone}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="w-100 bg-dark border-0"
          onClick={clickFunction}
        >
          تسجيل الدخول
        </Button>
        <div className="click-here">
          <Form.Text>
            لديك حساب بالفعل؟
            <Link to="/login" className="text-danger text-decoration-underline">
              <span>اضغط هنا</span>
            </Link>
          </Form.Text>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Register;
