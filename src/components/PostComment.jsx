import { useState, useContext } from 'react';
import { toast } from 'react-toastify';

import { UserContext } from '../context/User';
import { postComment } from '../utils/api';

import { TextField } from '@mui/material';

const PostComment = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);

  const [newComment, setNewComment] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username) {
      postComment(article_id, newComment, user).then((postedComment) => {
        setComments((currentComments) => {
          return [postedComment, ...currentComments];
        });
      });

      setNewComment('');
    } else {
      toast.warning('You must be logged in to comment', { theme: 'light' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='card-form-comment'>
      <TextField
        fullWidth
        variant='standard'
        label='Add a comment...'
        id='fullWidth'
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />
      <button>enter</button>
    </form>
  );
};
export default PostComment;
