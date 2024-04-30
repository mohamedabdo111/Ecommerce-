import UseDeleteData from "../../hoocks/useDeleteData";
import { UseGetData } from "../../hoocks/useGetData";
import { UsePostCategoryWithData } from "../../hoocks/usePostData";
import { UseUpdateWithData } from "../../hoocks/useUpdateData";
import { Delete_Reviwe, Edit_Review, Get_Reviews, post_review } from "../types";

export const PostReviewAcion = (id, data) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData(
      `/api/v1/products/${id}/reviews`,
      data
    );
    dispatch({
      type: post_review,
      data: res,
    });
  } catch (e) {
    // console.log(e.response);
    dispatch({
      type: post_review,
      data: e.response,
    });
  }
};

export const GetAllReviewsOnProduct = (id, page, limit) => async (dispatch) => {
  try {
    const res = await UseGetData(
      `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`
    );
    dispatch({
      type: Get_Reviews,
      data: res,
    });
  } catch (error) {
    dispatch({
      Get_Reviews,
      data: error.response,
    });
  }
};

export const DeletProductReview = (id) => async (dispatch) => {
  try {
    const res = await UseDeleteData(`/api/v1/reviews/${id}`);
    dispatch({
      type: Delete_Reviwe,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Delete_Reviwe,
      data: error.response,
    });
  }
};
export const EditProductReview = (id, data) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/reviews/${id}`, data);
    dispatch({
      type: Edit_Review,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Edit_Review,
      data: error.response,
    });
  }
};
