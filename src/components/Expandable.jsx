import { useState } from "react";

const ComponentChildren = ({ children }) => {
  const [showChildren, setShowChildren] = useState(false);
  const toggleOpen = () => setShowChildren((currOpen) => !currOpen);

  return (
    <div>
      <button onClick={toggleOpen}>
        {showChildren ? "Hide Comments" : "Show Comments"}
      </button>
      {showChildren && children}
    </div>
  );
};
export default ComponentChildren;
