import React from "react";

const ButtonElement = (props: any) => {
  return (
    <div className="px1">
      <button
        // className={`height-button form_button_css_updated`}
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
