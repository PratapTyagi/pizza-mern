import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/userActions";
import Error from "../../components/error/Error";
import Success from "../../components/success/Success";
import Loading from "../../components/loading/Loading";

import "./Register.css";
const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const state = useSelector((state) => state.registerUserReducer);

  const { loading, success, error } = state;

  const dispatch = useDispatch();

  const register = () => {
    if (password !== cpassword) {
      alert("Password not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
    }
  };

  return (
    <div className="register_page">
      <div className="register">
        {loading && <Loading />}
        {success && <Success success="User Registered Successfully" />}
        {error && <Error error="Email already registered" />}

        <h3>Register</h3>
        <form className="register__form">
          <p>Your name</p>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            autoComplete="false"
          />

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

          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setcpassword(e.target.value)}
            required
          />

          <button onClick={register}>Continue</button>
        </form>
        <p className="login__user">
          Already have an account
          <Link to="/login" style={{ textDecoration: "none" }}>
            <strong className="login__user__login"> Sign In</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
