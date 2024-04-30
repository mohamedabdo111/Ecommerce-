import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpecificAddressAction } from "../../redux/actions/UserAddressAction";
import GetAllCartHock from "../card/get-all-cart-hock";
import notify from "../notification";
import { CreateOrderAction } from "../../redux/actions/checkoutAction";
import { useNavigate } from "react-router-dom";

const CreateOrderHock = () => {
  const [, , , , , , cartId] = GetAllCartHock();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState([]);
  const [add, setAdd] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // onchange select option address
  const ShowId = (e) => {
    setAdd(e.target.value);
    setAddress([]);
    get(e.target.value);
  };

  //   function to get specific Address
  const get = async (id) => {
    setLoading(true);
    await dispatch(GetSpecificAddressAction(id));
    setLoading(false);
  };

  const res = useSelector((item) => item.userAdd.specificaddress);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === "success") {
        setAddress(res.data);
      }
    }
  }, [loading]);

  const [loadingDone, setLoadingDone] = useState(true);
  //   console.log(address);

  const ClickToDone = async () => {
    if (add === "0" || add === "") {
      notify("اختر العنوان", "warn");
      return;
    }
    setLoadingDone(true);
    await dispatch(
      CreateOrderAction(cartId, {
        shippingAddress: {
          details: address.details,
          phone: address.phone,
          city: address.city,
          postalCode: "",
        },
      })
    );
    setLoadingDone(false);
  };

  const MakeOrder = useSelector((item) => item.checkOut.createorder);

  console.log(MakeOrder);
  useEffect(() => {
    if (loadingDone === false) {
      if (MakeOrder && MakeOrder.status === 201) {
        notify("تم انشاء طلبك بنجاح", "success");
        setTimeout(() => {
          navigate("/user/allorders");
        }, 2000);
      } else {
        notify("هناك مشكله حاول مره اخري", "error");
      }
    }
  }, [loadingDone]);

  return [ShowId, ClickToDone];
};

export default CreateOrderHock;
