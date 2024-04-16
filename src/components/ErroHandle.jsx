import "../styling/ErrorHandle.css";

const ErroHandle = ({ error }) => {
  return (
    <div className="error-others">
      {/*  <img
        className="error-others-img"
        src="https://i.pinimg.com/originals/b8/b8/f7/b8b8f787c454cf1ded2d9d870707ed96.png"
        alt="Error others"
      ></img> */}
      <div className="error-msg">
        <h1 className="errmsg1">Oops.</h1>
        <p className="errmsg2">
          The page you are trying to reach doesn't exist.
        </p>
        <p className="errmsg3">
          Go back to <a href="/">homepage</a> or{" "}
          <a href="mailto:ezio12a@hotmail.com"> contact me</a> about to problem.
        </p>
      </div>
    </div>
  );
};

export default ErroHandle;
