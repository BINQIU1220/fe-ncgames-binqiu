import { patchVotesById } from "../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";

const PatchVotes = ({ previsouVotes, review_id }) => {
    const [votes, setVotes] = useState(previsouVotes)
    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    const thumbUp = () => {
        setVotes((currentVotes) => currentVotes + 1);
        setErr(null);
        patchVotesById(1, review_id).catch((err) => {
            setVotes((currentVotes) => currentVotes - 1);
            setErr('Something went wrong, please try again.');
            navigate("/othererrors")
        });
    };

    const thumbDown = () => {
        setVotes((currentVotes) => currentVotes - 1);
        setErr(null);
        patchVotesById(-1, review_id).catch(() => {
            setVotes((currentVotes) => currentVotes + 1);
            setErr('Something went wrong, please try again.');
            navigate("/othererrors")
        });
    };

    return (
        <div id="vote-icons">
            <GoThumbsup id="thumb-up" onClick={thumbUp} />
            <GoThumbsdown id="thumb-down" onClick={thumbDown} />
            <p id="single-review-votes">Total votes: {votes}</p>
        </div>
    )

}

export default PatchVotes;