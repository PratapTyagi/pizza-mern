import { useSelector } from "react-redux";
import Checkout from "../../components/checkout/Checkout";
import "./Cart.css";
import CartItem from "./CartItem";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  const subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <div className="cart">
      <div className="cart__shoppingCart">
        <h4>Shopping Cart</h4>
        {cartItems.map((item) => (
          <CartItem
            key={item._id}
            image={item.pizza}
            item={item}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            varient={item.varient}
          />
        ))}
      </div>
      <div className="cart__subtotal">
        <h4>Subtotal: ₹ {subtotal}</h4>
        <Checkout subtotal={subtotal} />
      </div>
    </div>
  );
};

export default Cart;
