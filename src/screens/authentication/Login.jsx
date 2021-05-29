import "./Login.css";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userActions";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

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
  };

  return (
    <div className="login_page">
      <div className="login">
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
      </div>
    </div>
  );
};

export default Login;
