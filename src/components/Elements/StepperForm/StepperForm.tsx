import React, { useState } from "react";
import "./StepperForm.css";
import { FormBuilder as FormBuilderPackage } from "@shubham-chavda/react-custom-components";

const StepperForm = (props) => {
  const [selectedStepperNumber, setSelectedStepperNumber] = useState(1);

  const handleStepClick = (step) => {
    setSelectedStepperNumber(step);
  };
  const RenderSteps = () => {
    const steps: any = [];
    for (let i = 1; i <= props?.stepperJson?.numSteps; i++) {
      steps.push(
        <div key={i} className="step-container_preview">
          <div
            className={`step ${selectedStepperNumber === i ? "active" : ""}`}
            onClick={() => handleStepClick(i)}
          >
            {i}
          </div>
          {i < props?.stepperJson?.numSteps && <div className="line"></div>}
        </div>
      );
    }
    return steps;
  };
  return (
    <>
      <div className="stepper-container-preview">
        <div className="stepper_preview">{RenderSteps()}</div>
        <div className="json_wrapper">
          <FormBuilderPackage
            jsonData={props?.stepperJson?.[selectedStepperNumber]}
          />
        </div>
        <div className="stepper_btn_container_preview">
          <button
            onClick={() => setSelectedStepperNumber((prev) => prev - 1)}
            disabled={selectedStepperNumber < 2}
          >
            Previous
          </button>
          <button
            onClick={() => {
              selectedStepperNumber < +props?.stepperJson?.numSteps
                ? setSelectedStepperNumber((prev) => prev + 1)
                : null;
            }}
          >
            {selectedStepperNumber === +props?.stepperJson?.numSteps
              ? "Finish"
              : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default StepperForm;
