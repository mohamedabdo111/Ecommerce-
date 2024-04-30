import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Btns = ({ title, btnName, anything }) => {
  return (
    <div className="d-flex justify-content-between p-2 ">
      <div>
        <h3>{title}</h3>
      </div>
      {btnName ? (
        <div>
          <Link to={`${anything}`}>
            <Button className="bg-body-tertiary text-dark btn-categories">
              {btnName}
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Btns;
