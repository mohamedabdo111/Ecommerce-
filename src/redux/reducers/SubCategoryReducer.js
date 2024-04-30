import { Error, Get_Subcategory, Post_SubCategory } from "../types";

const value = { Subcat: [], loading: true };

export const SubCategoryReducer = (state = value, action) => {
  switch (action.type) {
    case Post_SubCategory: {
      return { Subcat: action.data, loading: false };
    }
    case Get_Subcategory: {
      return { ...state, Subcat: action.data, loading: false };
    }
    case Error: {
      return { Subcat: action.data, loading: true };
    }
    default: {
      return state;
    }
  }
};
