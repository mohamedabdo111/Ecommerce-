import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBrandHock from "../../exporthoocks/Brand/add-brand-hock";
const Addbrand = () => {
  const [
    imageselect,
    isPress,
    loading,
    text,
    handelimage,
    changevalue,
    clicker,
  ] = AddBrandHock();

  return (
    <div>
      <h4 className=" fw-bold">اضف ماركه</h4>

      <div className=" mt-3 text-secondary ">
        <p className="p-0 m-0">صوره الماركه</p>
        <div style={{ width: "120px", position: "relative" }}>
          <label for="upload-img">
            <img
              alt="add category"
              src={imageselect}
              height="100px"
              width="120px"
              style={{ cursor: "pointer", marginTop: "20px" }}
            ></img>
          </label>
          <input type="file" id="upload-img" onChange={handelimage}></input>
        </div>

        <div className="col-sm-7 text-start">
          <input
            type="text"
            className=" form-control w-100 mt-2"
            placeholder="اسم الماركه"
            onChange={changevalue}
            value={text}
          ></input>
          <Button className=" bg-dark border-0 mt-2 text-end" onClick={clicker}>
            اضافه التعديلات
          </Button>
        </div>
        {isPress ? (
          loading ? (
            <Spinner animation="border" />
          ) : (
            console.log("done")
          )
        ) : null}
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Addbrand;
