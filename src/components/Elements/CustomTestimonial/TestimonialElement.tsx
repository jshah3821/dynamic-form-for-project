import React, { useState, useEffect, useRef } from "react";
import "./testimonialStyles.css";
import "react-multi-carousel/lib/styles.css";
import { testimonialDefault64 } from "../../Elements/assets/testimonialDefault64";
import { removeKeyInObject } from "../utils/removeKeyInObject";

const TestimonialElement = ({ testimonial, testimonialCardDetails }) => {
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
          width: divRef.current.offsetWidth,
          height: divRef.current.offsetHeight,
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
  const handleSizeChange = () => {
    if (windowSize.width > 320 && windowSize.width < 480) {
      setVisibleCards(1);
    } else if (windowSize.width > 480 && windowSize.width < 812) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  };

  // Optionally, you can call your function whenever windowSize changes
  useEffect(() => {
    handleSizeChange();
  }, [windowSize]);

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
  return (
    <div
      className="testimonial-container"
      ref={divRef}
      style={testimonial?.style}
    >
      <div>
        <div className="testimonial_subcontainer">
          {prevNextEnable && (
            <button className="testimonial_prev_btn" onClick={prevSlide}>
              &#10094;
            </button>
          )}
          <div className="testimonial_container">
            {testimonialCardDetails
              .slice(currentSlide, currentSlide + visibleCards)
              .map((item, index) => {
                return (
                  <div
                    className="testimonial_card_styles"
                    key={currentSlide + index}
                    style={testimonial?.testimonialCardStyles}
                  >
                    <div
                      className={`testimonial_inner_div_card`}
                      // style={testimonial?.testimonialCardStyles}
                      style={removeKeyInObject(
                        testimonial?.testimonialCardStyles,
                        innerDivStyle
                      )}
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
          </div>
          {prevNextEnable && (
            <button className="test-next" onClick={nextSlide}>
              &#10095;
            </button>
          )}
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
