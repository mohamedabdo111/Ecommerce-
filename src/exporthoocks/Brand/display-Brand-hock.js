import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllBrand,
  GetAllBrandPagination,
} from "../../redux/actions/BrandAction";

const DisplayBrandHock = () => {
  // for cards
  // for cards
  const dispatch = useDispatch();
  const img = useSelector((i) => i.Brand.data.data);
  const loading = useSelector((i) => i.Brand.loading);

  // for pagination
  const pagesnumber = useSelector(
    (i) => i.Brand.data.paginationResult.numberOfPages
  );
  console.log(pagesnumber);

  useEffect(() => {
    dispatch(GetAllBrand());
  }, []);

  const onpress = async (e) => {
    await dispatch(GetAllBrandPagination(e));
  };

  return [img, loading, pagesnumber, onpress];
};

export default DisplayBrandHock;
