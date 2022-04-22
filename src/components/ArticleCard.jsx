const Article = ({ article }) => {
  return (
    <>
      <h3>{article.title}</h3>
      <span>{article.topic}</span>
      <span>Date: {article.created_at.slice(0, 10)}</span>

      {article.body && <p className="text-body">{article.body}</p>}
      <p className="author">Written By:{article.author}</p>
    </>
  );
};

export default Article;
