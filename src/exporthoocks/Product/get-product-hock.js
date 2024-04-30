import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPorduct } from "../../redux/actions/ProductAction";

const GetProducHock = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPorduct());
  }, []);
  const AllData = useSelector((item) => item.vlauese.product);
  let count = 0;
  if (AllData) {
    count = AllData.data;
  }
  let item = [];
  if (AllData) {
    item = AllData.data.slice(0, 4);
  } else {
    item = [];
  }

  // const loading = useSelector((item) => item.vlauese.loading);
  return [item];
};

export default GetProducHock;
