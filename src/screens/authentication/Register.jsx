import "./Register.css";
const Register = () => {
  return (
    <div className="register_page">
      <div className="register">
        <h3>Register</h3>
        <form className="register__form">
          <p>Your name</p>
          <input type="text" placeholder="Full Name" />

          <p>Email</p>
          <input type="text" placeholder="Email" />

          <p>Password</p>
          <input type="password" placeholder="Password" />

          <p>Confirm Password</p>
          <input type="password" placeholder="Confirm Password" />

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
