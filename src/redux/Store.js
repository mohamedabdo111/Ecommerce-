import { createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./reducers/RootReducer";
const intial = {};
const middelware = [thunk];
export const Store = createStore(
  RootReducer,
  intial,
  composeWithDevTools(applyMiddleware(...middelware))
);
