import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCouponAction,
  GetSpecificCouponAction,
  UpdateCouponAction,
} from "../../redux/actions/CouponAction";
import { faL } from "@fortawesome/free-solid-svg-icons";
import notify from "../notification";

const UpdateCouponHock = (ids) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingspecific, setLoadingSpecific] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(true);
  //   edit
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    setLoadingSpecific(true);
    await dispatch(GetSpecificCouponAction(ids));
    setLoadingSpecific(false);
  };

  //   delete
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleDelete = async () => {
    setLoadingDelete(true);
    console.log("jj");
    await dispatch(DeleteCouponAction(ids));
    setLoadingDelete(false);
    handleCloseDelete();
  };
  const resDelete = useSelector((item) => item.Coupon.deletecoupon);
  useEffect(() => {
    if (loadingDelete === false) {
      if (resDelete && resDelete.status === 204) {
        notify("تم حذف الكوبون", "success");

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    }
  }, [loadingDelete]);
  const resSpecific = useSelector((item) => item.Coupon.getspecific);
  useEffect(() => {
    if (loadingspecific === false) {
      if (resSpecific && resSpecific.data && resSpecific.data.data) {
        console.log(resSpecific.data.data);

        function getFormattedDate(dateString) {
          const date = new Date(dateString);
          const day = date.getDate();
          const month = date.getMonth() + 1; // Note: January is 0
          const year = date.getFullYear();

          return `${month}/${day}/${year}`;
        }

        const dateString = resSpecific.data.data.expire;
        const formattedDate = getFormattedDate(dateString);
        setName(resSpecific.data.data.name);
        setExpire(formattedDate);
        setDiscount(resSpecific.data.data.discount);
      }
    }
  }, [loadingspecific]);

  // onchange values

  const ChangeName = (e) => {
    setName(e.target.value);
  };
  const ChangeExpire = (e) => {
    setExpire(e.target.value);
  };
  const ChangeDiscount = (e) => {
    setDiscount(e.target.value);
  };

  // onsubmit
  const handleUpdate = async () => {
    console.log(ids);
    setLoading(true);
    await dispatch(
      UpdateCouponAction("65fba7a3e4747aefa1e40826", {
        name,
        expire,
        discount,
      })
    );
    setLoading(false);
    handleClose();
  };

  const res = useSelector((items) => items.Coupon.updatedata);
  //   console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
      }
      if (res && res.status === 400) {
        notify("البيانات متشابهه ادخل اسم اخر", "warn");
      } else if (res && res.status === 200) {
        window.location.reload();
      }
    }
  }, [loading]);

  return [
    show,
    handleClose,
    handleShow,
    handleUpdate,
    name,
    expire,
    discount,
    ChangeName,
    ChangeExpire,
    ChangeDiscount,
    showDelete,
    setShowDelete,
    handleCloseDelete,
    handleShowDelete,
    handleDelete,
  ];
};

export default UpdateCouponHock;
