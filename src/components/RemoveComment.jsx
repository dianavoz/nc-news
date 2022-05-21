import { useState, useContext } from 'react';

import { deleteComment } from '../utils/api';
import { UserContext } from '../context/User';

//styling
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

const RemoveComment = ({ comment_id, setComments, author }) => {
  const { user } = useContext(UserContext);

  const [err, setErr] = useState(null);

  const removeComment = () => {
    setErr(null);
    if (user.username === author) {
      deleteComment(comment_id).catch((err) => {
        setErr(err);
      });

      setComments((currentComment) => {
        const commentsCopy = [...currentComment];
        return commentsCopy.filter(
          (comment) => comment.comment_id !== comment_id
        );
      });
    } else {
      toast.error('You can only delete your own comments');
    }
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
