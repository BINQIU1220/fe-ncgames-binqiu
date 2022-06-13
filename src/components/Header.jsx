import "../styling/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 id="header-welcome">Welcome to NC-Games</h1>
      <p id="header-user-name">Hello, Banana!</p>
      <img
        id="header-user-avatar"
        alt="User Avatar"
        src="https://findicons.com/files/icons/165/playground/128/banana.png"
      ></img>
    </div>
  );
};

export default Header;
