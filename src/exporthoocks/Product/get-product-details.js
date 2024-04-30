import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPorductID,
  GetPorductLikeID,
} from "../../redux/actions/ProductAction";
import { GetOneCategory } from "../../redux/actions/CategoryAction";

const ProductDetailsHock = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPorductID(id));
  }, []);
  const AllData = useSelector((item) => item.vlauese.details);
  const onecategory = useSelector((i) => i.Category.onecategory);
  const productLike = useSelector((i) => i.vlauese.wouldLike);
  let productULike = [];
  if (productLike) {
    productULike = productLike.data;
  }

  let item = [];
  if (AllData) {
    item = AllData.data;
  } else {
    item = [];
  }

  useEffect(() => {
    if (item) {
      dispatch(GetOneCategory(item.category));
    }
    if (item) {
      dispatch(GetPorductLikeID(item.category));
    }
  }, [item]);

  let onecat = [];
  if (onecategory.data) {
    onecat = onecategory.data;
  } else {
    onecat = [];
  }

  return [item, onecat, productULike];
};

export default ProductDetailsHock;
