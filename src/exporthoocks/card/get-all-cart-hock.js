import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCouponCartAction,
  GetAllCartAction,
} from "../../redux/actions/CartAction";
import { faL } from "@fortawesome/free-solid-svg-icons";
import notify from "../notification";

const GetAllCartHock = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartId, setCartId] = useState("");
  const dispath = useDispatch();
  useEffect(() => {
    const GetAllCarts = async () => {
      setLoading(true);
      await dispath(GetAllCartAction());
      setLoading(false);
    };

    GetAllCarts();
  }, []);

  const res = useSelector((item) => item.cart.getallcart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === "success") {
        setCartId(res.data._id);
        setCartItems(res.data.products);
        setTotalPrice(res.data.totalCartPrice);
      }
    }
  }, [loading]);

  // on click active coupon
  const [loadingCoupone, setLoadingCouponr] = useState(true);
  const [couponName, setCouponName] = useState("");

  const ChangeCouponName = (e) => {
    setCouponName(e.target.value);
  };
  const ClickCoupon = async () => {
    if (couponName === "") {
      notify("اكتب الكود الخاص بالكوبون", "warn");
      return;
    }
    setLoadingCouponr(true);
    await dispath(
      AddCouponCartAction({
        couponName,
      })
    );
    setLoadingCouponr(false);
  };
  const resCoupone = useSelector((item) => item.cart.addcoupon);
  // console.log(resCoupone);
  useEffect(() => {
    if (loadingCoupone === false) {
      if (resCoupone && resCoupone.status === 200) {
        setTotalPrice(res.data.totalAfterDiscount);
        // console.log(res.data);
      }
    }
  }, [loadingCoupone]);
  return [
    res,
    cartItems,
    totalPrice,
    couponName,
    ChangeCouponName,
    ClickCoupon,
    cartId,
  ];
};

export default GetAllCartHock;
