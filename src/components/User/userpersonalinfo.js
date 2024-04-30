import { faL, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangePasswordAction,
  UserEditInfo,
} from "../../redux/actions/UserAddressAction";
import notify from "../../exporthoocks/notification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Userpersonalinfo = () => {
  const navigate = useNavigate();
  let user = [];

  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ChangeName = (e) => {
    setName(e.target.value);
  };
  const ChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleEditInfo = async () => {
    setLoading(true);
    await dispatch(
      UserEditInfo({
        name,
        phone,
        email,
      })
    );
    handleClose();
    setLoading(false);
  };

  const res = useSelector((item) => item.userAdd.useredit);
  console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200 && res.data.data) {
        notify("تم التحديث بنجاح", "success");
        localStorage.setItem("user", JSON.stringify(res.data.data.user));

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        notify("هناك مشكله", "error");
      }
    }
  }, [loading]);

  // password section
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);

  const ChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };
  const ChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const ChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const ClickToChangePassword = async () => {
    if (password === "" || passwordConfirm === "" || currentPassword === "") {
      notify("تأكد من ملئ كلمات السر", "error");
      return;
    } else if (passwordConfirm != password) {
      notify("كلمه السر غير متطابقه", "error");
      return;
    }
    setLoadingPass(true);
    await dispatch(
      ChangePasswordAction({
        currentPassword,
        password,
        passwordConfirm,
      })
    );
    setLoadingPass(false);
  };

  const resPassword = useSelector((item) => item.userAdd.editpass);

  console.log(resPassword);
  useEffect(() => {
    if (loadingPass === false) {
      if (resPassword && resPassword.status === 200) {
        notify("تم تحديث كلمه السر بنجاح", "success");
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    }
  }, [loadingPass]);

  return (
    <div className="p-2">
      <h4 className="mb-4 ">االملف الشخصي</h4>

      <div className=" p-3 bg-white rounded-2 shadow">
        <div className=" d-flex justify-content-between">
          <p>
            الاسم : <span>{user.name}</span>
          </p>
          <p className="heart text-dark" onClick={handleShow}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> تعديل
          </p>
        </div>

        <p>
          رقم الهاتف : <span>{user.phone}</span>
        </p>
        <p>
          الايميل : <span>{user.email}</span>
        </p>
      </div>

      <Row className="mt-5 ">
        <Col xs="12" md="7">
          <input
            type="password"
            className=" form-control mb-3"
            placeholder="ادخل كلمه السر القديمه"
            value={currentPassword}
            onChange={ChangeCurrentPassword}
          ></input>
          <input
            type="password"
            className=" form-control mb-3"
            placeholder="ادخل كلمه السر الجديده"
            value={password}
            onChange={ChangePassword}
          ></input>
          <input
            type="password"
            className=" form-control mb-3"
            placeholder="تأكيد كلمه السر الجديده"
            value={passwordConfirm}
            onChange={ChangePasswordConfirm}
          ></input>

          <div className="text-start">
            <Button
              className=" bg-dark border-0"
              onClick={ClickToChangePassword}
            >
              حفط كلمه السر
            </Button>
          </div>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>تعديل البيانات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className=" form-control mb-3"
            placeholder="الاسم"
            value={name}
            onChange={ChangeName}
          ></input>
        </Modal.Body>
        <Modal.Body>
          <input
            type="phone"
            className=" form-control mb-3"
            placeholder="رقم التليفون"
            value={phone}
            onChange={ChangePhone}
          ></input>
        </Modal.Body>
        <Modal.Body>
          <input
            type="text"
            className=" form-control mb-3"
            placeholder="الايميل"
            value={email}
            onChange={ChangeEmail}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            الغاء
          </Button>
          <Button variant="success" onClick={handleEditInfo}>
            حفط التعديلات
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Userpersonalinfo;
