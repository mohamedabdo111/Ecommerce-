import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UpdateCouponHock from "../../exporthoocks/copunes/Update-Coupon-Hock";

const AdminViewCard = ({ coupon }) => {
  const dateRef = useRef();
  function getFormattedDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Note: January is 0
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  const dateString = coupon.expire;
  const formattedDate = getFormattedDate(dateString);

  let ids = coupon._id;
  const [
    show,
    handleClose,
    handleShow,
    handleUpdate,
    name,
    expire,
    discount,
    ChangeName,
    ChangeExpire,
    ChangeDiscount,
    showDelete,
    setShowDelete,
    handleCloseDelete,
    handleShowDelete,
    handleDelete,
  ] = UpdateCouponHock(ids);
  return (
    <Row className=" bg-white p-2 rounded-2 mb-5">
      <Col>
        <div className=" d-flex justify-content-between">
          <p className=" text-dark">اسم الكوبون : {coupon.name} </p>
          <div className="d-flex gap-3">
            <p className="heart text-dark" onClick={handleShow}>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> تعديل
            </p>

            <p className="heart text-dark" onClick={handleShowDelete}>
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> حذف
            </p>
          </div>
        </div>

        <div className="mb-3 text-end">تاريخ الانتهاء {formattedDate}</div>
        <div className="mb-3 text-end">
          نسبه الخصم : <span> {coupon.discount}%</span>
        </div>

        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>تعديل الكوبون</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                className=" input-group-text w-100 mt-1"
                placeholder="اسم الكوبون"
                onChange={ChangeName}
                value={name}
              ></input>
            </Modal.Body>
            <Modal.Body>
              <input
                type="text"
                className=" input-group-text w-100 mt-1"
                placeholder="تاريخ الانتهاء"
                // onChange={ChangeName}
                // value={nameCoupon}
                ref={dateRef}
                onFocus={() => (dateRef.current.type = "date")}
                onBlur={() => (dateRef.current.type = "text")}
                onChange={ChangeExpire}
                value={expire}
              ></input>
            </Modal.Body>
            <Modal.Body>
              <input
                type="text"
                className=" input-group-text w-100 mt-1"
                placeholder="نسبه خصم الكوبون"
                onChange={ChangeDiscount}
                value={discount}
              ></input>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                الغاء
              </Button>
              <Button variant="success" onClick={handleUpdate}>
                تاكيد التعديل
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div>
          <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title>حذف الكوبون</Modal.Title>
            </Modal.Header>
            <Modal.Body>هل انت متأكد من حذف المنتج</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDelete}>
                رجوع
              </Button>
              <Button
                variant="primary"
                onClick={handleDelete}
                className=" bg-danger border-0"
              >
                حذف
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Col>
    </Row>
  );
};

export default AdminViewCard;
