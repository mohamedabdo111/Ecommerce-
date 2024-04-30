import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearAllCartAction,
  UpadateCountCartAction,
} from "../../redux/actions/CartAction";
import notify from "../notification";

const UpdateCountHock = (item) => {
  const [loading, setLoading] = useState(true);
  const [count, setcount] = useState(item.count);
  const dispath = useDispatch();

  const ChangeCount = (e) => {
    setcount(e.target.value);
  };
  const ClickToUpdata = async () => {
    setLoading(true);
    await dispath(
      UpadateCountCartAction(item._id, {
        count,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.cart.updatecount);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم تعديل الكميه ", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  }, [loading]);
  return [ClickToUpdata, ChangeCount, count];
};

export default UpdateCountHock;
