import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
const Categorycard = ({ title, backgr, image, id }) => {
  console.log(id);
  return (
    <Col xs="6" sm="6" md="3" lg="2" className="justy my-2">
      <Zoom>
        <div className="parent-cards shadow-lg">
          <div className="cards w-100 h-100 ">
            <Link to={`/products/category/${id}`}>
              <img
                src={image}
                style={{ width: "100%", height: "100%" }}
                className="img-card"
                alt="h"
              ></img>
            </Link>
          </div>
          <h5 className="cat-title">{title}</h5>
        </div>
      </Zoom>
    </Col>
  );
};

export default Categorycard;
