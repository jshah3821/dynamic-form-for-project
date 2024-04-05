import React, {useState, useEffect} from 'react';
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

const BannerElement = ({ id, captionPosition, arrowButtonType, resizeBannerWidth, autoPlay = false, nextPrvButtonAvailable = false, sliderHeight = "200px", slideDetails = [{ imageDetails: { dataURL: "", name: "" }, caption: "" }] }) => {
    const [slideIndex, setSlideIndex] = useState(1);
    // const bannerData = useSelector((state) => state.banner);
    // const slideDetails = useSelector((state) => state.banner.slideDetails);
    // const autoPlay = useSelector((state) => state.banner.autoPlay);
    // console.log(autoPlay);
    // const captionPosition = useSelector((state) => state.banner.captionPosition);
    // const arrowButtonType = useSelector((state) => state.banner.arrowButtonType);
    // const sliderHeight = useSelector((state) => state.banner.height);
    // const resizeBannerWidth = useSelector(
    //     (state) => state.banner.resizeBannerWidth
    // );
    // const prevNextEnable = useSelector(
    //     (state) => state.banner.nextPrvButtonAvailable
    // );
    let intervalId; // Declare a variable to hold the interval ID
    

    useEffect(() => {
        showSlides(slideIndex);
        autoStart()
        return () => {
            clearInterval(intervalId); // Clear the interval when the component unmounts or when autoPlay changes
        };
    }, [slideIndex, autoPlay, slideDetails]);

    function plusSlides(n) {
        if(slideIndex < slideDetails.length ) {
            setSlideIndex(slideIndex + n);
        } else {
            setSlideIndex(1)
        }
    }

    function minusSlides(n) {
        if(slideIndex > 1 ) {
            setSlideIndex(slideIndex + n);
        } else {
            setSlideIndex(slideDetails.length)
        }
    }

    function currentSlide(n) {
        setSlideIndex(n);
    }


    function autoStart() {
        console.log(autoPlay);
        
        if(autoPlay) {
            intervalId = setInterval(() => {
                if (slideIndex < slideDetails.length) {
                    setSlideIndex(slideIndex + 1); // Change 3 to the total number of slides
                } else if (slideIndex > 1) {
                    setSlideIndex(1)
                }
              }, 2000);
        }
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName(`mySlides${id}`);
        let dots = document.getElementsByClassName(`dot-dynamic${id}`);
        if (n > slides.length) { setSlideIndex(1) }
        if (n < 1) { setSlideIndex(slides.length) }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    
    return (
        <div className="parent-banner">
            <div className="slideshow-container" style={{height: sliderHeight}}>
                {/* Full-width images with number and caption text */}
                {slideDetails.map((element, index)=> 
                    (
                        <div className={`fade hide-slide mySlides${id}`} key={index}>
                            <div className="numbertext">{`${index + 1} / ${slideDetails.length}`}</div>
                            <img src={element['imageDetails']['dataURL']} className="banner-img" alt={`Slide ${index + 1}`} />
                            {/* <div className="text">{element['caption']}</div> */}
                            <div className={`text ${
                                    captionPosition === "top left"
                                    ? "top-left"
                                    : captionPosition === "top right"
                                    ? "top-right"
                                    : captionPosition === "bottom left"
                                    ? "bottom-left"
                                    : captionPosition === "bottom center"
                                    ? "bottom-center"
                                    : captionPosition === "bottom right"
                                    ? "bottom-right"
                                    : ""
                                }
                                `}>
                                    <span>
                                        {element['caption']}
                                    </span>
                                </div>
                            </div>
                        // </div>
                    )
                )}
                {nextPrvButtonAvailable && (
                   <>
                        <a className={`prev ${arrowButtonType === "rectangle" ? "": "circle" }`} onClick={() => minusSlides(-1)}>&#10094;</a>
                        <a className={`next ${arrowButtonType === "rectangle" ? "": "circle" }`} onClick={() => plusSlides(1)}>&#10095;</a>
                    </>
                )}
            </div>
            {/* The dots/circles */}
            <div  className="dost-parent">
                {slideDetails.map((element, index)=> (
                    <span className={`dot dot-dynamic${id}`} key={index} onClick={() => currentSlide(index + 1)}></span>
                ))}
            </div>
        </div>
    )
}

export default BannerElement