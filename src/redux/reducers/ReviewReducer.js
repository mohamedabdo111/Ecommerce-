import { fas } from "@fortawesome/free-solid-svg-icons";
import { Delete_Reviwe, Edit_Review, Get_Reviews, post_review } from "../types";

const intailstate = {
  createReview: [],
  getReviews: [],
  deltereview: [],
  editreview: [],
  loading: true,
};

export const ProductReviewReducer = (state = intailstate, action) => {
  switch (action.type) {
    case post_review: {
      return { ...state, createReview: action.data, loading: false };
    }
    case Get_Reviews: {
      return { ...state, getReviews: action.data, loading: false };
    }
    case Delete_Reviwe: {
      return { ...state, deltereview: action.data, loading: false };
    }
    case Edit_Review: {
      return { ...state, editreview: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
