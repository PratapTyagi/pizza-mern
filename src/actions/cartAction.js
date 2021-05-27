export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  const cartItem = {
    name: pizza.name,
    id: pizza._id,
    pizza: pizza.image,
    quantity,
    varient,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
