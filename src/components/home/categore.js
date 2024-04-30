import React, { useEffect } from "react";
import Btns from "../utility/btns";
import { Container, Row, Spinner } from "react-bootstrap";
import Categorycard from "../category/categorycard";
import img1 from "../../images/img1.png";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoryAction } from "../../redux/actions/CategoryAction";
import Zoom from "react-reveal/Zoom";
const Categore = () => {
  const select = useSelector((item) => item.Category.data);
  const loading = useSelector((item) => item.Category.loading);
  const dispath = useDispatch();
  // console.log(loading);
  // console.log(loading);
  useEffect(() => {
    dispath(GetCategoryAction());
  }, []);

  return (
    <div className="coloring">
      <Container>
        <Btns
          title={"التصنيفات"}
          btnName={"المزيد"}
          anything={"allcategory"}
        ></Btns>
        <Row className="justify-content-center p-2">
          {loading === false ? (
            select && select.data ? (
              select.data.slice(0, 6).map((item, index) => {
                return (
                  <>
                    <Categorycard
                      title={item.name}
                      image={item.image}
                      key={index}
                      id={item._id}
                    ></Categorycard>
                  </>
                );
              })
            ) : null
          ) : (
            <Spinner animation="border" />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Categore;
