import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  return (
    <div className="cart">
      <div className="cart__shoppingCart">
        <h4>Shopping Cart</h4>
        <div className="cart__items">
          <div className="cart__item__info">
            <p>name</p>
            <p>price:</p>
            <p>quantity</p>
          </div>
          <div className="cart__items__right">
            <img
              src="https://avatars.githubusercontent.com/u/45279411?v=4"
              alt="image"
            />
            <p>X</p>
          </div>
        </div>
      </div>
      <div className="cart__subtotal">
        <h4>Subtotal: ₹ 333</h4>
        <button>Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
