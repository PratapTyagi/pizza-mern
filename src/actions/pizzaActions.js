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

export const filterPizza = (searchKey, category) => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  let filteredPizza;

  try {
    const { data } = await axios.get("/api/pizzas/getpizzas");
    filteredPizza = data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey)
    );
    if (category != "all") {
      filteredPizza = data.filter(
        (pizza) => pizza.category.toLowerCase() == category
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filteredPizza });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });

  try {
    const res = await axios.post("/api/pizzas/addpizzas", pizza);
    dispatch({ type: "ADD_PIZZA_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error });
  }
};
