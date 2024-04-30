import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import SideBarProduct from "../../exporthoocks/Product/sidebar-filter-product";

export const Sidebar = () => {
  const [categories, brands, ChangeInput, changePriceFrom, changePriceTo] =
    SideBarProduct();

  return (
    <Row className="p-2">
      <div className="categoryslider">
        <p className=" fw-bold">الفئه</p>
        <div className="d-flex  align-items-center mb-1 ">
          <input type="checkbox" value={"0"} onChange={ChangeInput} />
          <p className="m-0 me-1">الكل</p>
        </div>

        {categories ? (
          categories.map((item, index) => {
            return (
              <div className="d-flex  align-items-center mb-1 " key={index}>
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={ChangeInput}
                />
                <p className="m-0 me-1">{item.name}</p>
              </div>
            );
          })
        ) : (
          <Spinner animation="border" />
        )}
      </div>

      {/* <div className="branslider">
        <p className=" fw-bold mt-3">المركات</p>

        <div className="d-flex  align-items-center mb-1">
          <input
            type="checkbox"
            value={"0"}
            onClick={(e) => console.log(e.target.value)}
          />
          <p className="m-0 me-1">الكل</p>
        </div>
        {brands ? (
          brands.map((item, index) => {
            return (
              <div className="d-flex  align-items-center mb-1" key={index}>
                <input type="checkbox" value={item._id} />
                <p className="m-0 me-1">{item.name}</p>
              </div>
            );
          })
        ) : (
          <Spinner animation="border" />
        )}
      </div> */}

      {/* <div className="branslider">
        <p className=" fw-bold mt-3">السعر</p>

        <div className="d-flex  align-items-center mb-1 ">
          <p className="m-0 me-1">من</p>
          <input
            type="number"
            style={{ width: "50px" }}
            onChange={changePriceFrom}
          />
        </div>
        <div className="d-flex  align-items-center mb-1 ">
          <p className="m-0 me-1">الي</p>
          <input
            type="number"
            style={{ width: "50px" }}
            onChange={changePriceTo}
          />
        </div>
      </div> */}
    </Row>
  );
};

export default Sidebar;
