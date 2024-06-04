import React from "react";

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
  };

  return (
    <div className="px1" style={props?.style}>
      <label className="input_label" style={inputTextStyle}>
        {props?.name ? props?.name : "Label"}
      </label>
      {props?.required && (
        <span style={{ color: "red", marginLeft: "1px" }}>*</span>
      )}
      <div className="flex flex-row justify-start items-center radio_option_style">
        {props?.optionDetails?.map((option, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-start items-center"
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
