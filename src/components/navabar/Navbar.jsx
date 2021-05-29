import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { currentUser } = useSelector((state) => state.loginUserReducer);
  return (
    <div className="navbar">
      <div className="logo">
        <Link className="link" to="/" style={{ textDecoration: "none" }}>
          <h2>вσѕтση ριzzα</h2>
        </Link>
      </div>
      <div className="right">
        {!currentUser ? (
          <Link className="link" to="/login" style={{ textDecoration: "none" }}>
            <h5>Login</h5>
          </Link>
        ) : (
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {currentUser.name}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Orders
              </a>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </div>
        )}
        <Link className="link" to="/cart" style={{ textDecoration: "none" }}>
          <h6 className="cart">Cart {cartItems.length}</h6>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
