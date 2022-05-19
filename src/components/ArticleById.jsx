import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticleById } from '../utils/api';

//components
import ArticleCard from './ArticleCard';
import ArticleVote from './ArticleVote';
import Comments from './Comments';
import Expandable from './Expandable';
import ErrorPage from './ErrorPage';

//MUI styling
import LoadingButton from '@mui/lab/LoadingButton';

const ArticleById = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //get article id from the url
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      {isLoading ? (
        <LoadingButton loading loadingIndicator='Loading...' variant='text'>
          Loading...
        </LoadingButton>
      ) : (
        <>
          <div className='article'>
            <ArticleCard article={article} article_id={article_id} />
            <ArticleVote article_id={article.article_id} vote={article.votes} />
          </div>

          <Expandable>
            <Comments article_id={article.article_id} />
          </Expandable>
        </>
      )}
    </>
  );
};
export default ArticleById;
