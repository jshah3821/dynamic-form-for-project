import { removeKeyInObject } from "./utils/removeKeyInObject";

const SelectElement = (props) => {
  let labelStyle = {
    textAlign: props?.style?.textAlign,
    fontSize: props?.style?.fontSize,
    color: props?.style?.color,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
    direction: props?.style?.direction,
  };

  let selectstyle = {
    fontSize: props?.style?.fontSize,
    color: props?.style?.color,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
    direction: props?.style?.direction,

    textAlign: props?.style?.textAlign,
    marginTop: props?.style?.marginTop,
    marginLeft: props?.style?.marginLeft,
    marginRight: props?.style?.marginRight,
    marginBottom: props?.style?.marginBottom,
    paddingTop: props?.style?.paddingTop,
    paddingLeft: props?.style?.paddingLeft,
    paddingRight: props?.style?.paddingRight,
    paddingBottom: props?.style?.paddingBottom,
    width: props?.style?.width,
    height: props?.style?.height,
    minWidth: props?.style?.minWidth,
    minHeight: props?.style?.minHeight,
    maxWidth: props?.style?.maxWidth,
    maxHeight: props?.style?.maxHeight,
  };

  const spacingStyle = {
    marginTop: props?.style?.marginTop,
    marginLeft: props?.style?.marginLeft,
    marginRight: props?.style?.marginRight,
    marginBottom: props?.style?.marginBottom,
    paddingTop: props?.style?.paddingTop,
    paddingLeft: props?.style?.paddingLeft,
    paddingRight: props?.style?.paddingRight,
    paddingBottom: props?.style?.paddingBottom,
    width: props?.style?.width,
    height: props?.style?.height,
    minWidth: props?.style?.minWidth,
    minHeight: props?.style?.minHeight,
    maxWidth: props?.style?.maxWidth,
    maxHeight: props?.style?.maxHeight,
  };
  return (
    <div style={spacingStyle} className="selectBoxContainer">
      <label className="input_label" style={labelStyle}>
        {props?.label ? props?.label : "Label"}
        {props?.required && (
          <span style={{ color: "red", marginLeft: "1px" }}>*</span>
        )}
      </label>
      <select
        value={props?.value}
        onChange={props?.onChange}
        style={removeKeyInObject(props?.style, selectstyle)}
        name={props?.label}
        id={props?.id}
      >
        {props?.options?.map((option, innerIndex) => {
          return (
            <option key={innerIndex} value={option?.value}>
              {option?.label}
            </option>
          );
        })}
      </select>
      {props?.required && (
        <p
          style={{
            visibility: props?.errors?.[props?.name] ? "visible" : "hidden",
            fontSize: "10px",
            color: "red",
          }}
        >
          {props?.errors?.[props?.name] === true
            ? `This field is required.`
            : props?.errors?.[props?.name]}
        </p>
      )}
    </div>
  );
};

export default SelectElement;
