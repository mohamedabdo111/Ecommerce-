import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../notification";
import { useNavigate } from "react-router-dom";
import {
  ViewAllOrdersAction,
  ViewSpecificOrdersAction,
} from "../../redux/actions/checkoutAction";
const ViewSpecificOrder = (id) => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(id);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(ViewSpecificOrdersAction(id));
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((item) => item.checkOut.spicificorder);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        setOrders(res.data.cartItems);
        setResponse(res.data);
      }
    }
  }, [loading]);

  return [orders, response];
};

export default ViewSpecificOrder;
