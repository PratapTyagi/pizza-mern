import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
