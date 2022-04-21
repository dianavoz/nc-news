import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";

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

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <>
      <h1>Article id: {article_id}</h1>
      <ArticleCard article={article} />
    </>
  );
};
export default ArticleById;
