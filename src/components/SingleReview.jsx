import { getReviewsByIdy, postComment } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Expandible from "./Expandible";
import PatchVotes from "./PatchVotes";
import "../styling/SingleReview.css";

const SingleReview = () => {
  const reviewId = window.location.href.split("/");
  const [singleReview, setSingleReview] = useState([]);
  const [newComment, setNewComment] = useState("");
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

  const handleSubmission = (event) => {
    event.preventDefault();
    navigate(`/reviews/${review_id}/comments/success`);
    postComment(newComment, review_id);
  };

  return (
    <>
      {singleReview.map((prop) => {
        return (
          <>
            <section id="single-review-options">
              <button
                id="show-comments-btn"
                onClick={() => {
                  navigate(`/reviews/comments/${prop.review_id}`);
                }}
              >
                Show ALL Comments
              </button>
              <button
                className="show-all-review-btn"
                onClick={() => {
                  navigate(`/`);
                }}
              >
                Show All Reviews
              </button>
            </section>

            <img
              className="single-review-image"
              alt="Review Image"
              src={prop.review_img_url}
            ></img>

            <form className="add-comment-form" onSubmit={handleSubmission}>
              <input
                type="text"
                name="comment-input"
                placeholder="Enter your comment here!"
                required
                onChange={(event) => {
                  setNewComment(event.target.value);
                }}
              ></input>
              <button type="submit">Go!</button>
            </form>

            <PatchVotes previsouVotes={prop.votes} review_id={prop.review_id} />

            <div className="single-review-info">
              <h3>{prop.title}</h3>
              <p id="single-review-body">
                {prop.review_body.slice(0, 249)}
                <Expandible>
                  {prop.review_body.slice(249, prop.review_body.length - 1)}
                </Expandible>
              </p>
              <p>
                Designer: {prop.designer}{" "}
                <span id="single-review-category">
                  Category: {prop.category}{" "}
                </span>
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SingleReview;
