import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/User';

import { getComments } from '../utils/api';

//components
import CommentsCard from './CommentsCard';
import PostComment from './PostComment';
import RemoveComment from './RemoveComment';

//MUI styling
import LoadingButton from '@mui/lab/LoadingButton';

const Comments = ({ article_id }) => {
  const [comments, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { isLoggedIn } = useContext(UserContext);

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
        <LoadingButton loading loadingIndicator='Loading...' variant='text'>
          Loading...
        </LoadingButton>
      ) : (
        <ul>
          {comments.map((comment) => {
            return (
              <div className='comment'>
                <li key={comment.comment_id}>
                  <CommentsCard comment={comment} />

                  {isLoggedIn.name === comment.author && (
                    <RemoveComment
                      comment_id={comment.comment_id}
                      setComment={setComment}
                    />
                  )}
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Comments;
