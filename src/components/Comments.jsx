import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/User';

import { getComments } from '../utils/api';

//components
import CommentsCard from './CommentsCard';
import PostComment from './PostComment';
import RemoveComment from './RemoveComment';
import ErrorPage from './ErrorPage';

//MUI styling
import LoadingButton from '@mui/lab/LoadingButton';

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    getComments(article_id)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <h2 className='comment-count'>
        Comments <span className='comment-count-span'>{comments.length}</span>
      </h2>
      {user.username && (
        <PostComment article_id={article_id} setComments={setComments} />
      )}
      {isLoading ? (
        <LoadingButton loading loadingIndicator='Loading...' variant='text'>
          Loading...
        </LoadingButton>
      ) : (
        <ul>
          {comments.map((comment) => {
            return (
              <div className='comment' key={comment.comment_id}>
                <li className='comment-item'>
                  <CommentsCard comment={comment} />

                  {user.username === comment.author && (
                    <RemoveComment
                      comment_id={comment.comment_id}
                      setComments={setComments}
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
