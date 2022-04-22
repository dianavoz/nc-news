import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentsCard from "./CommentsCard";

const Comments = ({ article_id }) => {
  const [comments, setComment] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComment(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <h3>Loding...</h3>;

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentsCard comment={comment} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Comments;
