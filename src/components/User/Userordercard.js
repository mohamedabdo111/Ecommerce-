import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../../images/iphone1.png";

export const Userordercard = ({ conponent }) => {
  // console.log(conponent);
  return (
    <div className="d-flex text-secondary mb-3">
      <img
        src={`http://127.0.0.1:8000/products/${conponent.product.imageCover}`}
        style={{ width: "20%", height: "fit-content" }}
        className="ms-4"
      ></img>
      <div>
        <p className="mt-2 fw-normal">{conponent.product.title}</p>
        <span className="text-warning mx-1">
          {conponent.product.ratingsAverage}
        </span>
        <span>({conponent.product.ratingsQuantity} تقييم)</span>

        <p className="mt-2">
          الكميه{" "}
          <input
            type="number"
            className="col-sm-8 col-md-1 text-center w-25"
            value={conponent.count}
          ></input>
        </p>
      </div>
    </div>
  );
};
