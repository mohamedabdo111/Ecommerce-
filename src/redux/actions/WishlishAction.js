import UseDeleteData from "../../hoocks/useDeleteData";
import { UseGetData, UseGetDataToken } from "../../hoocks/useGetData";
import { UsePostCategoryWithData } from "../../hoocks/usePostData";
import { Add_WishList, Get_All_WishList, Remove_WishList } from "../types";

export const AddToWishListAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData("/api/v1/wishlist", data);
    dispatch({
      type: Add_WishList,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Add_WishList,
      data: error.response,
    });
  }
};

export const RemoveFromWishListAction = (id) => async (dispatch) => {
  try {
    const res = await UseDeleteData(`/api/v1/wishlist/${id}`);
    dispatch({
      type: Remove_WishList,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Remove_WishList,
      data: error.response,
    });
  }
};

export const GetAllWishlistAction = () => async (dispatch) => {
  try {
    const res = await UseGetDataToken("/api/v1/wishlist");
    dispatch({
      type: Get_All_WishList,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_All_WishList,
      data: error.response,
    });
  }
};
