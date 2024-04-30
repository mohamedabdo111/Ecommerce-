import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveAddressAction } from "../../redux/actions/UserAddressAction";
import notify from "../notification";

const UserDeleteAddressHock = (address) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const deleteAdd = async () => {
    setLoading(true);
    await dispatch(RemoveAddressAction(address._id));
    setLoading(false);
  };

  const res = useSelector((item) => item.userAdd.delelteadd);
  // console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم حذف العنوان", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  }, [loading]);

  return [deleteAdd];
};

export default UserDeleteAddressHock;
