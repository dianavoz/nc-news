import { useParams } from "react-router-dom";

const ArticleById = ({ article }) => {
  const { article_id } = useParams();
  return <h1>Article id: {article_id}</h1>;
};
export default ArticleById;
