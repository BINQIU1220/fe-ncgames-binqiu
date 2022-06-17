import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styling/ErrorHandle.css";

const ErroHandle = ({ error }) => {
  const navigate = useNavigate();

  if (error === 404) {
    return (
      <div className="error-404">
        <img
          className="error-404-img"
          src="https://i.ibb.co/h7zxBwy/404.png"
          alt="Error 404 image"
        ></img>
        <button
          className="back-home-btn-errorpage"
          onClick={() => {
            navigate("/");
          }}
        >
          <AiFillHome /> Back Home
        </button>
      </div>
    );
  } else if ((error = "Something went wrong, please try again."))
    return (
      <div className="error-others">
        <img
          className="error-others-img"
          src="https://i.pinimg.com/originals/b8/b8/f7/b8b8f787c454cf1ded2d9d870707ed96.png"
          alt="Error others image"
        ></img>
        <button
          className="back-home-btn-errorpage"
          onClick={() => {
            navigate("/");
          }}
        >
          <AiFillHome /> Back Home
        </button>
      </div>
    );
};

export default ErroHandle;
