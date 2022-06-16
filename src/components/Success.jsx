import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import "../styling/Success.css";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="success-page">
      <img
        className="success-img"
        src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png"
        alt="Submission success image"
      ></img>
      <button
        className="back-to-review-btn-successpage"
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
