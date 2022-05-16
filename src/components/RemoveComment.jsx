import { useState } from 'react';

import { deleteComment } from '../utils/api';

//styling
import { Button } from '@mui/material';

const RemoveComment = ({ comment_id, setComment }) => {
  const [err, setErr] = useState(null);

  const removeComment = () => {
    setErr(null);

    setComment((currentComment) => {
      const commentsCopy = [...currentComment];
      return commentsCopy.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });

    deleteComment(comment_id).catch((err) => {
      setErr('Sorry, something went wrong!');
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
    >
      Delete
    </Button>
  );
};
export default RemoveComment;
