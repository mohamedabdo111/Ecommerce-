import { UseGetData } from "../../hoocks/useGetData";
import { UsePostCategoryWithData } from "../../hoocks/usePostData";
import { Error, Get_Subcategory, Post_SubCategory } from "../types";

export const PostSubCategory = (dataObj) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData("/api/v1/subcategories", dataObj);
    dispatch({
      type: Post_SubCategory,
      data: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: Error,
      data: "Error" + error,
    });
  }
};

export const GetSubcategoryWithID = (i) => async (dispatch) => {
  try {
    const res = await UseGetData(`/api/v1/categories/${i}/subcategories`);
    dispatch({
      type: Get_Subcategory,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      data: "Error" + Error,
    });
  }
};
