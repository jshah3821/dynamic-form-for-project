import { removeKeyInObject } from "./utils/removeKeyInObject";

const SelectElement = (props) => {
  console.log("props?.style?.textAlign,", props?.style?.textAlign);

  let labelStyle = {
    textAlign: props?.style?.textAlign,
    fontSize: props?.style?.fontSize,
    color: props?.style?.color,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
  };

  let selectstyle = {
    textAlign: props?.style?.textAlign,
  };
  return (
    <div className="selectBoxContainer px1">
      <label style={labelStyle}>{props?.label}</label>
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
          {props?.label} is required.
        </p>
      )}
    </div>
  );
};

export default SelectElement;
