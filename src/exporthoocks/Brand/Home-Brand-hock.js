import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBrand } from "../../redux/actions/BrandAction";

const HomeBrandHock = () => {
  const brandInHomePage = useSelector((i) => i.Brand.data.data);
  const loading = useSelector((i) => i.Brand.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllBrand());
  }, []);

  return [loading, brandInHomePage];
};

export default HomeBrandHock;
