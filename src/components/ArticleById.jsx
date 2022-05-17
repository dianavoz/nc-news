import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticleById } from '../utils/api';

//components
import ArticleCard from './ArticleCard';
import ArticleVote from './ArticleVote';
import Comments from './Comments';
import Expandable from './Expandable';

//MUI styling
import LoadingButton from '@mui/lab/LoadingButton';

const ArticleById = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //get article id from the url
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      {isLoading ? (
        <LoadingButton loading loadingIndicator='Loading...' variant='text'>
          Loading...
        </LoadingButton>
      ) : (
        <>
          <ArticleCard article={article} />
          <ArticleVote article_id={article.article_id} vote={article.votes} />

          <Expandable>
            <Comments article_id={article.article_id} />
          </Expandable>
        </>
      )}
    </>
  );
};
export default ArticleById;
