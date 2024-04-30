import {
  Creat_signUp,
  Login_Reducer,
  Post_VerifyPassword,
  Reset_password,
  forgit_password,
} from "../types";

const intialstate = {
  createuser: [],
  loginaccoutn: [],
  forgitpass: [],
  verify: [],
  reset: [],
  loading: true,
};
export const AuthReducer = (state = intialstate, action) => {
  switch (action.type) {
    case Creat_signUp: {
      return {
        ...state,
        createuser: action.data,
        loading: false,
      };
    }
    case Login_Reducer: {
      return { ...state, loginaccoutn: action.data, loading: false };
    }
    case forgit_password: {
      return { ...state, forgitpass: action.data, loading: false };
    }
    case Post_VerifyPassword: {
      return { ...state, verify: action.data, loading: false };
    }
    case Reset_password: {
      return { ...state, reset: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
