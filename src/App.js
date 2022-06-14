import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InitialHome from "./components/InitialHome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<InitialHome />} />
          <Route path="/:category" element={<InitialHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
