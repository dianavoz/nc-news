import { useEffect, useState } from "react";
import { getArticles } from "../utils/api.js";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <main>
      <ul>
        {articles.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <li key={article.article_id} className="article-card">
                <ArticleCard article={article} />
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
