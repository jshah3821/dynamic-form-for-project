import "./CustomArrowButton.css";

const CustomArrowButton = (props) => {
  return (
    <button
      className={`custom-button ${props?.type === "left"
          ? "custom-button-left"
          : props?.type === "right"
            ? "custom-button-right"
            : ""
        } `}
    ></button>
  );
};

export default CustomArrowButton;
