import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";

import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

import { Link } from "react-router-dom";

import "./Login.css";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginUserReducer);

  console.log(loginState);

  const { loading, error } = loginState;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const login = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    dispatch(loginUser(userDetails));
    setemail("");
    setpassword("");
  };

  return (
    <div className="login_page">
      <div className="login">
        {loading && <Loading />}
        {error && <Error error=" Invalid information" />}
        <h3>Login</h3>
        <form className="login__form">
          <p>Email</p>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />

          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <button type="submit" onClick={login}>
            Login
          </button>
        </form>
        <p className="register__user">
          Don't have an account
          <Link to="/register" style={{ textDecoration: "none" }}>
            <strong className="register__user__signUp"> Sign Up</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
