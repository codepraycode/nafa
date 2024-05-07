'use client';
import Slider, {Settings as SliderSettings} from "react-slick";
import Section, { SectionProps } from "./Section";
import { useRef, useState } from "react";






interface SliderContainerProps extends SliderSettings {
    children: React.ReactNode
}



interface SlideWrapperProps {
    children: React.ReactNode,
    className?: string,
}

export function SlideWrapper(props:SlideWrapperProps) {
    const { children, ...rest } = props;

    return (
        <div {...rest}>
            { children }
        </div>
    );
}


export function SliderArrow(props: any) {

    const disablePrev = props.slideCount <= 1;

    return (
        <button
            className="slider-arrow"
            data-next={props.isNext && "true"}
            data-prev={props.isPrev && "true"}
            disabled={disablePrev}
            onClick={props.onClick}
        />
    )
}



export default function SliderContainer(props:SliderContainerProps) {

    const settings: SliderSettings = {
        // dots: true,
        // fade: true,
        // infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // autoplay: true,
        // speed: 2000,
        // cssEase: "linear",
        nextArrow: <SliderArrow isNext />,
        prevArrow: <SliderArrow isPrev />,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };

    const {children, ...rest} = props;


    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    
    let sliderRef = useRef<Slider | null>(null);

    return (
        <Section name={"slider-container"} noWrapper>

            <label htmlFor="slide-range" className="slide-range">
                {/* <span>Total updates: {updateCount} </span> */}
                <span>01</span>
                <input
                    onChange={e => sliderRef.current?.slickGoTo(+e.target.value)}
                    value={slideIndex}
                    type="range"
                    id="slide-range"
                    min={0}
                    max={3}
                />
                <span>05</span>
            </label>

            <Slider
                ref={slider => {
                    sliderRef.current = slider as Slider;
                }}

                {...settings} {...rest}
            >
                {props.children}
            </Slider>
        </Section>
    )
}
