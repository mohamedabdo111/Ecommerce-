import UseDeleteData from "../../hoocks/useDeleteData";
import { UseGetData } from "../../hoocks/useGetData";
import { UsePostCategoryWithImage } from "../../hoocks/usePostData";
import { UseUpdateWithImage } from "../../hoocks/useUpdateData";
import {
  DeleteProduct,
  Error,
  Get_All_Product,
  Get_Product_Category,
  Get_Product_Details,
  Get_product_would_like,
  Post_Product,
  UpdateProduct,
} from "../types";

export const PostProductAction = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithImage(`/api/v1/products`, formdata);

    dispatch({
      type: Post_Product,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: "Error" + error,
    });
  }
};

export const GetAllPorduct = (page) => async (dispatch) => {
  try {
    const res = await UseGetData(`/api/v1/products?limit=${page}`);
    dispatch({
      type: Get_All_Product,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: "Error" + error,
    });
  }
};
export const GetAllPorductCategory =
  (limit, page, categoreID) => async (dispatch) => {
    try {
      const res = await UseGetData(
        `/api/v1/products?limit=${limit}&page=${page}&category=${categoreID}`
      );
      dispatch({
        type: Get_Product_Category,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: Get_Product_Category,
        payload: error.response,
      });
    }
  };

// get all product with qurystring

export const GetAllProductActionQuerysting =
  (qurystring) => async (dispatch) => {
    const res = await UseGetData(`/api/v1/products?${qurystring}`);

    try {
      dispatch({
        type: Get_All_Product,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: Error,
        payload: "Error" + error,
      });
    }
  };
export const GetPorductID = (id) => async (dispatch) => {
  try {
    const res = await UseGetData(`/api/v1/products/${id}`);
    dispatch({
      type: Get_Product_Details,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: "Error" + error,
    });
  }
};
export const GetPorductLikeID = (id) => async (dispatch) => {
  try {
    const res = await UseGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: Get_product_would_like,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: "Error" + error,
    });
  }
};

export const GetNumberOfPage = (numpages, numlimit) => async (dispatch) => {
  try {
    const res = await UseGetData(
      `/api/v1/products?page=${numpages}&limit=${numlimit}`
    );
    dispatch({
      type: Get_All_Product,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: "Error" + error,
    });
  }
};

export const DeleteProductAction = (id) => async (dispatch) => {
  try {
    const res = await UseDeleteData(`/api/v1/products/${id}?limit=100`);
    dispatch({
      type: DeleteProduct,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: "Error" + error,
    });
  }
};
export const EditProductAction = (id, data) => async (dispatch) => {
  try {
    const res = await UseUpdateWithImage(`/api/v1/products/${id}`, data);
    dispatch({
      type: UpdateProduct,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: Error,
      payload: "Error" + error,
    });
  }
};
