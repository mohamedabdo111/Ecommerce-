import {
  Get_All_Orders,
  Get_Specific_Order,
  Update_Deliver,
  Update_Pay,
  create_Order,
} from "../types";

const intialvalue = {
  createorder: [],
  getallorders: [],
  spicificorder: [],
  updatepay: [],
  deliver: [],
  loading: true,
};

export const ChcekOutReducer = (state = intialvalue, action) => {
  switch (action.type) {
    case create_Order: {
      return { ...state, createorder: action.data, loading: false };
    }
    case Get_All_Orders: {
      return { ...state, getallorders: action.data, loading: false };
    }
    case Get_Specific_Order: {
      return { ...state, spicificorder: action.data, loading: false };
    }
    case Update_Pay: {
      return { ...state, updatepay: action.data, loading: false };
    }
    case Update_Deliver: {
      return { ...state, deliver: action.data, loading: false };
    }
    default: {
      return { state };
    }
  }
};
