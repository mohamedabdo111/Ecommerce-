import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCouponAction } from "../../redux/actions/CouponAction";
import notify from "../notification";

const AddCopuneHock = () => {
  const [nameCoupon, setNameCoupon] = useState("");
  const [dateCoupon, setDateCoupon] = useState("");
  const [discCoupon, setDiscCoupon] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const ChangeName = (e) => {
    setNameCoupon(e.target.value);
  };
  const ChangeDate = (e) => {
    setDateCoupon(e.target.value);
  };
  const ChangeDiscount = (e) => {
    setDiscCoupon(e.target.value);
  };

  const onSubmit = async (e) => {
    // e.prevetDefault();
    setLoading(true);
    await dispatch(
      PostCouponAction({
        name: nameCoupon,
        expire: dateCoupon,
        discount: discCoupon,
      })
    );
    setLoading(false);
  };
  const res = useSelector((item) => item.Coupon.PostCoupn);
  // console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 201) {
        notify("تم اضافه الكوبون ", "success");
        setDateCoupon("");
        setDiscCoupon("");
        setNameCoupon("");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else if (res && res.status === 400) {
        notify("اسم الكوبون موجود بالفعل , اعد كتابه اسم اخر", "warn");

        setNameCoupon("");
      } else {
        notify(" حدث خطأ من فضلك حاول مره اخري وتأكد من ملئ البيانات", "error");
      }
    }
  }, [loading]);

  return [
    nameCoupon,
    dateCoupon,
    discCoupon,
    ChangeName,
    ChangeDate,
    ChangeDiscount,
    onSubmit,
  ];
};

export default AddCopuneHock;
