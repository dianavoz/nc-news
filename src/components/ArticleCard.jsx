const Article = ({ article, article_id }) => {
  return (
    <>
      <h2 className='card title'>{article.title}</h2>

      <div className='card card-text'>
        <p className='card article-card author'>
          <span style={{ fontWeight: 'bold', marginRight: 3 }}>by</span>
          {article.author}
        </p>

        <p className='card'>
          <span style={{ color: '#999', fontWeight: 'bold' }}>
            {article.created_at.slice(0, 10)}
          </span>
          <span className='card-topic'>{article.topic}</span>
        </p>

        {article.body && <p className=' card text-body'>{article.body}</p>}
        {!article_id && (
          <>
            <p className='card card-votes'>Votes {article.votes}</p>
            <p className='card card-comments'>
              Comments {article.comment_count}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Article;
