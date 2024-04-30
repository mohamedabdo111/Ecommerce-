import UseDeleteData from "../../hoocks/useDeleteData";
import { UseGetDataToken } from "../../hoocks/useGetData";
import { UsePostCategoryWithData } from "../../hoocks/usePostData";
import { UseUpdateWithData } from "../../hoocks/useUpdateData";
import {
  Change_Password,
  GetSpecific_Address,
  Get_Address,
  Post_Address,
  Update_Address,
  User_Edit_Info,
  remove_Address,
} from "../types";

export const PostAddressAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData("/api/v1/addresses", data);
    dispatch({
      type: Post_Address,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Post_Address,
      data: error.response,
    });
  }
};
export const GetAddressAction = () => async (dispatch) => {
  try {
    const res = await UseGetDataToken("/api/v1/addresses");
    dispatch({
      type: Get_Address,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Address,
      data: error.response,
    });
  }
};
export const RemoveAddressAction = (id) => async (dispatch) => {
  try {
    const res = await UseDeleteData(`/api/v1/addresses/${id}`);
    dispatch({
      type: remove_Address,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: remove_Address,
      data: error.response,
    });
  }
};
export const UpdateAddressAction = (id, data) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/addresses/${id}`, data);
    dispatch({
      type: Update_Address,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Update_Address,
      data: error.response,
    });
  }
};
export const GetSpecificAddressAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDataToken(`/api/v1/addresses/${id}`);
    dispatch({
      type: GetSpecific_Address,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: GetSpecific_Address,
      data: error.response,
    });
  }
};
export const UserEditInfo = (data) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/users/updateMe`, data);
    dispatch({
      type: User_Edit_Info,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: User_Edit_Info,
      data: error.response,
    });
  }
};
export const ChangePasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData(`/api/v1/users/changeMyPassword`, data);
    dispatch({
      type: Change_Password,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Change_Password,
      data: error.response,
    });
  }
};
