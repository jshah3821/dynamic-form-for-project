import { removeKeyInObject } from "./utils/removeKeyInObject";

const InputElement = (props) => {
  const inputTextStyle = {
    color: props?.style?.color,
    fontSize: props?.style?.fontSize,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textAlign: props?.style?.textAlign,
    direction: props?.style?.direction,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
    width: "100%",
  };

  const inputContainerStyle = {
    marginTop: props?.style?.marginTop,
    marginLeft: props?.style?.marginLeft,
    marginRight: props?.style?.marginRight,
    marginBottom: props?.style?.marginBottom,
    paddingTop: props?.style?.paddingTop,
    paddingLeft: props?.style?.paddingLeft,
    paddingRight: props?.style?.paddingRight,
    paddingBottom: props?.style?.paddingBottom,
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
  };
  return (
    <div className="inputContainer " style={spacingStyle}>
      <label style={inputTextStyle} htmlFor={props?.id}>
        {props?.label ? props?.label : "Label"}
        {props?.required && (
          <span style={{ fontSize: "12px", color: "red", marginLeft: "1px" }}>
            *
          </span>
        )}
      </label>
      <input
        id={props?.id}
        type={props?.type}
        placeholder={props?.placeholder}
        minLength={props?.minLength || null}
        maxLength={props?.maxLength || null}
        required={props?.required}
        style={removeKeyInObject(props?.style, {
          ...inputTextStyle,
          ...inputContainerStyle,
        })}
        onChange={props?.onChange}
        value={props?.value}
      />
      {(props?.required || props?.errors?.[props?.name]) && (
        <p
          style={{
            visibility: props?.errors?.[props?.name] ? "visible" : "hidden",
            fontSize: "10px",
            color: "red",
          }}
        >
          {props?.errors?.[props?.name] === true
            ? `${props?.label || props?.name} is required.`
            : props?.errors?.[props?.name]}
        </p>
      )}
    </div>
  );
};

export default InputElement;
