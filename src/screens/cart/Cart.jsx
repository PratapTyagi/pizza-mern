import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems, "abccccccc");
  return (
    <div className="cart">
      <div className="cart__shoppingCart">
        <h4>Shopping Cart</h4>
        {cartItems.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            varient={item.varient}
          />
        ))}
      </div>
      <div className="cart__subtotal">
        <h4>Subtotal: ₹ 333</h4>
        <button>Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
