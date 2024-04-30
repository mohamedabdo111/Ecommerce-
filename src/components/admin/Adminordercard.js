import React from "react";
import one from "../../images/iphone1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const AdminOrderCard = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/admin/order/${item._id}`}>
      <div className="d-flex align-items-center stylest my-2 heart">
        {/* <img src={one} style={{ width: "25%", height: "fit-content" }} /> */}
        <div className="w-100">
          <div>
            <div className="d-flex justify-content-between">
              <p className=" fw-bold text-secondary">
                رقم الطلب : {item ? item.id : null}
              </p>
            </div>
            <p className=" text-secondary">
              {" "}
              طلب من : {item && item.user ? item.user.name : null}
            </p>
          </div>
          <div>
            <p className=" fw-bold text-secondary">
              {item && item.user ? item.user.email : null}
            </p>
          </div>
          {/* <div className="d-flex justify-content-between align-items-center">
            <div className=" text-secondary">
              الكميه <input type="number" style={{ width: "50px" }}></input>
            </div>
          </div> */}
          <Row>
            <Col sm="12">
              <div className="d-flex justify-content-between">
                <p className="fw-bold mt-2 mb-0 text-dark">
                  التوصيل :{" "}
                  <span className=" text-secondary">
                    {item.isDelivered === false ? "لم يتم" : "تم"}
                  </span>
                </p>
                <p className="fw-bold mt-2 mb-0 text-dark">
                  الدفع :{" "}
                  <span className=" text-secondary">
                    {item.isPaid === false ? "لم يتم" : "تم"}
                  </span>
                </p>
                <p className="fw-bold mt-2 mb-0 text-dark">
                  طريقه الدفع :{" "}
                  <span className=" text-secondary">
                    {item.paymentMethodType === "cash" ? "كاش" : "فيزا"}
                  </span>
                </p>
                <p className="fw-bold mt-2 mb-0 text-dark">
                  {item.totalOrderPrice} جنيه
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Link>
  );
};

export default AdminOrderCard;
