import { UsePostCategoryWithData } from "../../hoocks/usePostData";
import { UseUpdateWithData } from "../../hoocks/useUpdateData";
import {
  Creat_signUp,
  Login_Reducer,
  Post_VerifyPassword,
  Reset_password,
  forgit_password,
} from "../types";

export const SignUpAction = (items) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData("/api/v1/auth/signup", items);
    dispatch({
      type: Creat_signUp,
      data: res,
      loading: true, // This seems redundant if you're getting the data from the API response
    });
  } catch (error) {
    // Handle the error appropriately, for example:
    dispatch({
      type: Creat_signUp,
      data: error.response, // Dispatch the error message or error object
    });
  }
};
export const LoginAction = (items) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData("/api/v1/auth/login", items);
    dispatch({
      type: Login_Reducer,
      data: res,
      loading: true, // This seems redundant if you're getting the data from the API response
    });
  } catch (error) {
    // Handle the error appropriately, for example:
    dispatch({
      type: Login_Reducer,
      data: error.response, // Dispatch the error message or error object
    });
  }
};
export const ForgitPasswordAction = (items) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData(
      "/api/v1/auth/forgotPasswords",
      items
    );
    dispatch({
      type: forgit_password,
      data: res,
      loading: true, // This seems redundant if you're getting the data from the API response
    });
  } catch (error) {
    // Handle the error appropriately, for example:
    dispatch({
      type: forgit_password,
      data: error.response, // Dispatch the error message or error object
    });
  }
};

export const PostVerifyPasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostCategoryWithData(
      "/api/v1/auth/verifyResetCode",
      data
    );
    dispatch({
      type: Post_VerifyPassword,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Post_VerifyPassword,
      data: error.response,
    });
  }
};

export const ResetPasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UseUpdateWithData("/api/v1/auth/resetPassword", data);
    dispatch({
      type: Reset_password,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Reset_password,
      data: error.response,
    });
  }
};
