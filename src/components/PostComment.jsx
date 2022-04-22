import { useState } from "react";
import { postComment } from "../utils/api";

const PostComment = ({ article_id, setComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    postComment(article_id, newComment).then((postedComment) => {
      setComment((currentComments) => {
        return [postedComment, ...currentComments];
      });
    });

    setNewComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />
      <button>Post</button>
    </form>
  );
};
export default PostComment;
