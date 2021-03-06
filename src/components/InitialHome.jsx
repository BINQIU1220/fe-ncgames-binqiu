import { useEffect, useState } from "react";
import "../styling/InitialHome.css";
import IsCatogory from "./IsCatogory";
import { useNavigate, useParams } from "react-router-dom";
import { getReviews, getCategories, getReviewsByCategory } from "../utils/api";
import { FaArrowDown, FaArrowUp, FaShareAlt } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { dateFormater } from "../utils/dateFormater";

const InitialHome = () => {
  const [reviews, setReviews] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortBy, setSortBy] = useState("category");
  const [orderBy, setOrderBy] = useState("DESC");
  const [isCategory, setIsCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let { category_name, sort_by, order } = useParams();
  let urlToShare = window.location.href;

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

  useEffect(() => {
    setIsLoading(true);

    getCategories().then((res) => {
      setCategory(res);
    });
  }, [isCategory, sortBy, orderBy]);

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
              setSortBy(event.target.value);
              if (category_name === undefined || category_name === "all") {
                navigate(`/reviews/all/sort_by/${event.target.value}`);
              } else {
                navigate(
                  `/reviews/${category_name}/sort_by/${event.target.value}`
                );
              }
            }}
          >
            <option value="">Sort by</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </form>

        <div id="order-arrows">
          <button
            id="order-asc"
            onClick={() => {
              setOrderBy("ASC");
              if (category_name === undefined || category_name === "all") {
                navigate(`/reviews/all/sort_by/${sortBy}/order/ASC`);
              } else {
                navigate(
                  `/reviews/${category_name}/sort_by/${sortBy}/order/ASC`
                );
              }
            }}
          >
            <FaArrowUp />
          </button>

          <button
            id="order-desc"
            onClick={() => {
              setOrderBy("DESC");
              if (category_name === undefined || category_name === "all") {
                navigate(`/reviews/all/sort_by/${sortBy}/order/DESC`);
              } else {
                navigate(
                  `/reviews/${category_name}/sort_by/${sortBy}/order/DESC`
                );
              }
            }}
          >
            <FaArrowDown />
          </button>

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
