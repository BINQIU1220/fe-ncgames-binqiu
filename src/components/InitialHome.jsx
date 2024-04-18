import { useEffect, useState } from "react";
import "../styling/InitialHome.css";
import { useNavigate, useParams } from "react-router-dom";
import { getReviews, getReviewsByCategory } from "../utils/api";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import Loading from "./Loading";
import { dateFormater } from "../utils/dateFormater";
import NavBar from "./NavBar";

const InitialHome = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let { category_name, sort_by, order } = useParams();

  useEffect(() => {
    setIsLoading(true);

    if (!category_name && category_name !== "all") {
      getReviewsByCategory(category_name, order, sort_by).then((res) => {
        setReviews(res);
        setIsLoading(false);
      });
    } else if (category_name === "all" || category_name === undefined) {
      getReviews(order, sort_by).then((res) => {
        setReviews(res);
        setIsLoading(false);
      });
    } else {
      getReviewsByCategory(category_name, order, sort_by).then((res) => {
        setReviews(res);
        setIsLoading(false);
      });
    }
  }, [category_name, sort_by, order, navigate]);

  if (isLoading) {
    return (
      <div>
        <Loading isLoading={isLoading} />
      </div>
    );
  }

  return (
    <div>
      <div className="header-container">
        <NavBar category_name={category_name} />
      </div>

      <div className="contents-container">
        <section className="reviews-list">
          {reviews.map((review) => {
            return (
              <div className="review-card" key={review.review_id}>
                <div>
                  <img
                    src={review.review_img_url}
                    alt="Review"
                    className="review-image"
                  />

                  <div className="review-title">{review.title}</div>

                  <div className="vote-comment">
                    <FiThumbsUp></FiThumbsUp>
                    {review.votes}
                    <BiCommentDetail></BiCommentDetail>
                    {review.comment_count}
                  </div>

                  <div className="created-at">
                    {`${dateFormater(review.created_at).date} at ${
                      dateFormater(review.created_at).time
                    } by ${review.owner}`}
                  </div>

                  <div className="category-homepage">
                    {review.category.toUpperCase()}
                  </div>
                </div>
                <div>
                  <button
                    className="other-buttons"
                    id="more-info-btn"
                    key={review.review_id}
                    onClick={() => {
                      navigate(`/reviews/review_id/${review.review_id}`);
                    }}
                  >
                    More
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default InitialHome;
