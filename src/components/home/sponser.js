import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import labtop from "../../images/laptop.png";
const Sponser = () => {
  return (
    <div className="coloring">
      <Container>
        <Row className="grad text-light rounded-2 d-flex align-items-center text-center p-2">
          <Col sm="6">
            <div>خصم يصل إلى %50 ادفع ببطاقة الائتمان واستمتع بخصم إضافي</div>
          </Col>

          <Col sm="6">
            <div>
              <img src={labtop} alt="discount" style={{ width: "100px" }}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sponser;
