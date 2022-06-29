import { getAllCommentsById, deleteCommentsById } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { dateFormater } from "../utils/dateFormater";

const ShowAllComments = () => {
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();
  let { review_id } = useParams();

  useEffect(() => {
    getAllCommentsById(review_id).then((res) => {
      setComments(res);
    });
  }, [review_id]);

  if (!comments) {
    navigate("/oops");
  }
  return (
    <>
      <div className="all-comments-upper-options">
        <button
          className="back-to-review-btn"
          onClick={() => {
            navigate(`/reviews/review_id/${review_id}`);
          }}
        >
          Back to Review
        </button>
        <button className="show-all-review-btn" onClick={() => navigate("/")}>
          Show All Reivews
        </button>
      </div>

      {comments.map((prop, index) => {
        return (
          <section key={index} className="comments-container">
            <div className="single-comment-content">
              <p className="single-comment-body">{prop.body}</p>
            </div>

            <div className="single-comment-otherinfo">
              {`${dateFormater(prop.created_at).date} at ${
                dateFormater(prop.created_at).time
              } by ${prop.author}`}{" "}
              <button
                className="delete-comment-btn"
                onClick={() => {
                  navigate(`/reviews/${prop.review_id}/comments/deleted`);
                  deleteCommentsById(prop.comment_id);
                }}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ShowAllComments;
