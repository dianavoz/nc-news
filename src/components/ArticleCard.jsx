import { Typography } from '@mui/material';

const Article = ({ article, article_id }) => {
  return (
    <>
      <Typography
        gutterBottom
        variant='h2'
        component='div'
        fontSize='1.2rem'
        lineHeight={1.15}
        textAlign='left'
      >
        <h2 className='article-card title'>{article.title}</h2>
      </Typography>

      <Typography variant='body2' color='text.secondary' textAlign='left'>
        <p className='article-card author'>
          <span style={{ fontWeight: 'bold', marginRight: 3 }}>by</span>
          {article.author}
        </p>
        <p>
          <span style={{ color: '#999', fontWeight: 'bold' }}>
            {article.created_at.slice(0, 10)}{' '}
            <span className='card-topic'>{article.topic}</span>
          </span>
        </p>
        {article.body && <p className='text-body'>{article.body}</p>}
        {!article_id && (
          <>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
          </>
        )}
      </Typography>
    </>
  );
};

export default Article;
