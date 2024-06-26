import { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { removeKeyInObject } from "../utils/removeKeyInObject";
import "./SurveyForm.css";

const SurveyForm = ({
  queData,
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

  const fieldId = queData?.id;

  const { question_style } = properties;
  const { answer_style } = properties;

  const queContStyle = {
    marginBottom: question_style.marginBottom,
    marginLeft: question_style?.marginLeft,
    marginRight: question_style?.marginRight,
    marginTop: question_style?.marginTop,
    paddingBottom: question_style?.paddingBottom,
    paddingLeft: question_style?.paddingLeft,
    paddingRight: question_style?.paddingRight,
    paddingTop: question_style?.paddingTop,
  };

  const ansContentTextStyle = {
    color: answer_style?.color,
    fontSize: answer_style?.fontSize,
    fontStyle: answer_style?.fontStyle,
    fontFamily: answer_style?.fontFamily,
    fontWeight: answer_style?.fontWeight,
    textAlign: answer_style?.textAlign,
    textDecoration: answer_style?.textDecoration,
    textTransform: answer_style?.textTransform,
  };

  return (
    <div
      style={queContStyle}
      className="flex justify-around left-align flex-column"
    >
      {properties?.questionDetails?.question_image?.dataURL && (
        <img
          src={properties.questionDetails.question_image.dataURL}
          className="question_img"
          alt="header-logo"
        />
      )}
      {subType && !["submit_button"].includes(subType) && (
        <p
          className="sf_que_input"
          style={removeKeyInObject(question_style, queContStyle)}
        >
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
              name={"shortanswer"}
              className="flex flex-column items-center justify-center ans_input"
              placeholder="Enter your answer here"
              maxLength={properties?.validation?.maxLength || null}
              minLength={properties?.validation?.minLength || null}
              style={properties?.answer_style}
              value={formData[fieldId] || ""}
              onChange={(e) => handleChange(e, fieldId)}
            />
          )}
          {subType === "longanswer" && (
            <textarea
              id="longanswer"
              className="flex flex-column items-center justify-center ans_textarea"
              placeholder="Enter your answer here"
              style={properties?.answer_style}
              name={"longanswer"}
              value={formData[fieldId] || ""}
              onChange={(e) => handleChange(e, fieldId)}
              maxLength={properties?.validation?.maxLength || null}
              minLength={properties?.validation?.minLength || null}
            />
          )}
          {subType === "survey_dropdown" && (
            <div>
              <select
                name={"survey_dropdown"}
                value={formData[fieldId] || ""}
                onChange={(e) => handleChange(e, fieldId)}
                className="sf_dropdown"
                style={properties?.answer_style}
              >
                <option key="" value="">
                  Select your option
                </option>
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
            <div
              className="flex flex-row justify-start items-center radio_option_style"
              style={properties?.answer_style}
            >
              {properties?.optionDetails?.map((option) => {
                return (
                  <div
                    key={option.value}
                    className="flex flex-row justify-start items-center"
                  >
                    <input
                      type="radio"
                      id={option.value}
                      name="survey_radio"
                      value={option.value}
                      className="option_radio"
                      checked={formData[fieldId] === option.value}
                      onChange={(e) => handleChange(e, fieldId)}
                    />
                    <label
                      htmlFor={option.value}
                      className="option_label_style"
                      style={ansContentTextStyle}
                    >
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          {subType === "survey_checkbox" && (
            <div
              className="flex flex-row justify-start items-center radio_option_style"
              style={properties?.answer_style}
            >
              {properties?.optionDetails?.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center sf_checkbox"
                  >
                    <input
                      className="option_radio"
                      type="checkbox"
                      id={option.value + index}
                      name="survey_checkbox"
                      value={option.value}
                      checked={formData[fieldId]?.includes(option.value)}
                      onChange={(e) => handleChange(e, fieldId)}
                    />
                    <label
                      htmlFor={option.value}
                      className="option_label_style"
                      style={ansContentTextStyle}
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
              <div className="flex flex-row flex-wrap justify-start items-center align-center pointer">
                {formData?.[fieldId]?.map((image, index) => (
                  <div key={Math.random()} className="que_img_div">
                    <div
                      className="sf_cancel_icon"
                      onClick={() => handleRemoveFile(fieldId, index)}
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
                name={"survey_image"}
                onChange={(e) =>
                  handleChange(e, fieldId, properties?.isMultiAllowed)
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
                    value={formData[fieldId] || 0}
                    onChange={(e) => {
                      handleChange(e, fieldId);
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
                    {`${formData[fieldId] || 0} ${
                      properties?.validation?.unit || ""
                    }`}
                  </span>
                </div>
                <div className="sf_range_label">
                  <span className="min-value" style={ansContentTextStyle}>
                    {properties?.validation?.minRange
                      ? properties?.validation?.minRange
                      : 0}
                    {properties?.validation?.unit}
                  </span>
                  <span className="max-value" style={ansContentTextStyle}>
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
          {(required || errors?.[fieldId] || errors?.[fieldId] !== "") && (
            <p
              style={{
                visibility:
                  errors?.[fieldId] || errors?.[fieldId] !== ""
                    ? "visible"
                    : "hidden",
                fontSize: "10px",
                color: "red",
              }}
            >
              {errors?.[fieldId] === true
                ? `This field is required.`
                : errors?.[fieldId]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
