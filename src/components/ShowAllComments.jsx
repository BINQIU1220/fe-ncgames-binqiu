import { getAllCommentsById, deleteCommentsById } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const ShowAllComments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let { review_id } = useParams();

  useEffect(() => {
    setError(null);

    getAllCommentsById(review_id)
      .then((res) => {
        if (res === undefined) {
          setError(404);
          navigate("/404");
        } else setComments(res);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setError(400);
          navigate("/othererrors");
        } else if (err.response.status === 404) {
          setError(404);
          navigate("/404");
        }
      });
  }, [review_id]);

  return (
    <>
      <button
        id="back-to-review-btn"
        onClick={() => {
          navigate(`/reviews/review_id/${review_id}`);
        }}
      >
        Back to Review
      </button>
      <button className="show-all-review-btn" onClick={() => navigate("/")}>
        Show All Reivews
      </button>
      {comments.map((prop, index) => {
        return (
          <section className="comments-container">
            <p className="single-comment" id={`comment-body-${index}`}>
              {prop.author.toUpperCase()}: {prop.body}
            </p>
            <button
              id={`delete-btn-${index}`}
              onClick={() => {
                navigate(`/reviews/${prop.review_id}/comments/deleted`);
                deleteCommentsById(prop.comment_id);
              }}
            >
              <MdDeleteOutline />
            </button>
          </section>
        );
      })}
    </>
  );
};

export default ShowAllComments;
