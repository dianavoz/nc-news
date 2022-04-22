const CommentsCard = ({ comment }) => {
  return (
    <div className="comments-card">
      <p>{comment.body}</p>
      <span>Date: {comment.created_at.slice(0, 10)}</span>
      <span>Written by: {comment.author}</span>
      <span>Votes: {comment.votes}</span>
    </div>
  );
};
export default CommentsCard;
