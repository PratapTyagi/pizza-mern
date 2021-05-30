import "./Success.css";
const Success = ({ success }) => {
  console.log(success);
  return (
    <div className="alert alert-success" role="alert">
      <p>{success}</p>
    </div>
  );
};

export default Success;
