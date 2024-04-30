import React, { useRef } from "react";
import { Button, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCopuneHock from "../../../exporthoocks/copunes/add-copune-hock";
import AdminViewCard from "../../../components/admin/AdminViewCard";
import ViewAllCouponsHock from "../../../exporthoocks/copunes/View_All_Coupns_Hock";

const AdminAddCouponecomp = () => {
  const dateref = useRef();
  const [
    nameCoupon,
    dateCoupon,
    discCoupon,
    ChangeName,
    ChangeDate,
    ChangeDiscount,
    onSubmit,
  ] = AddCopuneHock();

  const [items, loading] = ViewAllCouponsHock();
  //   console.log(items);
  let itemsData = [];
  if (items.data) {
    itemsData = items.data;
  }
  //   console.log(itemsData);
  return (
    <div>
      <h4 className=" fw-bold">اضف كوبون جديد</h4>

      <div className=" mt-3 text-secondary ">
        <div className="col-sm-12 col-md-7 text-start">
          <input
            type="text"
            className=" input-group-text w-100 mt-2"
            placeholder="اسم الكوبون"
            onChange={ChangeName}
            value={nameCoupon}
          ></input>
          <input
            ref={dateref}
            type="text"
            className=" input-group-text w-100 mt-2"
            placeholder="تاريخ الانتهاء"
            onFocus={() => (dateref.current.type = "date")}
            onBlur={() => (dateref.current.type = "text")}
            onChange={ChangeDate}
            value={dateCoupon}
          ></input>
          <input
            type="number"
            className=" input-group-text w-100 mt-2"
            placeholder="نسبه الخصم"
            onChange={ChangeDiscount}
            value={discCoupon}
          ></input>

          <Button
            className=" bg-dark border-0 mt-2 text-end"
            onClick={onSubmit}
          >
            اضافه التعديلات
          </Button>
          {/* ViewAllCoupons */}
          <div className=" mt-5">
            {itemsData
              ? itemsData.map((item, index) => {
                  return (
                    <AdminViewCard coupon={item} key={index}></AdminViewCard>
                  );
                })
              : console.log("no")}
          </div>
        </div>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default AdminAddCouponecomp;
