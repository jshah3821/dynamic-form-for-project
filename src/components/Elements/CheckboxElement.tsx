import React from "react";

const CheckboxElement = (props) => {
  return (
    <>
      {props?.optionDetails?.map((option, index) => {
        return (
          <div className="checkbox-parent">
            <input
              className="checkbox input_padding"
              style={props?.style}
              type="checkbox"
              id={option.value + index}
              name="option"
              value={option.value}
              checked={props?.checked}
              onChange={props?.onChange}
            />
            <label
              className="checkbox-label input_label px1"
              htmlFor={props?.id}
            >
              {props?.label}
            </label>
            {props?.required && (
              <span style={{ color: "red", marginLeft: "1px" }}>*</span>
            )}
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
          {props?.label} is required.
        </p>
      )}
    </>
  );
};

export default CheckboxElement;
