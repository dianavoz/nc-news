import { useState } from 'react';
import { patchArticleVote } from '../utils/api';

import { ThumbUpOffAlt } from '@mui/icons-material';

const ArticleVote = ({ article_id, vote }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  const incrementVoteCount = () => {
    setErr(null);
    setVotes((currentVote) => currentVote + 1);
    patchArticleVote(article_id, vote + 1).catch(() => {
      setVotes((currentVote) => currentVote - 1);
      setErr('Sorry, something went wrong!');
    });
  };

  if (err) return <p>{err}</p>;

  return (
    <div className='vote'>
      <button
        variant='text'
        className='btn-vote'
        onClick={incrementVoteCount}
        disabled={votes}
      >
        <ThumbUpOffAlt fontSize='large' />
      </button>
      <span>{vote + votes}</span>
    </div>
  );
};
export default ArticleVote;
