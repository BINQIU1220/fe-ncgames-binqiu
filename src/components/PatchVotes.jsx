import { patchVotesById } from "../utils/api";
import { useState } from "react";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";

const PatchVotes = ({ previsouVotes, review_id }) => {
    const [votes, setVotes] = useState(previsouVotes)

    const thumbUp = () => {
        setVotes((currentVotes) => currentVotes + 1);

        patchVotesById(1, review_id).catch(() => {
            setVotes((currentVotes) => currentVotes - 1);
        });
    };

    const thumbDown = () => {
        setVotes((currentVotes) => currentVotes - 1);

        patchVotesById(-1, review_id).catch(() => {
            setVotes((currentVotes) => currentVotes + 1);
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