import { useEffect, useState } from "react";
import "../styling/InitialHome.css";
import IsCatogory from "./IsCatogory";
import { useNavigate, useParams } from "react-router-dom";
import { getReviews, getCategories, getReviewsByCategory } from "../utils/api";
import { FaArrowDown, FaArrowUp, FaShareAlt } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const InitialHome = () => {
  const [reviews, setReviews] = useState([]);
  const [category, setCategory] = useState([]);
  const [isCategory, setIsCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(0);
  const navigate = useNavigate();
  let { category_name } = useParams();

  let urlToShare = window.location.href;

  useEffect(() => {
    setIsLoading(true);
    setError(0);
    if (category_name && category.length === 0 && category_name !== "all") {
      getReviewsByCategory(category_name)
        .then((res) => {
          setReviews(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(404);
          setIsLoading(false);
          navigate("/404");
        });
    } else if (category_name === "all") {
      getReviews()
        .then((res) => {
          setReviews(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getReviewsByCategory(category_name)
        .then((res) => {
          setReviews(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isCategory]);

  useEffect(() => {
    setIsLoading(true);

    getCategories().then((res) => {
      setCategory(res);
    });
  }, [isCategory]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <section id="initialhome-options">
        <IsCatogory
          category={category}
          setCategory={setCategory}
          setIsCategory={setIsCategory}
        />

        <form id="select-sort">
          <select id="sort-name" name="sort-name">
            <option value="">Sort By</option>
          </select>
        </form>
        <div id="order-arrows">
          <FaArrowUp id="order-asc" />
          <FaArrowDown id="order-des" />
        </div>
        <div className="share-btn">
          <CopyToClipboard text={urlToShare}>
            <button>
              <FaShareAlt />
            </button>
          </CopyToClipboard>
        </div>
      </section>

      <section className="reviews-list">
        {reviews.map((review) => {
          return (
            <div className="review-card" key={review.review_id}>
              <img
                src={review.review_img_url}
                alt="Review"
                className="review-image"
              />
              <div className="review-title">{review.title}</div>

              <button
                id="more-info-btn"
                key={review.review_id}
                onClick={() => {
                  navigate(`/reviews/review_id/${review.review_id}`);
                }}
              >
                More
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default InitialHome;
