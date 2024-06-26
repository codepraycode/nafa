import {Settings as SliderSettings} from "react-slick";

export const inPageSliderconfig: SliderSettings = {
    slidesToShow: 2,
    // centerPadding: '10px',
    // centerMode: true,
    // initialSlide:1,
    // infinite: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1690,
            settings: {
            slidesToShow: 3,
            // slidesToScroll: 3,
            // infinite: true,
            // dots: true
            }
        },
        {
            breakpoint: 1400,
            settings: {
            slidesToShow: 3,
            // slidesToScroll: 3,
            // infinite: true,
            // dots: true
            }
        },
        {
            breakpoint: 1300,
            settings: {
            slidesToShow: 2,
            // slidesToScroll: 3,
            // infinite: true,
            // dots: true
            }
        },
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 3,
            // slidesToScroll: 2,
            // initialSlide: 2
            }
        },
        {
            breakpoint: 1090,
            settings: {
            slidesToShow: 2,
            // slidesToScroll: 2,
            // initialSlide: 2
            }
        },
        {
            breakpoint: 880,
            settings: {
            slidesToShow: 1,
            // slidesToScroll: 2,
            // initialSlide: 2
            }
        },
    ]


}