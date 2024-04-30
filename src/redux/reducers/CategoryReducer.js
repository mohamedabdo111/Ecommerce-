import { All_CATEGORES, Get_One_Category, Post_CATEGORES } from "../types";
const intialstate = { data: [], onecategory: [], loading: true };
export const CategoryReducer = (state = intialstate, action) => {
  switch (action.type) {
    case All_CATEGORES: {
      return { ...state, data: action.payload, loading: false };
    }
    case Get_One_Category: {
      return { onecategory: action.payload, loading: false };
    }
    case Post_CATEGORES: {
      return {
        data: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
