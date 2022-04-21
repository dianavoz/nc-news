import { useEffect, useState } from "react";
import { getArticles } from "../utils/api.js";
import ArticleCard from "./ArticleCard";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArticleVote from "./ArticleVote";

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

  return (
    <main>
      <h2>{topic}</h2>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.article_id} className="article-card">
                <Link to={`/articles/${article.article_id}`}>
                  <ArticleCard article={article} />
                </Link>
                <ArticleVote
                  article_id={article.article_id}
                  vote={article.votes}
                />
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Articles;
