import { removeKeyInObject } from "./utils/removeKeyInObject";

const TextboxElement = (props: any) => {
  console.log("props?.style?.textAlign", props?.style?.textAlign);

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
  };
  return (
    <div className="inputContainer px1" style={inputContainerStyle}>
      <label style={inputTextStyle} htmlFor={props?.id}>
        {props?.label ? props?.label : "Label"}
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

export default TextboxElement;
