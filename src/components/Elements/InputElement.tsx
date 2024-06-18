import { removeKeyInObject } from "./utils/removeKeyInObject";

const InputElement = (props) => {
  const inputTextStyle = {
    color: props?.style?.color,
    fontSize: props?.style?.fontSize,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    direction: props?.style?.direction,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
    textAlign: props?.style?.textAlign,
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
    direction: props?.style?.direction,
    width: props?.style?.width,
    height: props?.style?.height,
    minWidth: props?.style?.minWidth,
    minHeight: props?.style?.minHeight,
    maxWidth: props?.style?.maxWidth,
    maxHeight: props?.style?.maxHeight,
  };
  return (
    <div className="form_inputContainer " style={spacingStyle}>
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
        style={{
          ...removeKeyInObject(props?.style, {
            ...inputTextStyle,
            ...inputContainerStyle,
          }),
          "--placeholder-color": props?.style?.color,
        }}
        onChange={props?.onChange}
        value={props?.value}
        className="form_input_placeholder"
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

export default InputElement;
