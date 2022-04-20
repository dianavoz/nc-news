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
    <ul>
      {topics.map(({ slug }) => {
        return (
          <li key={slug} className="topics">
            <Link to={`/topics/${slug}`}>{slug}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Topics;
