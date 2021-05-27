import axios from "axios";
export const getAllPizza = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const { data } = await axios.get("/api/pizzas/getpizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};
