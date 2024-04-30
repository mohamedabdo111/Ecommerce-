import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetAllReviewsOnProduct } from "../../redux/actions/ProductRewieAction";

const GetProductReviews = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const comments = useSelector((item) => item.Review.getReviews);
  const loading = useSelector((item) => item.Review.loading);
  const onpress = async (page) => {
    await dispatch(GetAllReviewsOnProduct(id, page, 5));
  };
  useEffect(() => {
    dispatch(GetAllReviewsOnProduct(id, 1, 5));
  }, []);

  return [onpress, comments, loading];
};

export default GetProductReviews;
