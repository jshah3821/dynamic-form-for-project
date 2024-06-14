import { removeKeyInObject } from "../utils/removeKeyInObject";
import "./ListElementStyle.css";
import React from "react";
const ListElement = ({ listData, key }) => {
  const { label, listItemDetails, style, listStyle } = listData?.properties;

  const listElementTitleStyle = {
    color: style?.color,
    fontSize: style?.fontSize,
    fontStyle: style?.fontStyle,
    fontFamily: style?.fontFamily,
    fontWeight: style?.fontWeight,
    // textAlign: style?.textAlign,
    textDecoration: style?.textDecoration,
    textTransform: style?.textTransform,
    width: "100%",
  };

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

  const listUnorderedStyle = {
    color: listStyle?.color,
    fontSize: listStyle?.fontSize,
    fontStyle: listStyle?.fontStyle,
    fontFamily: listStyle?.fontFamily,
    fontWeight: listStyle?.fontWeight,
    textDecoration: listStyle?.textDecoration,
    textTransform: listStyle?.textTransform,
    marginTop: listStyle?.marginTop,
    marginLeft: listStyle?.marginLeft,
    marginRight: listStyle?.marginRight,
    marginBottom: listStyle?.marginBottom,
    paddingTop: listStyle?.paddingTop,
    paddingLeft: listStyle?.paddingLeft,
    paddingRight: listStyle?.paddingRight,
    paddingBottom: listStyle?.paddingBottom,
    direction: listStyle?.direction,
  };
  const listContainer = {
    marginTop: listStyle?.marginTop,
    marginLeft: listStyle?.marginLeft,
    marginRight: listStyle?.marginRight,
    marginBottom: listStyle?.marginBottom,
    paddingTop: listStyle?.paddingTop,
    paddingLeft: listStyle?.paddingLeft,
    paddingRight: listStyle?.paddingRight,
    paddingBottom: listStyle?.paddingBottom,
    direction: listStyle?.direction,
    textAlign: listStyle?.textAlign,
  };

  console.log("listContainer", listContainer);

  return (
    <div
      className="le_container"
      // style={removeKeyInObject(style, listElementTitleStyle)}
      style={listContainer}
      key={key}
    >
      <p style={listElementTitleStyle}>{label}</p>
      <ul
        className="list-conatiner"
        style={removeKeyInObject(listStyle, listUnorderedStyle)}
      >
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
