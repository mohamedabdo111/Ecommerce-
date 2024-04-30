import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveAddressAction } from "../../redux/actions/UserAddressAction";
import notify from "../../exporthoocks/notification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDeleteAddressHock from "../../exporthoocks/user address/User_Delete_Address_Hock";

const Useraddresscard = ({ address }) => {
  const [deleteAdd] = UserDeleteAddressHock(address);

  return (
    <Row className=" bg-white p-2 rounded-2 mb-3">
      <Col>
        <div className=" d-flex justify-content-between">
          <p>{address.alias}</p>
          <div className="d-flex gap-3">
            <Link to={`/user/edit-address/${address._id}`}>
              <p className="heart text-dark">
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> تعديل
              </p>
            </Link>
            <p className="heart" onClick={deleteAdd}>
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> حذف
            </p>
          </div>
        </div>

        <div className="mb-3">{address.details}</div>
        <div className="mb-3">
          رقم الهاتف : <span>{address.phone}</span>
        </div>
        <ToastContainer />
      </Col>
    </Row>
  );
};

export default Useraddresscard;
