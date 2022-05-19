const CommentsCard = ({ comment }) => {
  return (
    <div className='card comments-card'>
      <p>{comment.body}</p>
      <span>
        <span className='comments-span-by'>by</span> {comment.author} |{' '}
        {comment.votes} comments | {comment.created_at.slice(0, 10)}
      </span>
    </div>
  );
};
export default CommentsCard;
