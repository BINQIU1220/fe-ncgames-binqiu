import { getAllCommentsById, deleteCommentsById } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const ShowAllComments = () => {
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();
  let { review_id } = useParams();

  useEffect(() => {
    getAllCommentsById(review_id).then((res) => {
      setComments(res);
    });
  }, [review_id, navigate]);

  return (
    <>
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
      {comments.map((prop, index) => {
        return (
          <section key={index} className="comments-container">
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
