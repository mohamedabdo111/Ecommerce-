import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddCategoryHock from "../../exporthoocks/Category/add-category-hock";
const AddMoreCategory = () => {
  const [
    image,
    name,
    imageinURL,
    press,
    loading,
    handelchange,
    clicker,
    changeName,
    status,
  ] = AddCategoryHock();

  console.log(status);
  return (
    <div>
      <h4 className="fw-bold">اضف تصنيف</h4>

      <div className=" mt-3 text-secondary ">
        <p className="p-0 m-0">صوره التصنيف</p>
        <div style={{ width: "120px", position: "relative" }}>
          <label for="upload-img">
            <img
              alt="add category"
              src={image}
              height="100px"
              width="120px"
              style={{ cursor: "pointer", marginTop: "20px" }}
            ></img>
          </label>
          <input type="file" id="upload-img" onChange={handelchange}></input>
        </div>

        <div className="col-sm-7 text-start">
          <input
            type="text"
            className=" form-control w-100 mt-2"
            placeholder=" اسم التصنيف"
            onChange={changeName}
            value={name}
          />
          <Button className=" bg-dark border-0 mt-2 text-end" onClick={clicker}>
            اضاف التصنيف
          </Button>
        </div>
        {press ? (
          loading ? (
            <Spinner animation="border" />
          ) : (
            <h3>done</h3>
          )
        ) : null}
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddMoreCategory;
