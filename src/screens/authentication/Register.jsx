import { useState, useEffect } from "react";

import "./Register.css";
const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const register = () => {
    if (password !== cpassword) {
      alert("Password not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
    }
  };

  return (
    <div className="register_page">
      <div className="register">
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

          <button type="submit" onClick={register}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
