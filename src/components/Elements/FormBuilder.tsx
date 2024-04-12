import { useEffect, useState } from "react";
import React from "react";
import "./FormBuilder.css";
import InputElement from "./InputElement";
import ButtonElement from "./ButtonElement";
import SelectElement from "./SelectElement";
import RadioElement from "./RadioElement";
import TextboxElement from "./TextboxElement";
import CheckboxElement from "./CheckboxElement";
import "react-multi-carousel/lib/styles.css";
import SurveyForm from "./SurveyForm/SurveyForm.tsx";
import { testimonialDefault64 } from "./assets/testimonialDefault64.js";
import { removeQuotesFromKeys } from "./generalFunctions.ts";
import { FormBuilder as FormBuilderPackage } from "@shubham-chavda/react-custom-components";
import { ToastContainer } from "react-toastify";
import { callApi } from "./api.ts";
import "react-toastify/dist/ReactToastify.css";

const dataArray = {
  1: [
    {
      selectionType: "surveyform",
      id: "OkS2OmXnGSdJIGHoxkSLl",
      type: "surveyform",
      subType: "submit_button",
      properties: {
        questionDetails: {
          question_text: "",
          question_image: {},
          call_url:
            "https://dev.azure.com/BrainvireInfo/Systems%20Training/_git/form-builder/pullrequest/119545?_a=commits",
          button_label: "sd",
        },
        answer_style: {
          backgroundColor: "#ff0000",
          fontSize: "",
          color: "",
          height: "",
          width: "",
        },
      },
      formId: null,
      isSelectedField: true,
    },
    {
      selectionType: "surveyform",
      type: "surveyform",
      subType: "shortanswer",
      title: "Short Answer",
      properties: {
        questionDetails: {
          question_text: "",
          question_image: {
            dataURL: testimonialDefault64,
          },
        },
        question_style: {
          backgroundColor: "gray",
          color: "black",
        },
        answer_style: {
          backgroundColor: "white",
          color: "red",
        },
      },
    },
    {
      selectionType: "surveyform",
      type: "surveyform",
      subType: "longanswer",
      title: "Long Answer",
      properties: {
        questionDetails: {
          question_text: "",
          question_image: {
            dataURL: testimonialDefault64,
          },
        },
        question_style: {
          backgroundColor: "gray",
          color: "black",
        },
        answer_style: {
          backgroundColor: "white",
          color: "red",
        },
      },
    },
    {
      selectionType: "surveyform",
      type: "surveyform",
      subType: "survey_dropdown",
      title: "Dropdown",
      properties: {
        questionDetails: {
          question_text: "",
          question_image: {
            dataURL: testimonialDefault64,
          },
        },
        question_style: {
          backgroundColor: "gray",
          color: "black",
        },
        answer_style: {
          backgroundColor: "white",
          color: "red",
          width: "100%",
        },
        optionDetails: [
          { label: "first", value: "first" },
          { label: "second", value: "second" },
        ],
      },
    },
    {
      selectionType: "surveyform",
      type: "surveyform",
      subType: "survey_radio",
      title: "Dropdown",
      properties: {
        questionDetails: {
          question_text: "",
          question_image: {
            dataURL: "",
          },
        },
        question_style: {
          backgroundColor: "blue",
          color: "black",
        },
        answer_style: {
          backgroundColor: "white",
          color: "red",
        },
        optionDetails: [
          { label: "first", value: "first" },
          { label: "second", value: "second" },
        ],
      },
    },
    {
      selectionType: "surveyform",
      type: "surveyform",
      subType: "survey_checkbox",
      title: "Dropdown",
      properties: {
        questionDetails: {
          question_text: "",
          question_image: {
            dataURL: "",
          },
        },
        question_style: {
          backgroundColor: "blue",
          color: "black",
        },
        answer_style: {
          backgroundColor: "white",
          color: "red",
        },
        optionDetails: [
          { label: "first", value: "first" },
          { label: "second", value: "second" },
        ],
      },
    },
    {
      type: "element",
      subType: "input",
      properties: {
        type: "text",
        name: "fieldName",
        label: "Text box 1",
        placeholder: "Text box 1 plac",
      },
      validation: {
        minLength: 5,
        maxLength: 10,
        required: true,
      },
      style: { height: "20px", width: "100%", padding: "10px" },
    },
    {
      type: "element",
      subType: "textarea",
      properties: {
        rows: 5,
        label: "Text Area",
        name: "textArea",
        placeholder: "Text Area place",
      },
      style: { padding: "10px" },
      validation: {
        minLength: 5,
        maxLength: 10,
        required: true,
      },
    },
    {
      type: "element",
      subType: "radio",
      validation: {
        required: true,
      },
      properties: {
        label: "Gender",
        name: "genderRadio",
        options: [
          { label: "Male", value: "M" },
          { label: "Female", value: "F" },
        ],
      },
      style: { padding: "10px" },
    },
    {
      type: "element",
      subType: "select",
      validation: {
        required: true,
      },
      properties: {
        label: "Gender",
        name: "gender",
        options: [
          { label: "Male", value: "M" },
          { label: "Female", value: "F" },
        ],
      },
      style: { height: "50px", padding: "10px" },
    },
    {
      type: "element",
      subType: "button",
      properties: {
        label: "Click me",
        disabled: false,
      },
      style: {
        height: "50px",
        width: "100%",
        backgroundColor: "red",
        padding: "10px",
      },
    },
    {
      type: "element",
      subType: "checkbox",
      properties: {
        label: "Remember me",
        name: "consent",
      },
      validation: {
        required: true,
      },
      style: { padding: "10px" },
    },
    {
      type: "typography",
      subType: "text",
      properties: {
        content: "Label",
      },
      style: {
        fontSize: "24px",
        color: "orange",
        margin: "10px 0px",
        fontWeight: "bold",
      },
      text: "Add Label",
    },
    {
      type: "typography",
      subType: "heading",
      properties: {
        content: "Heading",
      },
      style: { fontSize: "24px", color: "blue" },
      text: "Add Heading text",
    },
    {
      type: "layout",
      subType: "hr",
      style: {},
    },
  ],
  2: [
    {
      type: "typography",
      subType: "text",
      properties: {
        content: "Label",
      },
      style: { fontSize: "24px", color: "black", padding: " 0px 0.5rem" },
      text: "Registration Form",
    },
    {
      type: "element",
      subType: "input",
      properties: {
        name: "email",
        type: "email",
        label: "Email Id*",
        placeholder: "Enter Email Id",
      },
      validation: {
        maxLength: 30,
        required: true,
      },
      style: {},
    },
    {
      type: "element",
      subType: "input",
      properties: {
        type: "text",
        name: "firstName",
        label: "First Name*",
        placeholder: "Enter First Name",
      },
      validation: {
        maxLength: 30,
        required: true,
      },
      style: {},
    },
    {
      type: "element",
      subType: "input",
      properties: {
        type: "text",
        name: "lastName",
        label: "Last Name*",
        placeholder: "Enter Last Name",
      },
      validation: {
        maxLength: 30,
        required: true,
      },
      style: {},
    },
    {
      type: "element",
      subType: "input",
      properties: {
        type: "text",
        name: "phoneNumber",
        label: "Phone Number*",
        placeholder: "Enter Phone Number",
      },
      validation: {
        maxLength: 30,
        required: true,
      },
      style: {},
    },
    {
      type: "element",
      subType: "input",
      properties: {
        type: "text",
        name: "company",
        label: "Company Name*",
        placeholder: "Enter Company Name",
      },
      validation: {
        maxLength: 30,
        required: true,
      },
      style: {},
    },
    {
      type: "element",
      subType: "select",
      properties: {
        label: "Title",
        name: "title",
        options: [
          { label: "Accountant", value: "Acc" },
          { label: "Consultant", value: "Con" },
          { label: "Owner", value: "Own" },
          { label: "Developer", value: "Dev" },
          { label: "Manager", value: "Man" },
          { label: "Admin", value: "Adm" },
          { label: "Employee", value: "Emp" },
          { label: "Others", value: "Oth" },
        ],
      },
    },
    {
      type: "element",
      subType: "input",
      properties: {
        type: "password",
        name: "password",
        label: "Password*",
        placeholder: "Enter Password",
      },
      validation: {
        maxLength: 30,
        required: true,
      },
      style: {},
    },
    {
      type: "element",
      subType: "input",
      properties: {
        type: "password",
        name: "confirmPassword",
        label: "Confirm Password*",
        placeholder: "Enter Confirm Password",
      },
      validation: {
        maxLength: 30,
        required: true,
      },
      style: {},
    },
    {
      type: "element",
      subType: "button",
      properties: {
        label: "Register",
        disabled: false,
      },
      style: {
        color: "white",
        backgroundColor: "green",
        width: "100%",
        border: "none",
        padding: "10px 5px",
      },
    },
    {
      type: "layout",
      subType: "hr",
      style: {},
    },
  ],
};

