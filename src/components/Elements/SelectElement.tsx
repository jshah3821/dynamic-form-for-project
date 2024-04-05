import React from "react";

const SelectElement = (props) => {
  return (
    <div className="selectBoxContainer px1">
      <label htmlFor={props?.id}>{props?.label}</label>
      <select
        value={props?.value}
        onChange={props?.onChange}
        style={props?.style}
        name={props?.label}
        id={props?.id}
      >
        {props?.options?.map((option, innerIndex) => {
          return (
            <option key={innerIndex} value={option?.value}>
              {option?.label}
            </option>
          );
        })}
      </select>
      {props?.required && <p style={{
        visibility: props?.errors?.[props?.name] ? "visible" : "hidden",
        fontSize: "10px",
        color: "red",
      }}>{props?.label} is required.</p>}
    </div>
  );
};

export default SelectElement;
