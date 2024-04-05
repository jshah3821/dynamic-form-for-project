import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./bannerStyles.css";
import CustomArrowButton from "./CustomArrowButton/CustomArrowButton.tsx"


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
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

const BannerElement = ({ captionPosition, arrowButtonType, resizeBannerWidth, autoPlay = false, nextPrvButtonAvailable = false, sliderHeight = "200px", slideDetails = [{ imageDetails: { dataURL: "", name: "" }, caption: "" }] }) => {
    return (
        <div className={`banner ${resizeBannerWidth === 'bigger' ? 'bigger-container' : ''}`} style={{ height: sliderHeight ? sliderHeight : "200px" }}>
            <Carousel

                customLeftArrow={arrowButtonType === 'rectangle' ? <CustomArrowButton type="left" /> : undefined}
                customRightArrow={arrowButtonType === 'rectangle' ? <CustomArrowButton type="right" /> : undefined}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={autoPlay ? autoPlay : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={
                    nextPrvButtonAvailable
                        ? ["tablet", "mobile"]
                        : ["desktop", "tablet", "mobile"]
                }
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {slideDetails?.map((element, index) => (
                    <div className="slider" key={index + Math.random()}>
                        <img
                            className="banner-image"
                            style={{ height: sliderHeight ?? "200px" }}
                            src={element?.imageDetails?.dataURL}
                            alt="Banner"
                        />
                        <p className={`caption 
              ${captionPosition === 'top left' ? 'top-left' : captionPosition === 'top right' ? 'top-right' : captionPosition === 'bottom left' ? 'bottom-left' : captionPosition === 'bottom right' ? 'bottom-right' : ''}
            `} >{element?.caption}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default BannerElement