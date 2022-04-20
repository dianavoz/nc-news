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
