import React, { useRef, useState } from "react";
import "./SurveyForm.css";
import { FaCloudUploadAlt } from "react-icons/fa";

const SurveyForm = ({
  properties,
  subType,
  errors,
  formData,
  handleChange,
  handleRemoveFile,
  handleSubmitFormData,
  index,
}) => {
  const fileRef = useRef<any>(null);
  const [tooltipStyle, setTooltipStyle] = useState<any>({
    display: "none",
    left: 0,
  });

  const handleRangeTooltip = (e) => {
    const newValue = e.target.value;
    const rangeWidth = e.target.offsetWidth;
    const tooltipWidth = 40; // Adjust based on your tooltip's width

    const x = properties?.validation?.minRange;
    const y = properties?.validation?.maxRange;
    const z = newValue; // Value to calculate percentage for

    let percentage;

    if (z == x) {
      percentage = 0;
    } else if (z == y) {
      percentage = 1;
    } else {
      percentage = (z - x) / (y - x);
    }
    const leftOffset = (rangeWidth - tooltipWidth) * percentage;

    setTooltipStyle({ display: "block", left: `${leftOffset}px` });
  };
  const required = properties?.validation?.required;

  const fieldName = properties?.name + index;
  return (
    <div className="flex justify-around left-align flex-column">
      {properties?.questionDetails?.question_image?.dataURL && (
        <img
          src={properties.questionDetails.question_image.dataURL}
          className="question_img"
          alt="header-logo"
        />
      )}
      {subType && !["submit_button"].includes(subType) && (
        <p className="sf_que_input" style={properties?.question_style}>
          {properties?.questionDetails?.question_text
            ? properties?.questionDetails?.question_text
            : subType === "survey_image"
            ? "Label"
            : "Question"}
          {required && <span className="required_color">*</span>}
        </p>
      )}
      <div className="flex flex-column mt-5">
        <div className="relative">
          {subType === "shortanswer" && (
            <input
              id="shortanswer"
              type="text"
              name={fieldName || "shortanswer" + index}
              className="flex flex-column items-center justify-center ans_input_style"
              placeholder="Enter your answer here"
              maxLength={properties?.validation?.maxLength || null}
              minLength={properties?.validation?.minLength || null}
              style={properties?.answer_style}
              value={formData[fieldName] || ""}
              onChange={(e) => handleChange(e, fieldName, false)}
            />
          )}
          {subType === "longanswer" && (
            <textarea
              id="longanswer"
              className="flex flex-column items-center justify-center ans_textarea_style"
              placeholder="Enter your answer here"
              style={properties?.answer_style}
              name={fieldName || "longanswer" + index}
              value={formData[fieldName] || ""}
              onChange={(e) => handleChange(e, fieldName, false)}
              maxLength={properties?.validation?.maxLength || null}
              minLength={properties?.validation?.minLength || null}
            />
          )}
          {subType === "survey_dropdown" && (
            <div>
              <select
                name={fieldName || "survey_dropdown" + index}
                value={formData[fieldName] || ""}
                onChange={(e) => handleChange(e, fieldName, false)}
                className="fluid"
                style={properties?.answer_style}
              >
                {properties?.optionDetails?.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          {subType === "survey_radio" && (
            <div className="flex flex-row justify-start items-center radio_option_style">
              {properties?.optionDetails?.map((option) => {
                return (
                  <div
                    key={option.value}
                    className="flex flex-row justify-start items-center"
                  >
                    <input
                      type="radio"
                      id={option.value}
                      name="option"
                      value={option.value}
                      className="option_radio"
                      checked={formData[fieldName] === option.value}
                      onChange={(e) => handleChange(e, fieldName, false)}
                    />
                    <label
                      htmlFor={option.value}
                      className="option_label_style"
                    >
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          {subType === "survey_checkbox" && (
            <div className="flex flex-row justify-start items-center radio_option_style">
              {properties?.optionDetails?.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center"
                  >
                    <input
                      className="option_radio"
                      type="checkbox"
                      id={option.value + index}
                      name="option"
                      value={option.value}
                      checked={formData[fieldName]?.includes(option.value)}
                      onChange={(e) => handleChange(e, fieldName, true)}
                    />
                    <label
                      htmlFor={option.value}
                      className="option_label_style"
                    >
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          {subType === "survey_image" && (
            <div>
              <div className="flex flex-row flex-wrap justify-start items-center align-center pointer fluid">
                {formData?.[fieldName]?.map((image, index) => (
                  <div key={Math.random()} className="que_img_div">
                    <div
                      className="sf_cancel_icon"
                      onClick={() => handleRemoveFile(fieldName, index)}
                    >
                      X
                    </div>
                    <img
                      src={image.dataURL}
                      className="que_img_arr"
                      alt="header-logo"
                    />
                  </div>
                ))}
              </div>
              <div
                onClick={() => fileRef?.current.click()}
                className="flex flex-row justify-center items-center align-center pointer image_upload"
                style={properties?.answer_style}
              >
                <FaCloudUploadAlt />
                <span className="font-12 font-weight-100 ml1 text_wrap_css">
                  {properties?.isMultiAllowed ? "Upload Files" : "Upload File"}
                </span>
              </div>
              <input
                ref={fileRef}
                style={{ visibility: "hidden" }}
                className="fileUpload"
                id="file-upload"
                type="file"
                name={"file" + index}
                onChange={(e) =>
                  handleChange(e, fieldName, "file", properties?.isMultiAllowed)
                }
                multiple={properties?.isMultiAllowed}
              />
            </div>
          )}
          {subType === "range" ? (
            <div
              style={properties?.answer_style}
              className="qa_range_container"
            >
              <div className="sf_range_container">
                <div className="sf_range_subcontainer">
                  <input
                    type="range"
                    min={properties?.validation?.minRange}
                    max={properties?.validation?.maxRange}
                    name={fieldName || "range" + index}
                    value={formData[fieldName] || 0}
                    onChange={(e) => {
                      handleChange(e, fieldName, false);
                      handleRangeTooltip(e);
                    }}
                    className="sf_range_input"
                  />
                  <span
                    className="range_tooltip"
                    style={{
                      ...tooltipStyle,
                      backgroundColor: properties?.answer_style?.accentColor,
                      color: properties?.answer_style?.color,
                    }}
                  >
                    {`${formData[fieldName] || 0} ${
                      properties?.validation?.unit || ""
                    }`}
                  </span>
                </div>
                <div className="sf_range_label">
                  <span className="min-value">
                    {properties?.validation?.minRange
                      ? properties?.validation?.minRange
                      : 0}
                    {properties?.validation?.unit}
                  </span>
                  <span className="max-value">
                    {properties?.validation?.maxRange
                      ? properties?.validation?.maxRange
                      : 100}
                    {properties?.validation?.unit}
                  </span>
                </div>
              </div>
            </div>
          ) : null}
          {subType === "submit_button" && (
            <div>
              <div className="flex flex-row justify-start items-center align-center pointer fluid">
                <button
                  className={"form_button_css"}
                  onClick={() => {
                    handleSubmitFormData(properties?.questionDetails?.call_url);
                  }}
                  style={properties?.answer_style}
                >
                  {properties?.questionDetails?.button_label
                    ? properties?.questionDetails?.button_label
                    : "Submit Button"}
                </button>
              </div>
            </div>
          )}
          {(required || errors?.[fieldName]) && (
            <p
              style={{
                visibility: errors?.[fieldName] ? "visible" : "hidden",
                fontSize: "10px",
                color: "red",
              }}
            >
              {errors?.[fieldName] === true
                ? `${properties?.label || fieldName} is required.`
                : errors?.[fieldName]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
