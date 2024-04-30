import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAddressAction } from "../../redux/actions/UserAddressAction";

const UserViewAddressHock = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetAddressAction());
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((item) => item.userAdd.getadd);
  // console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        setItems(res.data);
      }
    }
  }, [loading]);
  return [items];
};

export default UserViewAddressHock;
