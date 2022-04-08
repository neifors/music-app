import React, { useState } from "react";
import { biography1, biography2 } from "../../data/data";
import "./index.css";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="biography">
      {isReadMore ? text.slice(0, 180) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};
  
export const Content = () => {
  return (
    <div className="container">
      <ReadMore>
        {biography1+biography2}
        
      </ReadMore>
    </div>
  );
};
  
