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

  return (
    <div className="le_container" key={key}>
      <p style={style}>{label}</p>
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
