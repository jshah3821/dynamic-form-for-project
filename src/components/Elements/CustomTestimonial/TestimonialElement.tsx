import React, { useState, useEffect, useRef } from "react";
import "./testimonialStyles.css";
import "react-multi-carousel/lib/styles.css";
import { testimonialDefault64 } from "../../Elements/assets/testimonialDefault64";

const TestimonialElement = ({ testimonial, testimonialCardDetails }) => {
  const prevNextEnable =
    testimonial?.testimonialDetails?.nextPrvButtonAvailable;
  const autoPlay = testimonial?.testimonialDetails?.autoPlay;

  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleCards = 3;

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

  return (
    <div className="testimonial-container" style={testimonial?.style}>
      <div>
        <div className="mainTestimonialCard">
          {prevNextEnable && (
            <button className="test-prev" onClick={prevSlide}>
              &#10094;
            </button>
          )}

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
                    style={testimonial?.testimonialCardStyles}
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
