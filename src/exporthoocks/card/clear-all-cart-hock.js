import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearAllCartAction } from "../../redux/actions/CartAction";
import notify from "../notification";

const ClearAllCartHock = () => {
  const [loading, setLoading] = useState(true);
  const dispath = useDispatch();

  const ClickToClearAll = async () => {
    setLoading(true);
    await dispath(ClearAllCartAction());
    setLoading(false);
  };

  const res = useSelector((item) => item.cart.clearall);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 204) {
        window.location.reload();
      }
    }
  }, [loading]);

  return [ClickToClearAll];
};

export default ClearAllCartHock;
