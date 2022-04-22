import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";
import ArticleVote from "./ArticleVote";
import Comments from "./Comments";
import Expandable from "./Expandable";

const ArticleById = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <ArticleCard article={article} />
          <ArticleVote article_id={article.article_id} vote={article.votes} />
          <h2>Comments</h2>

          <Expandable>
            <Comments article_id={article.article_id} />
          </Expandable>
        </>
      )}
    </>
  );
};
export default ArticleById;
