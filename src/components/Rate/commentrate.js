import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import Deleterate from "../../exporthoocks/rewies/Delete_rate";
import ReactStars from "react-rating-stars-component";
import EditRate from "../../exporthoocks/rewies/Edit_rate";
import Fade from "react-reveal/Fade";

const Commentrate = ({ Allcomments }) => {
  const userlocal = JSON.parse(localStorage.getItem("user"));

  const [handleShow, showDelete, handleClose, handleDelete] =
    Deleterate(Allcomments);

  const [
    handleShowEdit,
    setShowEdit,
    handleCloseEdit,
    handleEdit,
    stars,
    setStars,
    ratingChanged,
    showEdit,
    text,
    ChangeText,
  ] = EditRate(Allcomments);
  console.log(stars);
  console.log(text);
  return (
    <div className="person-comment">
      <Fade>
        <p className=" d-inline mx-2">{Allcomments.user.name}</p>
        <span>
          <FontAwesomeIcon
            icon={faStar}
            className="text-warning"
          ></FontAwesomeIcon>
          <span>{Allcomments.rating}</span>
        </span>
        <div className=" d-flex justify-content-between align-items-center">
          <p className=" text-secondary mb-0">{Allcomments.review}</p>

          {userlocal ? (
            Allcomments.user._id === userlocal._id ? (
              <div>
                <span className="ms-3 heart" onClick={handleShowEdit}>
                  <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                </span>

                <span className="heart" onClick={handleShow}>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </span>
              </div>
            ) : null
          ) : null}
        </div>
      </Fade>

      <div>
        <Modal show={showDelete} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>حذف التعليق</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل انت متاكد من حذف التعليق</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              لا
            </Button>
            <Button className=" bg-danger border-0" onClick={handleDelete}>
              حذف
            </Button>
          </Modal.Footer>
        </Modal>
        {/* //////////////////////////////////////////////////// */}
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>تعديل التعليق</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReactStars
              className="d-inline"
              count={5}
              onChange={ratingChanged}
              size={20}
              activeColor="#ffd700"
              color={"#979797"}
              value={stars}
            />
          </Modal.Body>
          <Modal.Body>
            <input type="text" value={text} onChange={ChangeText} />{" "}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              رجوع
            </Button>
            <Button className=" bg-danger border-0" onClick={handleEdit}>
              تعديل
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Commentrate;
