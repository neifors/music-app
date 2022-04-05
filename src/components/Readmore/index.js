import React, { useState } from "react";
import "./index.css";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  
export const Content = () => {
  return (
    <div className="container">
      <p>
        <ReadMore>
          Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and dancer. Dubbed the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot. He is the most awarded individual music artist in history.
        </ReadMore>
      </p>
    </div>
  );
};
  
