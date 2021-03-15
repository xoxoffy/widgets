import React, { useState } from "react";
import "../styles/Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <div key={item.key} className="content">
        {/* IMPORTANT!!
        Without the arrow function down below the onTitleClick will invoke
        when the items will render on the page and not when I click on the div!! */}
        <div className="content-title" onClick={() => onTitleClick(index)}>
          {item.title}
        </div>
        <div>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
