import { All_Brand, Post_Brand } from "../types";

const intialstate = { data: [], loading: true };
export const BrandReducer = (state = intialstate, action) => {
  switch (action.type) {
    case All_Brand: {
      return { ...state, data: action.payload, loading: false };
    }
    case Post_Brand: {
      return { data: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};
