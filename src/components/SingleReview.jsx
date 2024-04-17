import { getReviewsByIdy, postComment } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Expandible from "./Expandible";
import PatchVotes from "./PatchVotes";
import ShowAllComments from "./ShowAllComments";
import "../styling/SingleReview.css";

const SingleReview = () => {
  const reviewId = window.location.href.split("/");
  const [singleReview, setSingleReview] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [visible, setVisible] = useState(false);
  const review_id = reviewId[reviewId.length - 1];
  const navigate = useNavigate();

  useEffect(() => {
    getReviewsByIdy(review_id).then((res) => {
      setSingleReview(res);
    });
  }, [review_id, navigate]);

  const handleSubmission = (event) => {
    event.preventDefault();
    navigate(`/reviews/${review_id}/comments/success`);
    postComment(newComment, review_id);
  };

  const handleComments = () => {
    visible === false ? setVisible(true) : setVisible(false);
  };

  return (
    <div>
      {singleReview.map((prop) => {
        return (
          <div key={prop.review_id}>
            <section id="single-review-options">
              <button
                className="show-comments-btn other-buttons"
                onClick={() => {
                  handleComments();
                }}
              >
                {visible === false ? "show comments" : "hide comments"}
              </button>
              <button
                className="show-all-review-btn other-buttons"
                onClick={() => navigate(`/reviews/category_name/all`)}
              >
                All Reviews
              </button>
            </section>
            <div className="single-review-card">
              <img
                className="single-review-image"
                alt="Review"
                src={prop.review_img_url}
              ></img>

              <div className="singlereview-cardinfo">
                <form className="add-comment-form" onSubmit={handleSubmission}>
                  <input
                    className="add-comment-input"
                    type="text"
                    name="comment-input"
                    placeholder="Add your comment!"
                    required
                    onChange={(event) => {
                      setNewComment(event.target.value);
                    }}
                  ></input>
                  <button
                    className="submit-comment-btn other-buttons"
                    type="submit"
                  >
                    Go!
                  </button>
                </form>

                <div className="single-review-info">
                  <h3>{prop.title}</h3>
                  <p id="single-review-body">
                    {prop.review_body.slice(0, 125)}
                    <Expandible>
                      {prop.review_body.slice(125, prop.review_body.length - 1)}
                    </Expandible>
                  </p>
                  <p>
                    Designer: {prop.designer}{" "}
                    <span id="single-review-category">
                      Category: {prop.category}{" "}
                    </span>
                  </p>
                  <PatchVotes
                    previsouVotes={prop.votes}
                    review_id={prop.review_id}
                  />
                  <p></p>
                  <ShowAllComments visible={visible} id={prop.review_id} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleReview;
