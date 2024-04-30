import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../style.css";
import DisplayCategoryHock from "../../exporthoocks/Category/display-category-hock";
const Subcategory = () => {
  const [loading, pageCount, select] = DisplayCategoryHock();
  // console.log(select.data);
  return (
    <div className="subnavbar">
      <Container>
        <Row className="">
          <Col className="d-flex p-2">
            {select && select.data
              ? select.data.slice(0, 6).map((item, index) => {
                  return (
                    <>
                      <div className="subnavbar-value" key={index}>
                        {item.name}
                      </div>
                    </>
                  );
                })
              : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subcategory;
