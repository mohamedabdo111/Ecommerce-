import React, { useEffect, useState } from "react";
import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import Cardsection from "../../../components/products/cardsection";
import PaginationCode from "../../../components/utility/pagination";
import GetAllProducHock from "../../../exporthoocks/Product/get-all-product-hock";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetAllPorductCategory } from "../../../redux/actions/ProductAction";

const AllCategorySame = () => {
  //   const [item, pageCount, onpress, getProduct] = GetAllProducHock();

  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetAllPorductCategory(20, 1, id));
      setLoading(false);
    };
    get();
  }, []);
  let item = [];
  const res = useSelector((item) => item.vlauese.productCategory);
  if (res) {
    item = res.data;
  }

  let numbers = [];
  if (res && res.paginationResult) {
    numbers = res.paginationResult.numberOfPages;
  } else {
    numbers = 0;
  }

  const onpress = async (e) => {
    await dispatch(GetAllPorductCategory(20, e, id));
  };

  //   useEffect(() => {
  //     if (loading === false) {
  //       if (res && res.data) {
  //         console.log(res.data);
  //         varis = res.data;
  //       }
  //     }
  //   }, [loading]);

  //   if (pageCount) {
  //     var numbers = pageCount;
  //   } else {
  //     numbers = 0;
  //   }

  return (
    <div>
      <Container>
        <Row>
          {" "}
          <Col xs="12">
            {item && item.length > 1 ? (
              <Cardsection product={item}></Cardsection>
            ) : (
              <h2 className=" text-center mt-5" style={{ height: "50vh" }}>
                {" "}
                لا يوجد بيانات
              </h2>
            )}
          </Col>
        </Row>
      </Container>
      {numbers > 1 ? (
        <PaginationCode pageCount={numbers} onpress={onpress}></PaginationCode>
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AllCategorySame;
