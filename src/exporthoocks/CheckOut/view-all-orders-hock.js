import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../notification";
import { useNavigate } from "react-router-dom";
import { ViewAllOrdersAction } from "../../redux/actions/checkoutAction";
const ViewAllOrdersHock = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(ViewAllOrdersAction());
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((item) => item.checkOut.getallorders);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        setOrders(res.data);
      }
    }
  }, [loading]);

  return [res, orders];
};

export default ViewAllOrdersHock;
