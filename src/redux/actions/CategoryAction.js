import { All_CATEGORES, Get_One_Category, Post_CATEGORES } from "../types";
import { UseGetData } from "../../hoocks/useGetData";
import { UsePostCategoryWithImage } from "../../hoocks/usePostData";

export const GetCategoryAction = (e) => async (dispath) => {
  try {
    const res = await UseGetData(`/api/v1/categories?limit=24`);
    // console.log(res.data);
    dispath({
      type: All_CATEGORES,
      payload: res,
    });
  } catch (error) {
    dispath({
      type: "Error",
      payload: "Error" + error,
      loading: true,
    });
  }
};
export const GetOneCategory = (id) => async (dispath) => {
  try {
    const res = await UseGetData(`/api/v1/categories/${id}`);
    // console.log(res.data);
    dispath({
      type: Get_One_Category,
      payload: res,
    });
  } catch (error) {
    dispath({
      type: "Error",
      payload: "Error" + error,
      loading: true,
    });
  }
};
export const GetCategoryActionPage = (e) => async (dispath) => {
  try {
    const res = await UseGetData(`/api/v1/categories?limit=24&page=${e}`);
    // console.log(res.data);
    dispath({
      type: All_CATEGORES,
      payload: res,
    });
  } catch (error) {
    dispath({
      type: "Error",
      payload: "Error" + error,
      loading: true,
    });
  }
};

export const PostCategory = (formdata) => async (dispath) => {
  try {
    const res = await UsePostCategoryWithImage("/api/v1/categories", formdata);

    dispath({
      type: Post_CATEGORES,
      payload: res,
    });
  } catch (error) {
    dispath({
      type: "Error",
      payload: "Error" + error,
      loading: true,
    });
  }
};
