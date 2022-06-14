import { useEffect, useState } from "react";
import "../styling/InitialHome.css";
import { getReviews, getCategories, getReviewsByCategory } from "../utils/api";
import { FaArrowDown, FaArrowUp, FaShareAlt } from "react-icons/fa";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { CopyToClipboard } from "react-copy-to-clipboard";

const InitialHome = () => {
  const [reviews, setReviews] = useState([]);
  const [category, setCategory] = useState([]);
  const [isCategory, setIsCategory] = useState([]);
  const [urlToShare, setUrlToShare] = useState(
    "https://be-nc-games-binqiu.herokuapp.com/api/reviews"
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (category.length > 1 || category.length === 0 || category[0] === "all") {
      getReviews()
        .then((res) => {
          setReviews(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setUrlToShare(
        `https://be-nc-games-binqiu.herokuapp.com/api/reviews/${category[0]}`
      );

      getReviewsByCategory(category[0])
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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(urlToShare, "<<<<ulr in outside");
  return (
    <main>
      <section id="initialhome-options">
        <div id="slect-category">
          <select
            id="category-name"
            name="category"
            defaultValue=""
            onChange={(event) => {
              setCategory([event.target.value]);
              setIsCategory([event.target.value]);
            }}
          >
            <option value="" key="ask-to-select">
              Select a category
            </option>
            <option value="all" key="all">
              Show all categories
            </option>
            {category.map((elem) => {
              return (
                <option value={elem.slug} key={elem.slug}>
                  {elem.slug}
                </option>
              );
            })}
          </select>
        </div>
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
    </main>
  );
};

export default InitialHome;
