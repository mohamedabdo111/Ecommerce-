import { UseGetDataToken } from "../../hoocks/useGetData";
import { UsePostCategoryWithData } from "../../hoocks/usePostData";
import { UseUpdateWithData } from "../../hoocks/useUpdateData";
import {
  Get_All_Orders,
  Get_Specific_Order,
  Update_Deliver,
  Update_Pay,
  create_Order,
} from "../types";

export const CreateOrderAction = (id, data) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData(`/api/v1/orders/${id}`, data);
    dispatch({
      type: create_Order,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: create_Order,
      data: e.response,
    });
  }
};
export const ViewAllOrdersAction = () => async (dispatch) => {
  try {
    const res = await UseGetDataToken("/api/v1/orders");
    dispatch({
      type: Get_All_Orders,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Get_All_Orders,
      data: e.response,
    });
  }
};
export const ViewSpecificOrdersAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDataToken(`/api/v1/orders/${id}`);
    dispatch({
      type: Get_Specific_Order,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Specific_Order,
      data: e.response,
    });
  }
};
export const UpdatePay = (id) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/orders/${id}/pay`);
    dispatch({
      type: Update_Pay,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Update_Pay,
      data: e.response,
    });
  }
};
export const UpdateDeliver = (id) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/orders/${id}/deliver`);
    dispatch({
      type: Update_Deliver,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Update_Deliver,
      data: e.response,
    });
  }
};
