import {
  DeleteProduct,
  Error,
  Get_All_Product,
  Get_Product_Category,
  Get_Product_Details,
  Get_product_would_like,
  Post_Product,
  UpdateProduct,
} from "../types";
const intialState = {
  data: [],
  homepage: [],
  details: [],
  wouldLike: [],
  DeleteProduct: [],
  updateprodut: [],
  productCategory: [],
  loading: true,
};

export const ProductReducer = (state = intialState, action) => {
  switch (action.type) {
    case Post_Product: {
      return { ...state, product: action.payload, loading: false };
    }
    case Get_All_Product: {
      return {
        ...state,
        product: action.payload,
        homepage: action.payload,
        loading: false,
      };
    }
    case DeleteProduct: {
      return {
        ...state,
        DeleteProduct: action.payload,
        loading: false,
      };
    }
    case Get_Product_Details: {
      return {
        details: action.payload,
        loading: false,
      };
    }
    case Get_product_would_like: {
      return {
        ...state,
        wouldLike: action.payload,
        loading: false,
      };
    }
    case UpdateProduct: {
      return {
        ...state,
        updateprodut: action.payload,
        loading: false,
      };
    }
    case Get_Product_Category: {
      return {
        ...state,
        productCategory: action.payload,
        loading: false,
      };
    }

    case Error: {
      return { loading: true, product: action.payload };
    }
    default: {
      return state;
    }
  }
};
