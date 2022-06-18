import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styling/ErrorHandle.css";

const ErroHandle = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="error-others">
      <img
        className="error-others-img"
        src="https://i.pinimg.com/originals/b8/b8/f7/b8b8f787c454cf1ded2d9d870707ed96.png"
        alt="Error others"
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
