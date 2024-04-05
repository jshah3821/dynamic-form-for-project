import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./testimonialStyles.css"
import { bvLogo } from '../assets/bvLogo64';
import dummyPhoto from "../assets/Circle-icons-profile.png"

const TestimonialElement = ({ testimonial, testimonialCardDetails }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div style={testimonial?.wrapperCardStyle} className="mainTestimonialCard">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={testimonial?.testimonialDetails?.autoPlay || false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={
                    testimonial?.testimonialDetails?.nextPrvButtonAvailable
                        ? ["tablet", "mobile"]
                        : ["desktop", "tablet", "mobile"]
                }
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {testimonialCardDetails?.map((test, i) => {
                    return (
                        <div className="card testimonial_card_styles m-auto" key={i}>
                            <div style={testimonial?.cardStyle} className="p1 flex items-center flex-column circleSemi testimonial_inner_div_card">
                                <div className="img_wrapper_testimonial">
                                    <img
                                        src={
                                            test?.imageDetails?.dataURL || dummyPhoto
                                        }
                                        alt="profile"
                                        className="fluid"
                                    /></div>
                                <div className="mt75" style={testimonial?.cardStyle}>
                                    <h3 className="m0 font-16 center">
                                        {test?.name ?? "Update name"}
                                    </h3>
                                    <p className="font-12 center mt05 center feedback_text" style={testimonial?.cardStyle}>
                                        {test?.feedback ?? "Update Feedback"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    )
}

export default TestimonialElement