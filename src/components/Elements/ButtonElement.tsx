const ButtonElement = (props: any) => {
  const directionStyle = {
    direction: props?.style?.direction,
  };
  return (
    <div style={directionStyle} className="px1">
      <button
        // className={"button-Border"}
        className={`height-button form_button_css_updated`}
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
