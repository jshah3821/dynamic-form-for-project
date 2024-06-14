import { removeKeyInObject } from "./utils/removeKeyInObject";

const TextboxElement = (props: any) => {
  const inputTextStyle = {
    color: props?.style?.color,
    fontSize: props?.style?.fontSize,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textAlign: props?.style?.textAlign,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
    display: "inline-block",
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
    direction: props?.style?.direction,
  };
  return (
    <div className="inputContainer" style={inputContainerStyle}>
      <label style={inputTextStyle} htmlFor={props?.id}>
        {props?.label ? props?.label : "Label"}
        {props?.required && (
          <span style={{ color: "red", marginLeft: "1px" }}>*</span>
        )}
      </label>

      <textarea
        value={props?.value}
        id={props?.id}
        rows={props?.rows || 5}
        placeholder={props?.placeholder}
        minLength={props?.minLength}
        maxLength={props?.maxLength}
        required={props?.required}
        style={removeKeyInObject(props?.style, {
          ...inputTextStyle,
          ...inputContainerStyle,
        })}
        name={props?.name}
        onChange={props?.onChange}
      />
      {(props?.required || props?.errors?.[props?.obj?.id]) && (
        <p
          style={{
            visibility: props?.errors?.[props?.obj?.id] ? "visible" : "hidden",
            fontSize: "10px",
            color: "red",
          }}
        >
          {props?.errors?.[props?.obj?.id] === true
            ? `This field is required.`
            : props?.errors?.[props?.obj?.id]}
        </p>
      )}
    </div>
  );
};

export default TextboxElement;
