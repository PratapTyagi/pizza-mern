import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  return (
    <div className="navbar">
      <div className="logo">
        <h2>вσѕтση ριzzα</h2>
      </div>
      <div className="right">
        <h5 className="login">Login</h5>
        <h5 className="cart">Cart {cartItems.length}</h5>
      </div>
    </div>
  );
};

export default Navbar;
