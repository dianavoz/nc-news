import { useEffect, useState } from "react";
import { getArticles } from "../utils/api.js";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <main>
      <h2>{topic}</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article-card">
              <Link to={`/articles/${article.article_id}`}>
                <ArticleCard article={article} />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
