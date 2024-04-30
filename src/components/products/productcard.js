import React, { useEffect, useState } from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../style.css";
import { Link } from "react-router-dom";
import AddToWashListHock from "../../exporthoocks/WishList/Add_To_WashList";
import notify from "../../exporthoocks/notification";
import ProductCardHock from "../../exporthoocks/WishList/product-card-hock";
import Zoom from "react-reveal/Zoom";

const Cards = ({ item, favproduct }) => {
  const [state, AddToWishList, setState, RemoveFromWishList] =
    AddToWashListHock(item);

  const [somefilter] = ProductCardHock(item, setState, favproduct);
  return (
    <>
      {item ? (
        <Col xs="12" sm="6" md="4" lg="3">
          <Zoom>
            <Card className=" my-2 bg-transparent border-0 cardProd hoveproduct">
              <Link to={`/details/${item._id}`}>
                <Card.Img
                  variant="top"
                  style={{ height: "250px", borderRadius: "5%" }}
                  src={`${item.imageCover}`}
                  className="bg-white shadow-sm"
                />
              </Link>
              <Card.Body>
                <Card.Title className="text-start likeProd">
                  {state === true ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="heart"
                      onClick={AddToWishList}
                    />
                  ) : (
                    <i
                      class="fa-solid fa-heart heart"
                      onClick={RemoveFromWishList}
                      style={{ color: "red" }}
                    ></i>
                  )}
                </Card.Title>
                <Card.Text>{item.title}</Card.Text>
                <div className="card-text d-flex justify-content-between">
                  <div className="text-warning">
                    <span className="text-warning">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-warning"
                      ></FontAwesomeIcon>
                    </span>
                    {item.ratingsQuantity}
                  </div>
                  <div>{item.price} جنيه</div>
                </div>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
};

export default Cards;
