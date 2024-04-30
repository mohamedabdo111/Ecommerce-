import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProductHock from "../../exporthoocks/Product/add-product-hock";
import AdminEditProductHock from "../../exporthoocks/Product/edit-product-hock";
import { useParams } from "react-router-dom";
import ImageUploading from "react-images-uploading";

const AdminEditProduct = () => {
  const { id } = useParams();

  const [
    prodname,
    InputNameFun,
    proddiscrip,
    InputdiscribeFun,
    pricebefore,
    InputPriceBeforeFun,
    priceafter,
    InputPriceAfterFun,
    quantaty,
    InputQuantatyFun,
    categoryData,
    brandData,
    selectedValue,
    onSelect,
    onRemove,
    brandID,
    colorstate,
    setcolorstate,
    colorArray,
    changecategory,
    changeColor,
    changeBrand,
    setColorArray,
    clicker,
    SetColorState,
    SelectSubCat,
    CatID,
    imagess,
    onChange,
    maxNumber,
    x,
  ] = AdminEditProductHock(id);

  return (
    <Row>
      <h4 className="mb-4 fw-bold">تعديل المنتج</h4>
      <Col xs="12" md="7">
        <div>
          {/* <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={4}
          /> */}

          {/* bb */}
          <div className="App">
            <ImageUploading
              multiple
              value={imagess}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button onClick={onImageRemoveAll}>Remove all images</button>
                  {imagess.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button
                          // value={imagess}
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
          {/* bb */}
        </div>
      </Col>

      <Col xs="12" md="7">
        <input
          type="text"
          className=" form-control w-100 text-end mb-3"
          placeholder="اسم المنتج"
          value={prodname}
          onChange={InputNameFun}
        />

        <textarea
          className="form-control mb-3"
          placeholder="وصف المنتج"
          value={proddiscrip}
          onChange={InputdiscribeFun}
        ></textarea>

        <input
          type="number"
          placeholder="سعر المنتج"
          className=" form-control mb-3"
          value={pricebefore}
          onChange={InputPriceBeforeFun}
        ></input>
        {/* <input
          type="number"
          placeholder="سعر المنتج"
          className=" form-control mb-3"
          value={priceafter}
          onChange={InputPriceAfterFun}
        ></input> */}
        <input
          type="number"
          placeholder=" الكمية المتاحه"
          className=" form-control mb-3"
          value={quantaty}
          onChange={InputQuantatyFun}
        ></input>

        {/* <Form.Select
          aria-label="Default select example"
          className="mb-3"
          onChange={changecategory}
          value={CatID}
        >
          <option value="1">التصنيف الرئيسي</option>
          {categoryData.data ? (
            categoryData.data.map((item, index) => {
              return (
                <option value={item._id} key={index}>
                  {item.name}
                </option>
              );
            })
          ) : (
            <option value="0">لا يوجد تصنيفات</option>
          )}
        </Form.Select> */}

        {/* <Multiselect
          className="text-end mb-3"
          options={options} // Options to display in the dropdown
          selectedValues={selectedValue} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="التصنيف الفرعي"
        /> */}

        {/* <Form.Select
          aria-label="Default select example"
          className="mb-3"
          onChange={changeBrand}
        >
          <option value="0">الماركه</option>
          {brandData.data
            ? brandData.data.map((item, index) => {
                return (
                  <option value={item._id} key={index}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </Form.Select> */}
      </Col>

      <Col xs="12" md="7">
        <p>الالوان المتاحه</p>
        <div className="d-flex gap-2 algin-items-center">
          {colorArray.length >= 1
            ? colorArray.map((item, index) => {
                return (
                  <div
                    onClick={() =>
                      setColorArray(colorArray.filter((i) => i !== item))
                    }
                    key={index}
                    className="colorproduct"
                    style={{ backgroundColor: `${item}` }}
                  ></div>
                );
              })
            : null}

          <div
            className="colorproduct text-secondary text-center"
            onClick={SetColorState}
          >
            +
            {colorstate === true ? (
              <CompactPicker onChangeComplete={changeColor}></CompactPicker>
            ) : null}
          </div>
        </div>
      </Col>

      <Col xs="12" md="7" className="text-start">
        <Button className="bg-dark border-0 mt-3" onClick={clicker}>
          حفظ التعديلات
        </Button>
      </Col>

      <ToastContainer />
    </Row>
  );
};

export default AdminEditProduct;
