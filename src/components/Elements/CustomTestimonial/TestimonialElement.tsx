import React, { useState, useEffect, useRef } from "react";
import "./testimonialStyles.css";
import "react-multi-carousel/lib/styles.css";
import { testimonialDefault64 } from "../../Elements/assets/testimonialDefault64";

const TestimonialElement = ({
  testimonial,
  testimonialCardDetails,
  previewType,
}) => {
  const prevNextEnable =
    testimonial?.testimonialDetails?.nextPrvButtonAvailable;
  const autoPlay = testimonial?.testimonialDetails?.autoPlay;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const divRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setWindowSize({
          width: divRef?.current?.offsetWidth,
          height: divRef?.current?.offsetHeight,
        });
      }
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Example function to call when size changes
  // const handleSizeChange = () => {
  //   if (windowSize.width > 320 && windowSize.width < 480) {
  //     setVisibleCards(1);
  //   } else if (windowSize.width > 480 && windowSize.width < 812) {
  //     setVisibleCards(2);
  //   } else {
  //     setVisibleCards(3);
  //   }
  // };

  // // Optionally, you can call your function whenever windowSize changes
  // useEffect(() => {
  //   handleSizeChange();
  // }, [windowSize]);

  useEffect(() => {
    const handleSizeChange = () => {
      switch (previewType) {
        case "prev_desktop":
          setVisibleCards(3);
          break;
        case "prev_tablet":
          setVisibleCards(3);
          break;
        case "prev_ls_mobile":
          setVisibleCards(2);
          break;
        case "prev_pt_mobile":
          setVisibleCards(1);
          break;
        default:
          setVisibleCards(3);
          break;
      }
    };

    handleSizeChange();
  }, [previewType]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      Math.min(testimonialCardDetails?.length - visibleCards, prevSlide + 1)
    );
  };

  const autoPlayIntervalRef: any = useRef(null);

  const startAutoplay = () => {
    if (autoPlay) {
      autoPlayIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      clearInterval(autoPlayIntervalRef.current);
    };
  }, [autoPlay]);

  const handleIndicatorClick = (index) => {
    const maxCurrentSlide = Math.max(
      0,
      testimonialCardDetails?.length - visibleCards
    );
    const newCurrentSlide = Math.min(maxCurrentSlide, index);
    setCurrentSlide(newCurrentSlide);
  };

  useEffect(() => {
    if (autoPlay && autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      startAutoplay();
    }
  }, [currentSlide]);

  const innerDivStyle = {
    borderBottomColor: testimonial?.testimonialCardStyles.borderBottomColor,
    borderBottomLeftRadius:
      testimonial?.testimonialCardStyles.borderBottomLeftRadius,
    borderBottomRightRadius:
      testimonial?.testimonialCardStyles.borderBottomRightRadius,
    borderBottomStyle: testimonial?.testimonialCardStyles.borderBottomStyle,
    borderBottomWidth: testimonial?.testimonialCardStyles.borderBottomWidth,
    borderColor: testimonial?.testimonialCardStyles.borderColor,
    borderLeftColor: testimonial?.testimonialCardStyles.borderLeftColor,
    borderLeftStyle: testimonial?.testimonialCardStyles.borderLeftStyle,
    borderLeftWidth: testimonial?.testimonialCardStyles.borderLeftWidth,
    borderRadius: testimonial?.testimonialCardStyles.borderRadius,
    borderRightColor: testimonial?.testimonialCardStyles?.borderRightColor,
    borderRightStyle: testimonial?.testimonialCardStyles?.borderRightStyle,
    borderRightWidth: testimonial?.testimonialCardStyles?.borderRightWidth,
    borderStyle: testimonial?.testimonialCardStyles?.borderStyle,
    borderTopColor: testimonial?.testimonialCardStyles?.borderTopColor,
    borderTopLeftRadius:
      testimonial?.testimonialCardStyles?.borderTopRightRadius,
    borderTopRightRadius:
      testimonial?.testimonialCardStyles?.borderTopRightRadius,
    borderTopStyle: testimonial?.testimonialCardStyles?.borderTopStyle,
    borderTopWidth: testimonial?.testimonialCardStyles?.borderTopWidth,
    borderWidth: testimonial?.testimonialCardStyles?.borderWidth,
  };

  // const Tm_Container_Style = {
  //   height: "100%",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: " rgb(239, 239, 239)",
  // };

  // const tm_height = {
  //   display: "flex",
  //   flexDirection: "column",
  //   width: "100%",
  //   height: "80%",
  // };

  const tm_subcontainer = {
    padding: "1rem 0.5rem 0.5rem 0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    height: "100%",
    margin: "0px auto",
    width: "100%",
    justifyContent: "center",
  };

  let defaultWidth = "14.5rem";



  const tm_card_container = {
    fontSize: "14px",
    color: "#666",
    margin: "20px",
    marginBottom: "0px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: testimonial?.testimonialCardStyles?.backgroundColor,
    width: testimonial?.testimonialCardStyles?.width || defaultWidth,
    height: testimonial?.testimonialCardStyles?.height || "100%",
    maxWidth: testimonial?.testimonialCardStyles?.maxWidth,
    minWidth: testimonial?.testimonialCardStyles?.minWidth,
    maxHeight: testimonial?.testimonialCardStyles?.maxHeight,
    minHeight: testimonial?.testimonialCardStyles?.minHeight,
    border: testimonial?.testimonialCardStyles?.border,
    borderTopLeftRadius:
      testimonial?.testimonialCardStyles?.borderTopLeftRadius,
    borderTopRightRadius:
      testimonial?.testimonialCardStyles?.borderTopRightRadius,
    borderBottomLeftRadius:
      testimonial?.testimonialCardStyles?.borderBottomLeftRadius,
    borderBottomRightRadius:
      testimonial?.testimonialCardStyles?.borderBottomRightRadius,
    borderWidth: testimonial?.testimonialCardStyles?.borderWidth,
    borderStyle: testimonial?.testimonialCardStyles?.borderStyle,
    borderColor: testimonial?.testimonialCardStyles?.borderColor,
    borderTopWidth: testimonial?.testimonialCardStyles?.borderTopWidth,
    borderTopStyle: testimonial?.testimonialCardStyles?.borderTopStyle,
    borderTopColor: testimonial?.testimonialCardStyles?.borderTopColor,
    borderRightWidth: testimonial?.testimonialCardStyles?.borderRightWidth,
    borderRightStyle: testimonial?.testimonialCardStyles?.borderRightStyle,
    borderRightColor: testimonial?.testimonialCardStyles?.borderRightColor,
    borderBottomWidth: testimonial?.testimonialCardStyles?.borderBottomWidth,
    borderBottomStyle: testimonial?.testimonialCardStyles?.borderBottomStyle,
    borderBottomColor: testimonial?.testimonialCardStyles?.borderBottomColor,
    borderLeftWidth: testimonial?.testimonialCardStyles?.borderLeftWidth,
    borderLeftStyle: testimonial?.testimonialCardStyles?.borderLeftStyle,
    borderLeftColor: testimonial?.testimonialCardStyles?.borderLeftColor,
    borderRadius: testimonial?.testimonialCardStyles?.borderRadius,
  };



  const spacingStyle = {
    marginTop: testimonial?.style?.marginTop,
    marginLeft: testimonial?.style?.marginLeft,
    marginRight: testimonial?.style?.marginRight,
    marginBottom: testimonial?.style?.marginBottom,
    paddingTop: testimonial?.style?.paddingTop,
    paddingLeft: testimonial?.style?.paddingLeft,
    paddingRight: testimonial?.style?.paddingRight,
    paddingBottom: testimonial?.style?.paddingBottom,
  };

  let borderStyle = {
    border: testimonial?.style?.border,
    borderRadius: testimonial?.style?.borderRadius,
    borderTopLeftRadius: testimonial?.style?.borderTopLeftRadius,
    borderTopRightRadius: testimonial?.style?.borderTopRightRadius,
    borderBottomLeftRadius: testimonial?.style?.borderBottomLeftRadius,
    borderBottomRightRadius: testimonial?.style?.borderBottomRightRadius,
    borderWidth: testimonial?.style?.borderWidth,
    borderStyle: testimonial?.style?.borderStyle,
    borderColor: testimonial?.style?.borderColor,
    borderTopWidth: testimonial?.style?.borderTopWidth,
    borderTopStyle: testimonial?.style?.borderTopStyle,
    borderTopColor: testimonial?.style?.borderTopColor,
    borderRightWidth: testimonial?.style?.borderRightWidth,
    borderRightStyle: testimonial?.style?.borderRightStyle,
    borderRightColor: testimonial?.style?.borderRightColor,
    borderBottomWidth: testimonial?.style?.borderBottomWidth,
    borderBottomStyle: testimonial?.style?.borderBottomStyle,
    borderBottomColor: testimonial?.style?.borderBottomColor,
    borderLeftWidth: testimonial?.style?.borderLeftWidth,
    borderLeftStyle: testimonial?.style?.borderLeftStyle,
    borderLeftColor: testimonial?.style?.borderLeftColor,
  };

  // let heightStyle = {
  //   width: testimonial?.style?.width,
  //   height: testimonial?.style?.height,
  //   maxWidth: testimonial?.style?.maxWidth,
  //   minWidth: testimonial?.style?.minWidth,
  //   maxHeight: testimonial?.style?.maxHeight,
  //   minHeight: testimonial?.style?.minHeight,
  // };

  return (
    <div
      // className="testimonial-container"
      ref={divRef}
      style={{
        width: testimonial?.style?.width,
        height: testimonial?.style?.height,
        ...spacingStyle,
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:
            testimonial?.style?.backgroundColor || "rgb(239, 239, 239)",
          flexDirection: "column",
          ...borderStyle,
        }}
      >
        <div
          // style={tm_height}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "80%",
          }}
          // className="testimonial_subcontainer"
          // style={{ height: testimonial?.style?.height }}
        >
          <div style={tm_subcontainer}>
            {prevNextEnable && <button onClick={prevSlide}>&#10094;</button>}

            {testimonialCardDetails
              .slice(currentSlide, currentSlide + visibleCards)
              .map((item, index) => {
                return (
                  <div
                    className="testimonial_card_styles"
                    key={currentSlide + index}
                    style={tm_card_container}
                  >
                    <div
                      style={{ padding: "20px" }}
                      // className={`testimonial_inner_div_card`}
                      // style={testimonial?.testimonialCardStyles}
                      // style={removeKeyInObject(
                      //   testimonial?.testimonialCardStyles,
                      //   innerDivStyle
                      // )}
                    >
                      <div className="testimonial-content">
                        <div className="img-wrapper">
                          <img
                            src={
                              item.imageDetails.dataURL
                                ? item.imageDetails.dataURL
                                : testimonialDefault64
                            }
                            alt="profile"
                            style={testimonial?.cardImageStyles}
                          />
                        </div>
                        <p
                          className="testimonial-author"
                          style={testimonial?.cardTitleStyles}
                        >
                          {item.name}
                        </p>
                        <p
                          className="feedback_text"
                          style={testimonial?.cardContentStyles}
                        >
                          {item.feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            {prevNextEnable && (
              <button className="test-next" onClick={nextSlide}>
                &#10095;
              </button>
            )}
          </div>
        </div>
        <div className="indicators">
          {testimonialCardDetails?.map((item, index) => (
            <span
              key={index}
              className={`indicator ${
                index >= currentSlide && index < currentSlide + visibleCards
                  ? "active-indicator"
                  : ""
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialElement;
