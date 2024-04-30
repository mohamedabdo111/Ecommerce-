import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Btns from "../utility/btns";
import Cards from "./productcard";
import { useDispatch, useSelector } from "react-redux";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { GetAllWishlistAction } from "../../redux/actions/WishlishAction";
import ViewFavoriteProduct from "../../exporthoocks/WishList/view_favorite_product";

const Cardsection = ({ title, btnName, anything, product }) => {
  // console.log(product);
  const [favProd] = ViewFavoriteProduct();
  return (
    <div className="coloring">
      <Container>
        <Btns title={title} btnName={btnName} anything={`${anything}`}></Btns>
        <Row className="justify-content-center p-2">
          {product && product.length > 1
            ? product.map((item, index) => {
                return (
                  <Cards item={item} key={index} favproduct={favProd}></Cards>
                );
              })
            : null}
        </Row>
      </Container>
    </div>
  );
};

export default Cardsection;
