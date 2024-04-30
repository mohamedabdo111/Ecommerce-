import UseDeleteData from "../../hoocks/useDeleteData";
import { UseGetDataToken } from "../../hoocks/useGetData";
import { UsePostCategoryWithData } from "../../hoocks/usePostData";
import { UseUpdateWithData } from "../../hoocks/useUpdateData";
import {
  Add_Cart,
  Add_Coupon,
  Clear_All_Cart,
  Clear_One_Cart,
  Get_All_Cart,
  Update_Cart,
} from "../types";

export const AddToCartAction = (data) => async (dispath) => {
  try {
    const res = await UsePostCategoryWithData(`/api/v1/cart`, data);
    dispath({
      type: Add_Cart,
      data: res,
    });
  } catch (e) {
    dispath({
      type: Add_Cart,
      data: e.response,
    });
  }
};
export const GetAllCartAction = () => async (dispath) => {
  try {
    const res = await UseGetDataToken(`/api/v1/cart`);
    dispath({
      type: Get_All_Cart,
      data: res,
    });
  } catch (e) {
    dispath({
      type: Get_All_Cart,
      data: e.response,
    });
  }
};
export const ClearAllCartAction = () => async (dispath) => {
  try {
    const res = await UseDeleteData(`/api/v1/cart`);
    dispath({
      type: Clear_All_Cart,
      data: res,
    });
  } catch (e) {
    dispath({
      type: Clear_All_Cart,
      data: e.response,
    });
  }
};
export const ClearOneCartAction = (id) => async (dispath) => {
  try {
    const res = await UseDeleteData(`/api/v1/cart/${id}`);
    dispath({
      type: Clear_One_Cart,
      data: res,
    });
  } catch (e) {
    dispath({
      type: Clear_One_Cart,
      data: e.response,
    });
  }
};
export const UpadateCountCartAction = (id, data) => async (dispath) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/cart/${id}`, data);
    dispath({
      type: Update_Cart,
      data: res,
    });
  } catch (e) {
    dispath({
      type: Update_Cart,
      data: e.response,
    });
  }
};
export const AddCouponCartAction = (data) => async (dispath) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/cart/applyCoupon`, data);
    dispath({
      type: Add_Coupon,
      data: res,
    });
  } catch (e) {
    dispath({
      type: Add_Coupon,
      data: e.response,
    });
  }
};
