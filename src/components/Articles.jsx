import { useEffect, useState } from "react";
import { getArticles } from "../utils/api.js";
import ArticleCard from "./ArticleCard";

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
            <div className="article-card">
              <a href={`/articles/${article.article_id}`}>
                <li key={article.article_id}>
                  <ArticleCard article={article} />
                </li>
              </a>
            </div>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
