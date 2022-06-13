import { useEffect, useState } from "react";
import "../styling/InitialHome.css";
import { getReviews } from "../utils/api";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";

const InitialHome = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getReviews().then((res) => {
      setReviews(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <body>
        <section id="initialhome-options">
          <form id="slect-category">
            <select id="category-name" name="category-name">
              <option value="">Select a category</option>
            </select>
          </form>
          <form id="select-sort">
            <select id="sort-name" name="sort-name">
              <option value="">Sort By</option>
            </select>
          </form>
          <div id="order-arrows">
            <FaArrowUp id="order-asc" />
            <FaArrowDown id="order-des" />
          </div>
        </section>

        <section className="reviews-list">
          {reviews.map((review) => {
            return (
              <div className="review-card" key={review.review_id}>
                <img
                  src={review.review_img_url}
                  alt="Review image"
                  className="review-image"
                />
                <div className="review-title">{review.title}</div>
                <div className="review-votes-comments">
                  Votes: {review.votes} Comments: {review.votes}
                </div>
                <div id="vote-icons">
                  <GoThumbsup id="thumb-up" />
                  <GoThumbsdown id="thumb-down" />
                </div>
                <button id="more-info">More</button>
              </div>
            );
          })}
        </section>
      </body>
    </main>
  );
};

export default InitialHome;
