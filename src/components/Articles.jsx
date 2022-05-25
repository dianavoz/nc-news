import { useEffect, useState } from 'react';

//get id, sort_by and order
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getArticles } from '../utils/api.js';
import Select from './SelectForm.jsx';
import ArticleCard from './ArticleCard';
import ErrorPage from './ErrorPage';

//MUI styling
import { LoadingButton } from '@mui/lab';
import { Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  height: 450,
  color: theme.palette.text.secondary,
}));

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get('sort_by');
  const order = searchParams.get('order');

  useEffect(() => {
    getArticles(topic, sort, order)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic, sort, order]);

  if (error) return <ErrorPage error={error} />;

  return (
    <main>
      <Select
        setSearchParams={setSearchParams}
        topic={topic}
        sort={sort}
        order={order}
      />

      {isLoading ? (
        <LoadingButton loading loadingIndicator='Loading...' variant='text'>
          Loading...
        </LoadingButton>
      ) : (
        <ul>
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={{ xs: 1, sm: 3, md: 12 }}
          >
            {articles.map((article) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={article.article_id}>
                  <Item sx={{ maxWidth: 345 }}>
                    <li>
                      <Link to={`/articles/${article.article_id}`}>
                        <ArticleCard article={article} />
                      </Link>
                    </li>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </ul>
      )}
    </main>
  );
};

export default Articles;
