import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentsCard from "./CommentsCard";
import PostComment from "./PostComment";

const Comments = ({ article_id }) => {
  const [comments, setComment] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComment(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      <PostComment article_id={article_id} setComment={setComment} />
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentsCard comment={comment} setComment={setComment} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Comments;
