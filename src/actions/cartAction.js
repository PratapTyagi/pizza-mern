export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  const cartItem = {
    name: pizza.name,
    id: pizza._id,
    pizza: pizza.image,
    quantity: Number(quantity),
    varient,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  if (cartItem.quantity > 10) {
    alert("You can't add more than 10 pizzas");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }
  const item = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(item));
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const item = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(item));
};
