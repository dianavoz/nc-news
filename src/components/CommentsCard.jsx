import { Typography } from '@mui/material';

const CommentsCard = ({ comment }) => {
  return (
    <div className='comments-card'>
      <Typography variant='body2' color='text.secondary' textAlign='left'>
        <p>{comment.body}</p>
        <span>
          <bold>by</bold> {comment.author} | {comment.votes}{' '}
          <bold>comments</bold> | {comment.created_at.slice(0, 10)}
        </span>
      </Typography>
    </div>
  );
};
export default CommentsCard;
