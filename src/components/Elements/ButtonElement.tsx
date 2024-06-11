const ButtonElement = (props: any) => {
  return (
    <div className="px1">
      <button
        className={"button-Border"}
        // className={`height-button form_button_css_updated`}
        //* keep it for reference
        style={props?.style}
        onClick={props?.onClick}
        disabled={props?.disabled}
      >
        {props?.label}
      </button>
    </div>
  );
};

export default ButtonElement;
