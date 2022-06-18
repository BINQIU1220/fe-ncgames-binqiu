import { patchVotesById } from "../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";

const PatchVotes = ({ previsouVotes, review_id }) => {
  const [votes, setVotes] = useState(previsouVotes);
  const [isDisbled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const thumbUp = () => {
    setIsDisabled(true);
    setVotes((currentVotes) => currentVotes + 1);
    patchVotesById(1, review_id).catch((err) => {
      setVotes((currentVotes) => currentVotes - 1);
      setErr("Something went wrong, please try again.");
      navigate("/othererrors");
    });
  };

  const thumbDown = () => {
    setIsDisabled(true);
    setVotes((currentVotes) => currentVotes - 1);
    patchVotesById(-1, review_id).catch(() => {
      setVotes((currentVotes) => currentVotes + 1);
      setErr("Something went wrong, please try again.");
      navigate("/othererrors");
    });
  };

  return (
    <>
      <p id="single-review-votes">Total votes: {votes}</p>
      <div id="vote-icons">
        <button id="thumb-up" disabled={isDisbled} onClick={thumbUp}>
          <GoThumbsup />
        </button>
        <button id="thumb-down" disabled={isDisbled} onClick={thumbDown}>
          <GoThumbsdown />
        </button>
      </div>
    </>
  );
};

export default PatchVotes;
