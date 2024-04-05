import React from "react";

const ButtonElement = (props: any) => {
  return (
    <div className="px1">
      <button
        style={props?.style}
        onClick={props?.onClick}
        disabled={props?.disabled}
      >
        {props?.label}
      </button>
    </div>
  );
};

export default ButtonElement;
