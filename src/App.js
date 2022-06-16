import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InitialHome from "./components/InitialHome";
import SingleReview from "./components/SingleReview";
import ErroHandle from "./components/ErroHandle";
import ShowAllComments from "./components/ShowAllComments";
import Success from "./components/Success";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<InitialHome />} />
          <Route
            path="/reviews/category_name/:category_name"
            element={<InitialHome />}
          />
          <Route
            path="/reviews/review_id/:review_id"
            element={<SingleReview />}
          />
          <Route
            path="/reviews/comments/:review_id"
            element={<ShowAllComments />}
          />
          <Route
            path="/reviews/:review_id/comments/success"
            element={<Success />}
          />
          <Route path="/404" element={<ErroHandle error={404} />} />
          <Route
            path="/othererrors"
            element={
              <ErroHandle error={"Something went wrong, please try again."} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
