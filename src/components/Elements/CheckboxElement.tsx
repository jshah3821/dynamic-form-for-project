import { removeKeyInObject } from "./utils/removeKeyInObject";

const CheckboxElement = (props) => {
  const inputTextStyle = {
    color: props?.style?.color,
    fontSize: props?.style?.fontSize,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textAlign: props?.style?.textAlign,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
    display: "block",
    direction: props?.style?.direction,
  };

  //REMOVE BACKGROUND FROM THE CONTAINER

  const conatinerStyle = {
    backgroundColor: props?.style?.backgroundColor,
    width: props?.style?.width,
  };

  // add border to the checkbox =

  let borderstyle = {
    color: props?.style?.color,
    fontSize: props?.style?.fontSize,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textAlign: props?.style?.textAlign,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,

    border: props?.style?.border,
    // borderRadius: props?.style?.borderRadius,
    borderWidth: props?.style?.borderWidth,
    borderStyle: props?.style?.borderStyle,
    borderColor: props?.style?.borderColor,
    borderTopWidth: props?.style?.borderTopWidth,
    borderTopStyle: props?.style?.borderTopStyle,
    borderTopColor: props?.style?.borderTopColor,
    borderRightWidth: props?.style?.borderRightWidth,
    borderRightStyle: props?.style?.borderRightStyle,
    borderRightColor: props?.style?.borderRightColor,
    borderBottomWidth: props?.style?.borderBottomWidth,
    borderBottomStyle: props?.style?.borderBottomStyle,
    borderBottomColor: props?.style?.borderBottomColor,
    borderLeftWidth: props?.style?.borderLeftWidth,
    borderLeftStyle: props?.style?.borderLeftStyle,
    borderLeftColor: props?.style?.borderLeftColor,

    borderTopLeftRadius: props?.style?.borderTopLeftRadius,
    borderTopRightRadius: props?.style?.borderTopRightRadius,
    borderBottomLeftRadius: props?.style?.borderBottomLeftRadius,
    borderBottomRightRadius: props?.style?.borderBottomRightRadius,
    marginTop: props?.style?.marginTop,
    marginLeft: props?.style?.marginLeft,
    marginRight: props?.style?.marginRight,
    marginBottom: props?.style?.marginBottom,
    paddingTop: props?.style?.paddingTop,
    paddingLeft: props?.style?.paddingLeft,
    paddingRight: props?.style?.paddingRight,
    paddingBottom: props?.style?.paddingBottom,

    width: props?.style?.width,
    height: props?.style?.width,
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
    // direction: props?.style?.direction,
  };

  let removeTextStyle = {
    color: props?.style?.color,
    fontSize: props?.style?.fontSize,
    fontStyle: props?.style?.fontStyle,
    fontFamily: props?.style?.fontFamily,
    fontWeight: props?.style?.fontWeight,
    textAlign: props?.style?.textAlign,
    textDecoration: props?.style?.textDecoration,
    textTransform: props?.style?.textTransform,
    direction: props?.style?.direction,
    ...spacingStyle,
  };
  return (
    <div style={spacingStyle}>
      <label className="input_label" style={inputTextStyle}>
        {props?.name ? props?.name : "Label"}
        {props?.required && (
          <span style={{ color: "red", marginLeft: "1px" }}>*</span>
        )}
      </label>
      <div
        style={removeKeyInObject(props?.style, removeTextStyle)}
        className="flex flex-row justify-start items-center radio_option_style"
      >
        {props?.optionDetails?.map((option, index) => {
          return (
            <div
              style={removeKeyInObject(props?.style, borderstyle)}
              key={index}
              className=" flex flex-row justify-start items-center"
            >
              <input
                className="option_radio"
                style={inputTextStyle}
                type="checkbox"
                id={option?.value + index}
                name="checkbox"
                value={option.value}
                checked={props.formData[props?.obj?.id]?.includes(option.value)}
                onChange={props?.onChange}
              />
              <label
                className="option_label_style"
                // style={inputTextStyle}
                htmlFor={option.value + index}
              >
                {option?.label}
              </label>
            </div>
          );
        })}
      </div>
      {props?.required && (
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

export default CheckboxElement;
