const CommentsCard = ({ comment }) => {
  return (
    <div className="comments-card">
      <p>{comment.body}</p>
      <span>{comment.created_at}</span>
      <span>{comment.author}</span>
      <span>{comment.votes}</span>
    </div>
  );
};
export default CommentsCard;
