import { getAllCommentsById, deleteCommentsById } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { dateFormater } from "../utils/dateFormater";

const ShowAllComments = (props) => {
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();

  let review_id = props.id;

  const username = window.localStorage.getItem("username");

  useEffect(() => {
    getAllCommentsById(review_id).then((res) => {
      setComments(res);
    });
  }, [review_id]);

  if (props.visible === true) {
    if (!comments) {
      return <p id="no-comment">No comments yet...</p>;
    }
    return (
      <>
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
                  className="delete-comment-btn other-buttons"
                  title={
                    prop.author === username
                      ? ""
                      : "You can only delete your own comments!"
                  }
                  disabled={prop.author === username ? false : true}
                  onClick={() => {
                    deleteCommentsById(prop.comment_id);
                    navigate(`/reviews/${prop.review_id}/comments/deleted`);
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
  }
};

export default ShowAllComments;
