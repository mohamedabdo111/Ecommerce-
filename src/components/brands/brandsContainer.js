import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Brancard from "./brancard";

const BrandsContainer = ({ image, loading }) => {
  return (
    <Container className="heightpage">
      <h4 className="my-3">اشهر المركات</h4>
      <Row>
        {loading === false ? (
          image ? (
            image.map((item) => {
              return <Brancard image={item.image} name={item.name}></Brancard>;
            })
          ) : (
            <h3>لا يوجد ماركات</h3>
          )
        ) : (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default BrandsContainer;
