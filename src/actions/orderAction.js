import axios from "axios";
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const username = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post("/api/orders/placeorder", {
      token,
      subtotal,
      username,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED", payload: error });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  const currentUser = getState().loginUserReducer.currentUser;

  try {
    const { data } = await axios.post("/api/orders/getuserorders", {
      userId: currentUser._id,
    });
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: "GET_ALLORDERS_REQUEST" });

  try {
    const { data } = await axios.get("/api/orders/getallorders");
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_ALLORDERS_FAILED", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/orders/deliverorder", { orderid });
    alert("Order Delivered");
    const { data } = await axios.get("/api/orders/getallorders");
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: data });
  } catch (error) {
    console.error(error);
  }
};
