import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prevPath, setPrevPath] = useState("/");

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        userAvatar,
        setUserAvatar,
        isLoggedIn,
        setIsLoggedIn,
        prevPath,
        setPrevPath,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
