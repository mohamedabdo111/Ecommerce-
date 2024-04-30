import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PostCouponAction,
  ViewAllCouponAction,
} from "../../redux/actions/CouponAction";
import notify from "../notification";

const ViewAllCouponsHock = () => {
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(ViewAllCouponAction());
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((item) => item.Coupon.getallcoupons);
  //   console.log(res);
  useEffect(() => {
    if (loading === false)
      if (res) {
        setItem(res);
        // console.log(res);
      }
  }, [loading]);

  return [items, loading];
};

export default ViewAllCouponsHock;
