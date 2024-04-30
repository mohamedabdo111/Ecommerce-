import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import "../../style.css";
import Categorycard from "./categorycard";

const CategoryContainer = ({ data, loading }) => {
  const color = [
    "#FFD3E8",
    "F4DBAS",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return (
    <Container>
      <Row>
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <>
                  <Categorycard
                    key={index}
                    title={item.name}
                    image={item.image}
                    id={item._id}
                    backgr={color[Math.floor(Math.random() * 5) + 1]}
                  ></Categorycard>
                </>
              );
            })
          ) : (
            <h3>dd</h3>
          )
        ) : (
          <div className="text-center">
            <Spinner animation="grow" />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
