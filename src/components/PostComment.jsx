import { useState, useContext } from 'react';

import { UserContext } from '../context/User';
import { postComment } from '../utils/api';

import { TextField } from '@mui/material';

const PostComment = ({ article_id, setComment }) => {
  const { isLoggedIn } = useContext(UserContext);

  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    postComment(article_id, newComment, isLoggedIn).then((postedComment) => {
      setComment((currentComments) => {
        return [postedComment, ...currentComments];
      });
    });

    setNewComment('');
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
      <button>Add</button>
    </form>
  );
};
export default PostComment;
