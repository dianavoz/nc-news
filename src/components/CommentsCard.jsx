import RemoveComment from "./RemoveComment";

const CommentsCard = ({ comment, setComment }) => {
  return (
    <div className="comments-card">
      <p>{comment.body}</p>
      <span>Date: {comment.created_at.slice(0, 10)}</span>
      <span>Written by: {comment.author}</span>
      <span>Votes: {comment.votes}</span>
      <RemoveComment comment_id={comment.comment_id} setComment={setComment} />
    </div>
  );
};
export default CommentsCard;
