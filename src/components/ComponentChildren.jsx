import { useState } from "react";

const ComponentChildren = ({ children }) => {
  const [showComments, setShowComments] = useState(false);
  const toggleOpen = () => setShowComments((currOpen) => !currOpen);

  return (
    <div>
      <button onClick={toggleOpen}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && children}
    </div>
  );
};
export default ComponentChildren;
