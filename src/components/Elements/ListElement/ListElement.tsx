import { removeKeyInObject } from "../utils/removeKeyInObject";
import "./ListElementStyle.css";
import React, { useEffect } from "react";
const ListElement = ({ listData, key }) => {
  const { label, listItemDetails, style, listStyle } = listData?.properties;

  const listItemTextStyle = {
    color: style?.color,
    fontSize: style?.fontSize,
    fontStyle: style?.fontStyle,
    fontFamily: style?.fontFamily,
    fontWeight: style?.fontWeight,
    textAlign: style?.textAlign,
    textDecoration: style?.textDecoration,
    textTransform: style?.textTransform,
  };

  const listItemContainer = {
    fontStyle: listStyle?.fontStyle,
    backgroundColor: style?.backgroundColor,
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
    marginTop: listStyle?.marginTop,
    marginLeft: listStyle?.marginLeft,
    marginRight: listStyle?.marginRight,
    marginBottom: listStyle?.marginBottom,
    paddingTop: listStyle?.paddingTop,
    paddingLeft: listStyle?.paddingLeft,
    paddingRight: listStyle?.paddingRight,
    paddingBottom: listStyle?.paddingBottom,
  };

  const borderListItem = {
    borderColor: listStyle?.borderColor,
    borderWidth: listStyle?.borderWidth,
    borderStyle: listStyle?.borderStyle,
    borderRadius: listStyle?.borderRadius,
  };

  useEffect(() => {
    console.log("listStyle", listStyle);
  });

  return (
    <div className="le_container" key={key} style={listItemContainer}>
      <p style={listItemTextStyle} className="le_list_container">
        {label}
      </p>
      <ul className="list-conatiner" style={listStyle}>
        {listItemDetails?.length > 0
          ? listItemDetails?.map((item, i) => {
              return (
                <li
                  style={
                    (removeKeyInObject(listItemTextStyle, borderListItem),
                    { listStylePosition: "inside !important" })
                  }
                  key={i}
                >
                  {" "}
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
