import {
  Change_Password,
  GetSpecific_Address,
  Get_Address,
  Post_Address,
  Update_Address,
  User_Edit_Info,
  remove_Address,
} from "../types";

const intialstate = {
  newadd: [],
  getadd: [],
  delelteadd: [],
  updateadd: [],
  specificaddress: [],
  useredit: [],
  editpass: [],
  loading: true,
};
export const UserAddressReducer = (state = intialstate, action) => {
  switch (action.type) {
    case Post_Address: {
      return { ...state, newadd: action.data, loading: false };
    }
    case Get_Address: {
      return { ...state, getadd: action.data, loading: false };
    }
    case remove_Address: {
      return { ...state, delelteadd: action.data, loading: false };
    }
    case Update_Address: {
      return { ...state, updateadd: action.data, loading: false };
    }
    case GetSpecific_Address: {
      return { ...state, specificaddress: action.data, loading: false };
    }
    case User_Edit_Info: {
      return { ...state, useredit: action.data, loading: false };
    }
    case Change_Password: {
      return { ...state, editpass: action.data, loading: false };
    }

    default: {
      return state;
    }
  }
};
