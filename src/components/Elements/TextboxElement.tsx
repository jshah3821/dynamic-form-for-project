import React from "react";

const TextboxElement = (props: any) => {
  return (
    <div className="inputContainer px1">
      <label style={{ fontSize: "12px" }} htmlFor={props?.id}>
        {props?.label}
      </label>
      <textarea
        value={props?.value}
        id={props?.id}
        rows={props?.rows || 5}
        placeholder={props?.placeholder}
        minLength={props?.minLength}
        maxLength={props?.maxLength}
        required={props?.required}
        style={props?.style}
        name={props?.name}
        onChange={props?.onChange}
      />
      {props?.required ||
        (props?.errors?.[props?.name] && (
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
        ))}
    </div>
  );
};

export default TextboxElement;
