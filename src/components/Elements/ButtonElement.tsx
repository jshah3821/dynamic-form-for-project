const ButtonElement = (props: any) => {
  const directionStyle = {
    direction: props?.style?.direction,
    height: props?.style?.height,
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={directionStyle} className="px1">
      <button
        className={`form_btn form_button_css_updated`}
        style={(props?.style, { height: "100%", width: props?.style?.width })}
        onClick={props?.onClick}
        disabled={props?.disabled}
      >
        {props?.label}
      </button>
    </div>
  );
};

export default ButtonElement;
