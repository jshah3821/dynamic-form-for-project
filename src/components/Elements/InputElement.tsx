import React from "react";
const InputElement = (props) => {
  return (
    <div className="inputContainer px1">
      <label style={{ fontSize: "12px" }} htmlFor={props?.id}>
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
        style={props?.style}
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
