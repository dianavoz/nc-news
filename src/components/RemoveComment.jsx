import { deleteComment } from "../utils/api";
import { useState } from "react";
const RemoveComment = ({ comment_id, setComment }) => {
  const [err, setErr] = useState(null);
  const removeComment = () => {
    setErr(null);
    setComment((currentComment) => {
      return currentComment.filter(
        (comment) => comment_id !== comment.comment_id
      );
    });
    deleteComment(comment_id).catch((err) => {
      setErr("Sorry, something went wrong!");
    });
  };

  if (err) return <p>{err}</p>;

  return (
    <button
      onClick={() => {
        removeComment(comment_id);
      }}
    >
      Delete
    </button>
  );
};
export default RemoveComment;
