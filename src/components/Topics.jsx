import { useEffect, useState } from "react";
import { getTopicsApi } from "../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopicsApi().then((topic) => {
      setTopics(topic);
    });
  }, []);

  return (
    <nav className="nav">
      <Link to="/">articles</Link>
      {topics.map(({ slug }) => {
        return (
          <Link key={slug} to={`/topics/${slug}`}>
            {slug}
          </Link>
        );
      })}
    </nav>
  );
};
export default Topics;
