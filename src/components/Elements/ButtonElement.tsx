import React from "react";
import { removeKeyInObject } from "./utils/removeKeyInObject";
const ButtonElement = (props: any) => {
  console.log("prosp", props.style);
  const directionStyle = {
    direction: props?.style?.direction,
    height: props?.style?.height,
  };
 
  const buttonStyles = {
    height: "100%",
    width: props?.style?.width,
    backgroundColor: props?.style?.backgroundColor,
    color: props?.style?.color,
    paddingTop: props?.style?.paddingTop,
    marginTop: props?.style?.marginTop,
    fontSize: props?.style?.fontSize,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textAlign: props?.style?.textAlign,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
    ratio: props?.style?.ratio,
    minWidth: props?.style?.minWidth,
    minHeight:props?.style?.minHeight ,
    maxWidth: props?.style?.maxWidth,
    maxHeight:props?.style?.maxHeight ,
    objectFit: props?.style?.objectFit,
    isBorder: props?.style?.isBorder,
    borderWidth: props?.style?.borderWidth,
    borderStyle: props?.style?.borderStyle,
    borderColor: props?.style?.borderColor,
    borderTopWidth: props?.style?.borderTopWidth,
    borderTopStyle: props?.style?.borderTopStyle,
    borderTopColor: props?.style?.borderTopColor,
    borderRightWidth: props?.style?.borderRightWidth ,
    borderRightStyle: props?.style?.borderRightStyle,
    borderRightColor: props?.style?.borderRightColor,
    borderBottomWidth:props?.style?.borderBottomWidth ,
    borderBottomStyle: props?.style?.borderBottomStyle,
    borderBottomColor: props?.style?.borderBottomColor,
    borderLeftWidth: props?.style?.borderLeftWidth,
    borderLeftStyle: props?.style?.borderLeftStyle,
    borderLeftColor:props?.style?.borderLeftColor ,
    borderRadius: props?.style?.borderLeftColor ,
    borderTopLeftRadius: props?.style?.borderTopLeftRadius,
    borderTopRightRadius: props?.style?.borderTopRightRadius,
    borderBottomLeftRadius: props?.style?.borderBottomLeftRadius ,
    borderBottomRightRadius: props?.style?.borderBottomRightRadius
  }
  return (
    <div style={directionStyle} className="px1">
      <button
        // className={"button-Border"}
        className={`form_btn form_button_css_updated`}
        //* keep it for reference
        // style={props?.style}
        style={buttonStyles}
        onClick={props?.onClick}
        disabled={props?.disabled}
      >
        {props?.label}
      </button>
    </div>
  );
};

export default ButtonElement;
