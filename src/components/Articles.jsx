import { useEffect, useState } from "react";

//get id, sort_by and order
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/api.js";
import ArticleVote from "./ArticleVote";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("selected"));

  const [sort, setSort] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    getArticles(topic, sort, order).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic, sort, order]);

  return (
    <main>
      <label forhtml="sort_by">Sort:</label>
      <select
        id="sort_by"
        name="sort_by"
        onChange={(e) => {
          const targetValue = { sort_by: e.target.value, order: "desc" };
          setSearchParams(targetValue);
          setSort(targetValue.sort_by);
        }}
      >
        <option value="created_at">date</option>
        <option value="votes">votes</option>
      </select>
      <label forhtml="order">Order:</label>
      <select
        id="order"
        name="order"
        onChange={(e) => {
          const targetValue = { sort_by: "created_at", order: e.target.value };
          setSearchParams(targetValue);
          setOrder(targetValue.order);
        }}
      >
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>

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
