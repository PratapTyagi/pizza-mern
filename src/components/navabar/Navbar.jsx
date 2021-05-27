import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>вσѕтση ριzzα</h2>
        </Link>
      </div>
      <div className="right">
        <h5 className="login">Login</h5>

        <Link className="cart" to="/cart" style={{ textDecoration: "none" }}>
          <h6>Cart {cartItems.length}</h6>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
