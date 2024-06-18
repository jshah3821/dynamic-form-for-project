import React from "react";

const RadioElement = (props) => {
  return (
    <div className="radioContainer px1">
      {props?.label && <p>{props?.label}</p>}
      <div className="flex" style={{ gap: "10px" }}>
        {props?.options?.map((option, innerIndex) => {
          return (
            <div key={innerIndex} className="flex" style={{ gap: "5px" }}>
              <input
                type="radio"
                id={option?.label}
                style={props?.style}
                name={props?.name}
                value={option.value}
                checked={props?.data === option.value}
                onChange={props?.onChange}
              />
              <label htmlFor={option?.label}>{option?.label}</label>
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

export default RadioElement;
