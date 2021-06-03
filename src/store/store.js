import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getAllPizzaReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  editPizzaReducer,
} from "../reducers/pizzaReducers";
import { cartReducer } from "../reducers/cartReducer";
import {
  registerUserReducer,
  loginUserReducer,
  getAllUsersReducer,
} from "../reducers/userReducer";
import {
  placeOrderReducer,
  getOrdersReducer,
  getAllOrdersReducer,
} from "../reducers/orderReducer";

const finalReducer = combineReducers({
  getAllPizzaReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
  placeOrderReducer,
  getOrdersReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  editPizzaReducer,
  getAllOrdersReducer,
  getAllUsersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems,
  },
  loginUserReducer: {
    currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
