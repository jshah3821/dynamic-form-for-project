import React from "react";
const InputElement = (props) => {
  return (
    <div className="inputContainer px1">
      <label className="input-label-size-default" htmlFor={props?.id}>
        {props?.label}
      </label>
      <input
        id={props?.id}
        type={props?.type}
        placeholder={props?.placeholder}
        minLength={props?.minLength}
        maxLength={props?.maxLength}
        required={props?.required}
        style={props?.style}
        onChange={props?.onChange}
        value={props?.value}
      />
      {props?.required && (
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
