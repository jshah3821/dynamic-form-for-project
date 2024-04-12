import React, { useRef } from "react";
import "./SurveyForm.css";
import { FaCloudUploadAlt } from "react-icons/fa";

const SurveyForm = ({
  properties,
  subType,
  errors,
  formData,
  handleChange,
  handleSubmitFormData,
  index,
}) => {
  const fileRef = useRef<any>(null);
  const required = properties?.validation?.required;
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
        <p className="que_input_styles" style={properties?.question_style}>
          {properties?.questionDetails?.question_text ??
          subType === "survey_image"
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
              name={properties?.name || "shortanswer" + index}
              className="flex flex-column items-center justify-center ans_input_style"
              placeholder="Enter your answer here"
              maxLength={properties?.validation?.maxLength || null}
              minLength={properties?.validation?.minLength || null}
              style={properties?.answer_style}
              value={formData[properties?.name] || ""}
              onChange={(e) => handleChange(e, properties?.name, false)}
            />
          )}
          {subType === "longanswer" && (
            <textarea
              id="longanswer"
              name={properties?.name || "longanswer" + index}
              className="flex flex-column items-center justify-center ans_textarea_style"
              placeholder="Enter your answer here"
              style={properties?.answer_style}
              value={formData[properties?.name] || ""}
              maxLength={properties?.validation?.maxLength || null}
              minLength={properties?.validation?.minLength || null}
              onChange={(e) => handleChange(e, properties?.name, false)}
            />
          )}
          {subType === "survey_dropdown" && (
            <div>
              <select
                name={properties?.name || "survey_dropdown" + index}
                value={formData[properties?.name] || ""}
                onChange={(e) => handleChange(e, properties?.name, false)}
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
                      checked={formData[properties?.name] === option.value}
                      onChange={(e) => handleChange(e, properties?.name, false)}
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
                      checked={formData[properties?.name]?.includes(
                        option.value
                      )}
                      onChange={(e) => handleChange(e, properties?.name, true)}
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
              <div className="flex flex-row justify-start items-center align-center pointer fluid">
                {formData?.[properties?.name]?.map((image) => (
                  <div key={image.dataURL} className="que_img_div">
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
                  Upload File
                </span>
              </div>
              <input
                ref={fileRef}
                style={{ visibility: "hidden" }}
                className="fileUpload"
                id="file-upload"
                type="file"
                name={"file" + index}
                onChange={(e) => handleChange(e, properties?.name, "file")}
              />
            </div>
          )}
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
          {required ||
            (errors?.[properties?.name] && (
              <p
                style={{
                  visibility: errors?.[properties?.name] ? "visible" : "hidden",
                  fontSize: "10px",
                  color: "red",
                }}
              >
                {errors?.[properties?.name] === true
                  ? `${properties?.label || properties?.name} is required.`
                  : errors?.[properties?.name]}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
