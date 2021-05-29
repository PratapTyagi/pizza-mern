import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  return (
    <div className="navbar">
      <div className="logo">
        <Link className="link" to="/" style={{ textDecoration: "none" }}>
          <h2>вσѕтση ριzzα</h2>
        </Link>
      </div>
      <div className="right">
        <Link className="link" to="/login" style={{ textDecoration: "none" }}>
          <h5>Login</h5>
        </Link>

        <Link className="link" to="/cart" style={{ textDecoration: "none" }}>
          <h6 className="cart">Cart {cartItems.length}</h6>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
