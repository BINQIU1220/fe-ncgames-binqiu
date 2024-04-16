import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import "../styling/Deleted.css";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="deleted-page">
      {/*      <img
        className="deleted-img"
        src="https://static.vecteezy.com/system/resources/previews/004/968/615/non_2x/file-deleted-successfully-throw-it-away-trash-concept-illustration-flat-design-eps10-simple-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
        alt="Submission success"
      ></img> */}
      <div className="delete-msg">
        <h1>Delete successful!</h1>
        <p>The comment has been deleted successfully.</p>
      </div>
      <button
        className="back-to-review-btn-successpage other-buttons"
        onClick={() => {
          navigate(`/reviews/review_id/${location.pathname.split("/")[2]}`);
        }}
      >
        <RiArrowGoBackFill /> Back to Review
      </button>
    </div>
  );
};

export default Success;
