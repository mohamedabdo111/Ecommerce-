import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  GetCategoryAction,
  GetCategoryActionPage,
} from "../../redux/actions/CategoryAction";

const DisplayCategoryHock = () => {
  const select = useSelector((item) => item.Category.data);
  const loading = useSelector((item) => item.Category.loading);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(GetCategoryAction());
  }, []);
  let pageCount = 0;
  if (select && select.paginationResult) {
    pageCount = select.paginationResult.numberOfPages;
  }

  const onpress = async (e) => {
    await dispath(GetCategoryActionPage(e));
  };

  // console.log(select);
  return [loading, pageCount, select, onpress];
};

export default DisplayCategoryHock;
