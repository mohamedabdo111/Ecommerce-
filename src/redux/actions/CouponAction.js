import UseDeleteData from "../../hoocks/useDeleteData";
import { UseGetDataToken } from "../../hoocks/useGetData";
import { UsePostCategoryWithData } from "../../hoocks/usePostData";
import { UseUpdateWithData } from "../../hoocks/useUpdateData";
import {
  Delete_Coupon,
  Get_Specific_Coupon,
  Post_Coupon,
  Update_Coupon,
  View_All_Coupon,
} from "../types";

export const PostCouponAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData("/api/v1/coupons", data);
    dispatch({
      type: Post_Coupon,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Post_Coupon,
      data: e.response,
    });
  }
};
export const ViewAllCouponAction = () => async (dispatch) => {
  try {
    const res = await UseGetDataToken("/api/v1/coupons");
    dispatch({
      type: View_All_Coupon,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: View_All_Coupon,
      data: e.response,
    });
  }
};
export const UpdateCouponAction = (id, data) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/coupons/${id}`, data);
    dispatch({
      type: Update_Coupon,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Update_Coupon,
      data: e.response,
    });
  }
};
export const GetSpecificCouponAction = (id) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/coupons/${id}`);
    dispatch({
      type: Get_Specific_Coupon,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Specific_Coupon,
      data: e.response,
    });
  }
};
export const DeleteCouponAction = (id) => async (dispatch) => {
  try {
    const res = await UseDeleteData(`/api/v1/coupons/${id}`);
    dispatch({
      type: Delete_Coupon,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Delete_Coupon,
      data: e.response,
    });
  }
};
