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
  };

  console.log(" props?.style?.textAlign", props?.style?.textAlign);

  //REMOVE BACKGROUND FROM THE CONTAINER

  const conatinerStyle = {
    backgroundColor: props?.style?.backgroundColor,
    width: props?.style?.backgroundColor,
  };

  // add border to the checkbox =

  let borderstyle = {
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

    // width: props?.style?.backgroundColor,
  };

  return (
    <div
      // className="px1"

      style={spacingStyle}
    >
      <label className="input_label" style={inputTextStyle}>
        {props?.name ? props?.name : "Label"}
      </label>
      {props?.required && (
        <span style={{ color: "red", marginLeft: "1px" }}>*</span>
      )}
      <div
        // style={props?.style}

        style={removeKeyInObject(props?.style, spacingStyle)}
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
                name="option"
                value={option?.value}
                checked={props.formData[props?.name]?.includes(option.value)}
                onChange={(e) => props?.handleChange(e, props?.name, true)}
              />
              <label
                className="option_label_style"
                style={inputTextStyle}
                htmlFor={option.value + index}
              >
                {option?.label}
              </label>
            </div>
          );
        })}
        {props?.required && (
          <p
            style={{
              visibility: props?.errors?.[props?.name] ? "visible" : "hidden",
              fontSize: "10px",
              color: "red",
              paddingLeft: "0.5rem",
            }}
          >
            {props?.name || `Label`} is required.
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckboxElement;
