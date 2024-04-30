import {
  Add_Cart,
  Add_Coupon,
  Clear_All_Cart,
  Clear_One_Cart,
  Get_All_Cart,
  Update_Cart,
} from "../types";

const intialstate = {
  addtocart: [],
  getallcart: [],
  clearall: [],
  clearone: [],
  updatecount: [],
  addcoupon: [],
  loading: true,
};
export const CartReducer = (state = intialstate, action) => {
  switch (action.type) {
    case Add_Cart: {
      return { ...state, addtocart: action.data, loading: false };
    }
    case Get_All_Cart: {
      return { ...state, getallcart: action.data, loading: false };
    }
    case Clear_All_Cart: {
      return { ...state, clearall: action.data, loading: false };
    }
    case Clear_One_Cart: {
      return { ...state, clearone: action.data, loading: false };
    }
    case Update_Cart: {
      return { ...state, updatecount: action.data, loading: false };
    }
    case Add_Coupon: {
      return { ...state, addcoupon: action.data, loading: false };
    }

    default: {
      return state;
    }
  }
};
