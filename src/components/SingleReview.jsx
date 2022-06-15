import { getReviewsByIdy } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/SingleReview.css";

const SingleReview = () => {
  const reviewId = window.location.href.split("/");
  const [singleReview, setSingleReview] = useState([]);
  const review_id = reviewId[reviewId.length - 1];
  const navigate = useNavigate();

  useEffect(() => {
    getReviewsByIdy(review_id)
      .then((res) => {
        setSingleReview(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [review_id]);

  return (
    <>
      <section id="single-review-options">
        <button id="show-comments-btn">Show ALL Comments</button>{" "}
        <button
          id="show-all-review-btn"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Show All Reviews
        </button>
      </section>
      <section className="single-review-card">
        {singleReview.map((prop) => {
          return (
            <>
              <img
                className="single-review-image"
                alt="Review Image"
                src={prop.review_img_url}
              ></img>
              <div className="single-review-info">
                <h3>{prop.title}</h3>
                <p id="single-review-body">{prop.review_body}</p>
                <p>Category: {prop.category}</p>
                <p>Designer: {prop.designer}</p>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default SingleReview;
