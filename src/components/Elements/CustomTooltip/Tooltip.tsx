import React from "react";
import "./Tooltip.css";

const Tooltip = ({ className, children, text, position, style, Class } :any) => {
  return (
    <div className="tooltip">
      {children}
      <span
        className={
          Class
            ? `tooltiptext whiteSpace_class ${className} ${position} `
            : `tooltiptext ${className} ${position}`
        }
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