interface Props {
  id?: number;
  jsonData?: any;
}
export const FormBuilder = ({ id, jsonData }: Props) => {
  const data = id ? dataArray?.[id] : jsonData;

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [initialFormData, setInitialFormData] = useState({});
  const validSubtypes = [
    "checkbox",
    "textarea",
    "radio",
    "select",
    "input",
    "survey_checkbox",
    "survey_radio",
    "longanswer",
    "shortanswer",
    "survey_image",
    "survey_dropdown",
  ];
  const invalidSubtypes = ["button", "submit_button"];
  const surveyformElements = [
    "survey_checkbox",
    "survey_radio",
    "longanswer",
    "shortanswer",
    "survey_image",
    "survey_dropdown",
  ];

  //code to create formData initialState from Input elements dynamically
  useEffect(() => {
    data?.map((obj, i) => {
      switch (obj?.type) {
        case "element":
          switch (obj?.subType) {
            case "input":
            case "select":
            case "radio":
            case "textarea":
              setFormData((prev) => ({ ...prev, [obj?.properties?.name]: "" }));
              setInitialFormData((prev) => ({
                ...prev,
                [obj?.properties?.name]: "",
              }));
              break;
            case "checkbox":
              setFormData((prev) => ({ ...prev, [obj?.properties?.name]: [] }));
              setInitialFormData((prev) => ({
                ...prev,
                [obj?.properties?.name]: [],
              }));
              break;
            default:
              return null;
          }
        case "surveyform":
          switch (obj?.subType) {
            case "shortanswer":
            case "longanswer":
            case "survey_radio":
              setFormData((prev) => ({ ...prev, [obj?.properties?.name]: "" }));
              setInitialFormData((prev) => ({
                ...prev,
                [obj?.properties?.name]: "",
              }));
              break;
            case "survey_checkbox":
            case "survey_image":
              setFormData((prev) => ({ ...prev, [obj?.properties?.name]: [] }));
              setInitialFormData((prev) => ({
                ...prev,
                [obj?.properties?.name]: [],
              }));
              break;
            case "survey_dropdown":
              setFormData((prev) => ({
                ...prev,
                [obj?.properties?.name]:
                  obj?.properties?.optionDetails?.[0]?.value,
              }));
              setInitialFormData((prev) => ({
                ...prev,
                [obj?.properties?.name]:
                  obj?.properties?.optionDetails?.[0]?.value,
              }));
            default:
              return null;
          }
        default:
          return null;
      }
    });
  }, [data]);

  const handleChange = (event, id, checkbox) => {
    if (checkbox === "file") {
      const fileList = event.target.files;
      const updatedFiles: any = [];
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const dataURL = e.target.result;
          updatedFiles.push({ name: file.name, dataURL });

          if (updatedFiles.length === fileList.length) {
            setFormData((prevState) => ({
              ...prevState,
              [id]: updatedFiles,
            }));
          }
        };
        reader.readAsDataURL(file);
      }
    } else if (checkbox) {
      const { checked, value } = event.target;
      if (checked) {
        setFormData((prevState) => ({
          ...prevState,
          [id]: [...formData[id], value],
        })); // Add to selected options
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [id]: formData[id].filter((option) => option !== value),
        })); // Remove from selected options
      }
    } else {
      const { value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };
  const handleValidate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      const isRequired = surveyformElements.includes(
        data?.find((obj) => obj?.properties?.name === key)?.subType
      )
        ? data?.find((obj) => obj?.properties?.name === key)?.properties
            ?.validation?.required
        : data?.find((obj) => obj?.properties?.name === key)?.validation
            ?.required;
      const isMinLength = surveyformElements.includes(
        data?.find((obj) => obj?.properties?.name === key)?.subType
      )
        ? data?.find((obj) => obj?.properties?.name === key)?.properties
            ?.validation?.minLength
        : data?.find((obj) => obj?.properties?.name === key)?.validation
            ?.minLength;
      if (isRequired) {
        function checkEmptyValue(value) {
          if (Array.isArray(value)) {
            return value.length === 0 ? false : true; // Empty Array
          } else if (typeof value === "object") {
            return value !== null && Object.keys(value).length === 0
              ? false
              : true; // Empty object
          } else {
            return value; // Return the input data for other cases
          }
        }
        newErrors[key] = !checkEmptyValue(value);
      }
      if (isMinLength && value) {
        value?.trim()?.length < isMinLength
          ? newErrors[key]
            ? true
            : (newErrors[key] = `minimum ${isMinLength} characters required.`)
          : false;
      }
    });
    setErrors(newErrors);
    return newErrors;
  };

  useEffect(() => {
    if (isSubmitClicked) {
      handleValidate();
    }
  }, [formData]);

  const handleSubmitFormData = (url?: string) => {
    setSubmitClicked(true);
    if (Object?.values(handleValidate()).every((value) => value === false)) {
      if (url) {
        callApi(url, formData, setFormData, initialFormData);
      } else {
        window.alert(JSON.stringify(formData));
        setFormData(initialFormData);
      }
      setSubmitClicked(false);
    }
  };

  return (
    <div className="mainFormContainer">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: "12px" }}
      />
      {data?.map((obj, index) => {
        switch (obj?.type) {
          case "element":
            switch (obj?.subType) {
              case "input":
                return (
                  <>
                    <InputElement
                      errors={errors}
                      key={index}
                      name={obj?.properties?.name}
                      id={index}
                      type={obj?.properties?.type}
                      style={obj?.style}
                      label={obj?.properties?.label}
                      placeholder={obj?.properties?.placeholder}
                      minLength={obj?.validation?.minLength}
                      maxLength={obj?.validation?.maxLength}
                      required={obj?.validation?.required}
                      value={formData[obj?.properties?.name] || ""}
                      onChange={(e) => {
                        if (
                          obj?.validation?.maxLength &&
                          e.target.value?.trim()?.length <=
                            obj?.validation?.maxLength
                        ) {
                          handleChange(e, obj?.properties?.name, false);
                        }
                      }}
                    />
                  </>
                );
              case "button":
                return (
                  <ButtonElement
                    key={index}
                    label={obj?.properties?.label}
                    onClick={() => {
                      handleSubmitFormData();
                    }}
                    disabled={obj?.properties?.disabled}
                    style={obj?.style}
                  />
                );
              case "select":
                return (
                  <SelectElement
                    errors={errors}
                    name={obj?.properties?.name}
                    required={obj?.validation?.required}
                    key={index}
                    label={obj?.properties?.label}
                    options={obj?.properties?.options}
                    style={obj?.style}
                    value={formData[obj?.properties?.name] || ""}
                    onChange={(e) =>
                      handleChange(e, obj?.properties?.name, false)
                    }
                  />
                );
              case "radio":
                return (
                  <RadioElement
                    errors={errors}
                    key={index}
                    name={obj?.properties?.name}
                    required={obj?.validation?.required}
                    label={obj?.properties?.label}
                    options={obj?.properties?.options}
                    style={obj?.style}
                    data={formData[obj?.properties?.name] || ""}
                    onChange={(e) =>
                      handleChange(e, obj?.properties?.name, false)
                    }
                  />
                );
              case "textarea":
                return (
                  <TextboxElement
                    errors={errors}
                    key={index}
                    id={index}
                    name={obj?.properties?.name}
                    required={obj?.validation?.required}
                    rows={obj?.properties?.rows}
                    label={obj?.properties?.label}
                    placeholder={obj?.properties?.placeholder}
                    minLength={obj?.validation?.minLength}
                    maxLength={obj?.validation?.maxLength}
                    style={obj?.style}
                    value={formData[obj?.properties?.name] || ""}
                    onChange={(e) =>
                      handleChange(e, obj?.properties?.name, false)
                    }
                  />
                );
              case "checkbox":
                return (
                  <CheckboxElement
                    optionDetails={obj?.properties?.optionDetails}
                    value={obj?.properties?.label}
                    errors={errors}
                    key={index}
                    id={index}
                    name={obj?.properties?.name}
                    label={obj?.properties?.label}
                    style={obj?.style}
                    checked={formData[obj?.properties?.name]?.includes(
                      obj?.properties?.label
                    )}
                    required={obj?.validation?.required}
                    onChange={(e) =>
                      handleChange(e, obj?.properties?.name, true)
                    }
                  />
                );
              default:
                return null;
            }
          case "typography":
            switch (obj?.subType) {
              case "heading":
                return (
                  <h2 key={index} style={obj?.style}>
                    {obj?.text}
                  </h2>
                );
              case "text":
                return (
                  <p key={index} style={obj?.style}>
                    {obj?.text || "Please add relevant label"}
                  </p>
                );
              default:
                return null;
            }
          case "layout":
            return obj?.subType === "hr" ? (
              <hr key={index} style={obj?.style} />
            ) : null;
          case "surveyform":
            return (
              <SurveyForm
                key={index}
                handleSubmitFormData={handleSubmitFormData}
                index={index}
                handleChange={handleChange}
                formData={formData}
                errors={errors}
                subType={obj?.subType}
                properties={obj?.properties}
              />
            );
          case "template":
            return (
              <FormBuilderPackage
                key={index}
                jsonData={removeQuotesFromKeys(obj?.json)}
              />
            );
          default:
            return null;
        }
      })}
      {data?.some((obj) => validSubtypes.includes(obj.subType)) &&
        !data?.some((obj) => invalidSubtypes.includes(obj.subType)) && (
          <div className="submit_btn_container">
            <button
              className="submit_btn"
              onClick={() => {
                handleSubmitFormData();
              }}
            >
              Submit
            </button>
            <button
              onClick={() => setFormData(initialFormData)}
              className="clear_btn"
            >
              Clear
            </button>
          </div>
        )}
    </div>
  );
};

export default FormBuilder;
