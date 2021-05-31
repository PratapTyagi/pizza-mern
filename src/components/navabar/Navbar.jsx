import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";

import "./Navbar.css";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { currentUser } = useSelector((state) => state.loginUserReducer);

  const dispatch = useDispatch();
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
            <h6>Login</h6>
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
              <Link className="dropdown-item" to="/orders">
                Orders
              </Link>
              <Link
                className="dropdown-item"
                href="#"
                onClick={() => dispatch(logoutUser())}
              >
                Logout
              </Link>
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
