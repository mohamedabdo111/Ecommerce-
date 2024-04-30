import { Add_WishList, Get_All_WishList, Remove_WishList } from "../types";

const intialstate = {
  addwishlist: [],
  removewishlist: [],
  getallwishlist: [],
  loading: true,
};
export const WishListReducer = (state = intialstate, action) => {
  switch (action.type) {
    case Add_WishList: {
      return { ...state, addwishlist: action.data, loading: false };
    }
    case Remove_WishList: {
      return { ...state, removewishlist: action.data, loading: false };
    }
    case Get_All_WishList: {
      return { ...state, getallwishlist: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
