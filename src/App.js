import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import InitialHome from "./components/InitialHome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <InitialHome />
      </div>
    </BrowserRouter>
  );
}

export default App;
