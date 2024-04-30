import {
  Delete_Coupon,
  Get_Specific_Coupon,
  Post_Coupon,
  Update_Coupon,
  View_All_Coupon,
} from "../types";

const intialState = {
  PostCoupn: [],
  getallcoupons: [],
  updatedata: [],
  getspecific: [],
  deletecoupon: [],
  loading: true,
};
export const CouponReducer = (state = intialState, action) => {
  switch (action.type) {
    case Post_Coupon: {
      return {
        ...state,
        PostCoupn: action.data,
        loading: false,
      };
    }
    case View_All_Coupon: {
      return {
        ...state,
        getallcoupons: action.data,
        loading: false,
      };
    }
    case Update_Coupon: {
      return {
        ...state,
        updatedata: action.data,
        loading: false,
      };
    }
    case Get_Specific_Coupon: {
      return {
        ...state,
        getspecific: action.data,
        loading: false,
      };
    }
    case Delete_Coupon: {
      return {
        ...state,
        deletecoupon: action.data,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
