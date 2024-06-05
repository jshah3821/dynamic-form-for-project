import { removeKeyInObject } from "../utils/removeKeyInObject";
import "./ListElementStyle.css";

const ListElement = ({ listData, key }) => {
  const { label, listItemDetails, style, listStyle } = listData?.properties;

  const listElementTitleStyle = {
    color: style?.color,
    fontSize: style?.fontSize,
    fontStyle: style?.fontStyle,
    fontFamily: style?.fontFamily,
    fontWeight: style?.fontWeight,
    textAlign: style?.textAlign,
    textDecoration: style?.textDecoration,
    textTransform: style?.textTransform,
  };

  const listItemTextStyle = {
    color: listStyle?.color,
    fontSize: listStyle?.fontSize,
    fontStyle: listStyle?.fontStyle,
    fontFamily: listStyle?.fontFamily,
    fontWeight: listStyle?.fontWeight,
    textAlign: listStyle?.textAlign,
    textDecoration: listStyle?.textDecoration,
    textTransform: listStyle?.textTransform,
  };

  return (
    <div
      className="le_container"
      style={removeKeyInObject(style, listElementTitleStyle)}
      key={key}
    >
      <p style={listElementTitleStyle}>{label}</p>
      <ul style={removeKeyInObject(listStyle, listItemTextStyle)}>
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
