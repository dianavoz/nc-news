import { useState } from 'react';

import { deleteComment } from '../utils/api';

//styling
import { Button } from '@mui/material';

const RemoveComment = ({ comment_id, setComments }) => {
  const [err, setErr] = useState(null);

  const removeComment = () => {
    setErr(null);

    deleteComment(comment_id).catch((err) => {
      setErr('Sorry, something went wrong!');
    });

    setComments((currentComment) => {
      const commentsCopy = [...currentComment];
      return commentsCopy.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
  };

  if (err) return <p>{err}</p>;

  return (
    <Button
      variant='contained'
      size='small'
      onClick={() => {
        removeComment(comment_id);
      }}
      style={{ backgroundColor: '#496175', color: '#dedede' }}
    >
      Delete
    </Button>
  );
};
export default RemoveComment;
