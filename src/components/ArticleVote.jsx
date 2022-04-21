import { useState } from "react";

import { patchArticleVote } from "../utils/api";

const ArticleVote = ({ article_id, vote }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  const incrementVoteCount = () => {
    setErr(null);
    setVotes((currentVote) => currentVote + 1);
    patchArticleVote(article_id, vote + 1).catch(() => {
      setVotes((currentVote) => currentVote - 1);
      setErr("Sorry, something went wrong!");
    });
  };
  const decrementVoteCount = () => {
    setErr(null);
    setVotes((currentVote) => currentVote - 1);
    patchArticleVote(article_id, vote - 1).catch(() => {
      setVotes((currentVote) => currentVote - 2);
      setErr("Sorry, something went wrong!");
    });
  };

  if (err) return <p>err</p>;
  return (
    <div className="vote">
      <p>Votes:{vote + votes}</p>
      <button onClick={incrementVoteCount}>Vote +</button>
      <button onClick={decrementVoteCount}>Vote - </button>
    </div>
  );
};
export default ArticleVote;
