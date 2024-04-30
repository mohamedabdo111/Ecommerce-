import React from "react";
import Btns from "../utility/btns";
import { Container, Row, Spinner } from "react-bootstrap";
import Brancard from "./brancard";

import HomeBrandHock from "../../exporthoocks/Brand/Home-Brand-hock";

const ParentCards = () => {
  const [loading, brandInHomePage] = HomeBrandHock();
  console.log(brandInHomePage);
  console.log(loading);
  return (
    <div className="coloring">
      <Container>
        <Btns
          title={"اشهر المركات"}
          btnName={"المزيد"}
          anything={"/popularbrands"}
        ></Btns>
        <Row>
          {loading === false ? (
            brandInHomePage ? (
              brandInHomePage.slice(0, 8).map((i, index) => {
                return (
                  <Brancard
                    image={i.image}
                    key={index}
                    name={i.name}
                  ></Brancard>
                );
              })
            ) : (
              <h3>لا يوجد ماركات</h3>
            )
          ) : (
            <Spinner animation="border" />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ParentCards;
