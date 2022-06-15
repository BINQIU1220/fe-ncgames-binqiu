import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InitialHome from "./components/InitialHome";
import SingleReview from "./components/SingleReview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<InitialHome />} />
          <Route path="/reviews/category_name/:category_name" element={<InitialHome />} />
          <Route path="/reviews/review_id/:review_id" element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
//test for GIT
export default App;
