import { getReviewsByIdy } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PatchVotes from "./PatchVotes";
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
        navigate("/404");
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
              <PatchVotes previsouVotes={prop.votes} review_id={prop.review_id} />
              <div className="single-review-info">
                <h3>{prop.title}</h3>
                <p id="single-review-body">{prop.review_body}</p>
                <p>Designer: {prop.designer} <span id="single-review-category">Category: {prop.category} </span></p>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default SingleReview;
