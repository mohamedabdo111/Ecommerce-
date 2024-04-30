import { UseGetData } from "../../hoocks/useGetData";
import { UsePostCategoryWithImage } from "../../hoocks/usePostData";
import { All_Brand, Post_Brand } from "../types";
import { Error } from "../types";
export const GetAllBrand = () => async (dispatch) => {
  try {
    const res = await UseGetData("/api/v1/brands?limit=12");
    dispatch({
      type: All_Brand,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: Error + error,
      loading: true,
    });
  }
};
export const GetAllBrandPagination = (e) => async (dispatch) => {
  try {
    const res = await UseGetData(`/api/v1/brands?limit=12&page=${e}`);
    dispatch({
      type: All_Brand,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: Error + error,
      loading: true,
    });
  }
};

export const PostBrandAdmin = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithImage("/api/v1/brands", formdata);
    dispatch({
      type: Post_Brand,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: Error + error,
      loading: true,
    });
  }
};
