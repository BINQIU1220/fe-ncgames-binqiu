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
  const [sort, setSort] = useState("category");
  const [order, setOrder] = useState("DESC");
  const [isCategory, setIsCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let { category_name } = useParams();
  let urlToShare = window.location.href;

  useEffect(() => {
    setIsLoading(true);

    if (!category_name && category_name !== "all") {
      getReviewsByCategory(category_name, order, sort).then((res) => {
        setReviews(res);
        setIsLoading(false);
      });
    } else if (category_name === "all") {
      getReviews(order, sort).then((res) => {
        setReviews(res);
        setIsLoading(false);
      });
    } else {
      getReviewsByCategory(category_name, order, sort).then((res) => {
        setReviews(res);
        setIsLoading(false);
      });
    }
  }, [category_name, sort, order, navigate]);

  useEffect(() => {
    setIsLoading(true);

    getCategories().then((res) => {
      setCategory(res);
    });
  }, [isCategory, sort, order]);

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
          <select
            id="sort-name"
            name="sort-name"
            defaultValue=""
            onChange={(event) => {
              setSort(event.target.value);
              if (category_name === undefined || category_name === "all") {
                navigate(`/reviews/sort_by/${event.target.value}`);
              } else {
                navigate(
                  `/reviews/${category_name}/sort_by/${event.target.value}`
                );
              }
            }}
          >
            <option value="">Order By</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </form>

        <div id="order-arrows">
          <button
            id="order-asc"
            onClick={() => {
              setOrder("ASC");
            }}
          >
            <FaArrowUp />
          </button>

          <button
            id="order-desc"
            onClick={() => {
              setOrder("DESC");
            }}
          >
            <FaArrowDown />
          </button>
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
              <div className="vote-count">Votes: {review.votes}</div>
              <div className="comment-count">
                Comments: {review.comment_count}
              </div>
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
