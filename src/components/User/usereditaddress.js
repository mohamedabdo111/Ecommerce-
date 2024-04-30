import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UpdateAddressHock from "../../exporthoocks/user address/User_Update_Address_Hock";

const UserEditAddress = () => {
  const { id } = useParams();
  // console.log(id);
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
  ] = UpdateAddressHock(id);
  return (
    <div>
      <h4 className="mb-4">تعديل العنوان </h4>

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
              حفط تعديل العنوان
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserEditAddress;
