import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPorduct,
  GetNumberOfPage,
} from "../../redux/actions/ProductAction";

const ViewAllProductAdimnHock = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPorduct(12));
  }, []);

  const Alldata = useSelector((item) => item.vlauese.product);

  let items = [];
  if (Alldata) {
    items = Alldata.data;
  } else {
    items = [];
  }

  let PageCount = [];
  if (Alldata) {
    PageCount = Alldata.paginationResult;
  } else {
    PageCount = [];
  }

  const onpress = async (page) => {
    await dispatch(GetNumberOfPage(page, 12));
  };

  return [items, PageCount, onpress];
};

export default ViewAllProductAdimnHock;
