import React from "react";
import { Col } from "react-bootstrap";
import { GetCategoryActionPage } from "../../redux/actions/CategoryAction";
import Zoom from "react-reveal/Zoom";

const Brancard = ({ image, name }) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="parent-brand mb-2">
      <Zoom>
        <div className="parent-card">
          <div className="card m-2 card-sec p-2 d-flex flex-row-reverse justify-content-between align-items-center border-0 shadow-sm">
            <img
              src={image}
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
              className="img-card"
            ></img>
            <div className="text-center">
              <h5>{name}</h5>
              <p>Delivery with in 24 hours</p>
            </div>
          </div>
        </div>
      </Zoom>
    </Col>
  );
};

export default Brancard;
