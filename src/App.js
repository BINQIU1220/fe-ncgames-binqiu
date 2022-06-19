import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InitialHome from "./components/InitialHome";
import SingleReview from "./components/SingleReview";
import ErroHandle from "./components/ErroHandle";
import ShowAllComments from "./components/ShowAllComments";
import Success from "./components/Success";
import Deleted from "./components/Deleted";

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
          <Route path="/reviews/sort_by/:sort_by" element={<InitialHome />} />
          <Route
            path="/reviews/all/sort_by/:sort_by"
            element={<InitialHome />}
          />
          <Route
            path="/reviews/all/sort_by/:sort_by/order/:order"
            element={<InitialHome />}
          />
          <Route
            path="/reviews/:category_name/sort_by/:sort_by"
            element={<InitialHome />}
          />
          <Route
            path="/reviews/:category_name/sort_by/:sort_by/order/:order"
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
          <Route
            path="/reviews/:review_id/comments/deleted"
            element={<Deleted />}
          />
          <Route path="*" element={<ErroHandle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
