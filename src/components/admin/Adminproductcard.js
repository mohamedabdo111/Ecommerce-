import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteProductAction } from "../../redux/actions/ProductAction";
import notify from "../../exporthoocks/notification";
const Adminproductcard = ({ product }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
  };

  const ondelete = async (e) => {
    setShow(false);
    await dispatch(DeleteProductAction(product._id));
    console.log(localStorage.getItem("token"));
    window.location.reload();
    notify("تم الحذف", "success");
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className=" m-0">
          <Modal.Title className=" d-flex justify-content-between m-0 ">
            <div> تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متاكد من حذف هذا العنصر؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            رجوع
          </Button>
          <Button
            variant="primary"
            className=" bg-danger border-0"
            onClick={ondelete}
          >
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Col xs="12" sm="12" md="4" lg="4">
        <Card className=" my-2">
          <div className="d-flex p-2 justify-content-between ">
            <p className=" text-danger heart" onClick={handleShow}>
              <FontAwesomeIcon icon={faTrashCan} /> ازاله
            </p>
            <Link to={`/admin/edit-product/${product._id}`}>
              <p className="heart text-dark">تعديل</p>
            </Link>
          </div>
          <Link to={`/details/${product._id}`} style={{ textAlign: "center" }}>
            <Card.Img
              variant="top"
              style={{ width: "fit-content" }}
              src={product.imageCover}
            />
          </Link>
          <Card.Body>
            <Card.Title className="text-start">
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </Card.Title>
            <Card.Text className=" fw-bold">{product.title}</Card.Text>
            <div className="card-text d-flex justify-content-between">
              <div className="text-warning">
                <span className="text-warning">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning"
                  ></FontAwesomeIcon>
                </span>
                {product.ratingsQuantity}
              </div>
              <div>{product.price} جنيه</div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Adminproductcard;
