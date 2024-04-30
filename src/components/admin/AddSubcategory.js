import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddSubCategoryHock from "../../exporthoocks/Subcategory/add-sub-category";

const AddSubcategory = () => {
  const [text, IsPress, loading, changer, clicker, changeoption, item] =
    AddSubCategoryHock();
  return (
    <>
      <Row className="mb-4">
        <h4 className="mb-5">اضف تصنيف فرعي جديد</h4>

        <Col xs="12" sm="12" md="7">
          <input
            type="text"
            className=" form-control w-100 mb-3"
            placeholder=" اسم التصنيف الفرعي"
            onChange={changer}
            value={text}
          ></input>

          <Form.Select
            aria-label="Default select example"
            onChange={changeoption}
          >
            <option value="0"> التصنيفات الرائيسيه</option>
            {item && item.length > 1 ? (
              item.map((i, index) => {
                return (
                  <option value={i._id} key={index}>
                    {i.name}
                  </option>
                );
              })
            ) : (
              <option value="1"> لا يوجد تصنيفات</option>
            )}
          </Form.Select>
        </Col>
      </Row>

      <Row>
        <Col sm="12" md="7" className="text-start">
          <Button className="bg-dark border-0" onClick={clicker}>
            حفظ التعديلات
          </Button>
        </Col>

        <ToastContainer></ToastContainer>
      </Row>
      {IsPress ? (
        loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          console.log("done")
        )
      ) : null}
    </>
  );
};

export default AddSubcategory;
