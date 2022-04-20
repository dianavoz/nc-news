const Article = ({ article }) => {
  return (
    <>
      <h3>{article.title}</h3>
      <p>{article.author}</p>

      <span>{article.topic}</span>
      <span>{article.created_at}</span>
    </>
  );
};

export default Article;
