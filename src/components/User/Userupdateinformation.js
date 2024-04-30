import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import UserAddAddressHock from "../../exporthoocks/user address/User_Add_Address_Hock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Userupdateinformation = () => {
  const [
    alias,
    details,
    phone,
    city,
    ChangeAlias,
    ChangeDetails,
    ChangePhone,
    ChangeCity,
    ClickToSave,
  ] = UserAddAddressHock();
  console.log(phone);
  return (
    <div>
      <h4 className="mb-4">اضافه عنوان جديد</h4>

      <Row>
        <Col xs="12" md="7">
          <input
            type="text"
            className=" form-control mb-3"
            placeholder="تسميه العنوان مثلا (المنزل - العمل )"
            value={alias}
            onChange={ChangeAlias}
          ></input>

          <textarea
            className=" form-control mb-3"
            placeholder="العنوان بالتفصيل"
            value={details}
            onChange={ChangeDetails}
          ></textarea>

          <input
            type="number"
            className=" form-control mb-3"
            placeholder="رقم الهاتف"
            value={phone}
            onChange={ChangePhone}
          ></input>
          <input
            type="text"
            className=" form-control mb-3"
            placeholder="المدينه"
            value={city}
            onChange={ChangeCity}
          ></input>
          <div className="text-start">
            <Button className=" bg-dark border-0" onClick={ClickToSave}>
              اضف عنوان
            </Button>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default Userupdateinformation;
