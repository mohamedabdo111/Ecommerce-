import React from "react";
import Subcategory from "../../../components/category/subcategory";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Productgallery from "../../../components/products/productgallery";
import ProductText from "../../../components/products/ProductText";
import Rateandcomment from "../../../components/Rate/rateandcomment";
import Cardsection from "../../../components/products/cardsection";
import { useParams } from "react-router-dom";
import { Get_Product_Details } from "../../../redux/types";
import ProductDetailsHock from "../../../exporthoocks/Product/get-product-details";
import Fade from "react-reveal/Fade";

const Productdetails = () => {
  const { id } = useParams();
  const [item, onecat, productULike] = ProductDetailsHock(id);
  let arr = [];
  if (productULike) {
    arr = productULike.slice(0, 4);
  }

  if (item) {
    var ratingsAverage = item.ratingsAverage;
  }

  if (item) {
    var ratingQty = item.ratingsQuantity;
  }
  return (
    <>
      {/* <Subcategory></Subcategory> */}
      <Container>
        <Row className="p-3">
          <Col xs="12" md="4">
            <Fade>
              <Productgallery></Productgallery>
            </Fade>
          </Col>
          <Col xs="12" md="8">
            <Fade>
              <ProductText id={id}></ProductText>
            </Fade>
          </Col>
          <Col xs="12">
            <Rateandcomment
              id={id}
              rateingQty={ratingQty}
              ratingsAverage={ratingsAverage}
            ></Rateandcomment>
          </Col>
          <Col className="">
            <Cardsection title={"منتجات قد تعجبك"} product={arr}></Cardsection>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Productdetails;
