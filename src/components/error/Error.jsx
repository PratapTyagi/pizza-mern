import "./Error.css";
const Error = ({ error }) => {
  return (
    <div
      className="error alert alert-danger"
      role="alert"
      style={{ margin: "auto", marginTop: "10%", color: "black" }}
    >
      <p>***{error}</p>
    </div>
  );
};

export default Error;
