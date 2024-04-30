import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Commentrate from "./commentrate";
import PaginationCode from "../utility/pagination";
import ReactStars from "react-rating-stars-component";
import ProductRewiesHock from "../../exporthoocks/rewies/product_rewies_Hock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetProductReviews from "../../exporthoocks/rewies/Get_Product_Reviews";
import { Spinner } from "react-bootstrap";

const Rateandcomment = ({ rateingQty, ratingsAverage }) => {
  const [
    rateText,
    rateNumber,
    ChangeInputRate,
    ChangeStarsRate,
    user,
    onsubmit,
  ] = ProductRewiesHock();
  let name = "";
  if (user) {
    name = user.name;
  }
  const ratingChanged = (e) => {
    ChangeStarsRate(e);
  };

  const [onpress, comments, loading] = GetProductReviews();
  let commentspage = "";
  if (comments) {
    commentspage = comments;
  }

  return (
    <div className="comment">
      <h5 className=" fw-bold d-inline">التقيمات</h5>
      <span>
        <FontAwesomeIcon
          icon={faStar}
          className="text-warning"
        ></FontAwesomeIcon>
        <span>{ratingsAverage ? ratingsAverage : null}</span>
      </span>
      <span className=" d-inline mx-2">({` ${rateingQty}تقييم`})</span>

      <Container className="p-3">
        <div className=" d-flex gap-2">
          <p className=" d-inline">{name ? name : null}</p>
          <ReactStars
            className="d-inline"
            count={5}
            onChange={ratingChanged}
            size={20}
            activeColor="#ffd700"
            color={"#979797"}
          />
        </div>
        <Form style={{ textAlign: "end" }}>
          <Form.Group
            className="mb-3 "
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              rows={3}
              value={rateText}
              onChange={ChangeInputRate}
            />
            <Button
              className=" bg-dark text-light border-0 m-2 "
              onClick={onsubmit}
            >
              اضف التعليق
            </Button>
          </Form.Group>
        </Form>
        {/* <input type=""></input> */}
        {loading ? (
          <Spinner animation="border" />
        ) : commentspage.data ? (
          commentspage.data.map((item, index) => {
            return (
              <Commentrate
                Allcomments={item}
                key={index}
                ratingsAverage={item.ratingsAverage}
              ></Commentrate>
            );
          })
        ) : null}

        {comments.paginationResult &&
        commentspage.paginationResult.numberOfPages >= 2 ? (
          <PaginationCode
            onpress={onpress}
            pageCount={
              comments.paginationResult
                ? commentspage.paginationResult.numberOfPages
                : 0
            }
            // commentspage.paginationResult.numberOfPages
          ></PaginationCode>
        ) : null}
      </Container>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Rateandcomment;
