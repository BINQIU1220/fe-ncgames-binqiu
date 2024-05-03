import "../styling/ErrorHandle.css";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

function Loggedin() {
  const navigate = useNavigate();
  const { setLoggedInUser, setUserAvatar, setIsLoggedIn } =
    useContext(UserContext);
  return (
    <div className="error-others">
      <div className="error-msg">
        <h1 className="errmsg1">Hi there!</h1>
        <p className="errmsg2">
          Successfully signed in. You can go to{" "}
          <a
            href=""
            onClick={() => {
              setLoggedInUser(window.localStorage.getItem("username"));
              setUserAvatar(window.localStorage.getItem("avatar"));
              setIsLoggedIn(true);
              navigate("/reviews/category_name/all");
            }}
          >
            home
          </a>{" "}
          page now :).
        </p>
      </div>
    </div>
  );
}

export default Loggedin;
