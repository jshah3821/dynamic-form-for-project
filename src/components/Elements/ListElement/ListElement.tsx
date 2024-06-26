import { removeKeyInObject } from "../utils/removeKeyInObject";
import "./ListElementStyle.css";
import React from "react";
const ListElement = ({ listData, key }) => {
  const { label, listItemDetails, style, listStyle } = listData?.properties;

  const listItemTextStyle = {
    color: listStyle?.color,
    fontSize: listStyle?.fontSize,
    fontStyle: listStyle?.fontStyle,
    fontFamily: listStyle?.fontFamily,
    fontWeight: listStyle?.fontWeight,
    // textAlign: listStyle?.textAlign,
    textDecoration: listStyle?.textDecoration,
    textTransform: listStyle?.textTransform,
  };

  const listItemContainer = {
    height: style?.height,
    width: style?.width,
    minWidth: style?.minWidth,
    minHeight: style?.minHeight,
    maxWidth: style?.maxWidth,
    maxHeight: style?.maxHeight,
    borderStyle: style?.borderStyle,
    borderColor: style?.borderColor,
    borderTopWidth: style?.borderTopWidth,
    borderTopStyle: style?.borderTopStyle,
    borderTopColor: style?.borderTopColor,
    borderRightWidth: style?.borderRightWidth,
    borderRightStyle: style?.borderRightStyle,
    borderRightColor: style?.borderRightColor,
    borderBottomWidth: style?.borderBottomWidth,
    borderBottomStyle: style?.borderBottomStyle,
    borderBottomColor: style?.borderBottomColor,
    borderLeftWidth: style?.borderLeftWidth,
    borderLeftStyle: style?.borderLeftStyle,
    borderLeftColor: style?.borderLeftColor,
    borderRadius: style?.borderRadius,
    borderTopLeftRadius: style?.borderTopLeftRadius,
    borderTopRightRadius: style?.borderTopRightRadius,
    borderBottomLeftRadius: style?.borderBottomLeftRadius,
    borderBottomRightRadius: style?.borderBottomRightRadius,
  };

  return (
    <div className="le_container" key={key} style={listItemContainer}>
      <p style={listItemTextStyle}>{label}</p>
      <ul className="list-conatiner" style={listStyle}>
        {listItemDetails?.length > 0
          ? listItemDetails?.map((item, i) => {
              return (
                <li key={i} style={listItemTextStyle}>
                  {item?.name}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default ListElement;
