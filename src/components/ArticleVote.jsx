import { useState } from "react";

import { patchArticleVote } from "../utils/api";

const ArticleVote = ({ article_id, vote }) => {
  const [votes, setVotes] = useState(0);

  const incrementVoteCount = () => {
    setVotes((currentVote) => currentVote + 1);
    patchArticleVote(article_id, vote + 1).catch(() => {
      setVotes((currentVote) => currentVote - 1);
    });
  };
  const decrementVoteCount = () => {
    setVotes((currentVote) => currentVote - 1);
    patchArticleVote(article_id, vote - 1).catch(() => {
      setVotes((currentVote) => currentVote - 2);
    });
  };

  return (
    <div className="vote">
      <p>Votes:{vote + votes}</p>
      <button onClick={incrementVoteCount} disabled={votes > 0}>
        Upvote
      </button>
      <button onClick={decrementVoteCount}>Downvote</button>
    </div>
  );
};
export default ArticleVote;
