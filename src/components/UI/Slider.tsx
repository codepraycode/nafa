'use client';
import Slider, {Settings as SliderSettings} from "react-slick";
import Section, { SectionProps } from "./Section";
import { useRef, useState } from "react";
import Link from "next/link";






interface SliderContainerProps extends SliderSettings {
    children: React.ReactNode,
    max?: number | string,
    min?: number | string
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


export function SlideCta({data, className}:{data: any, className?: string}) {
    return (
        <Link
            href={data.cta.link}
            className={`btn btn-primary slide-cta ${className || ''} ff-inter fw-500 fs-14 lh-24 text-clr-light`}
        >
            {data.cta.label}
        </Link>
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

    const {children,max, min, ...rest} = props;


    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    
    let sliderRef = useRef<Slider | null>(null);

    return (
        <Section name={"slider-container"} noWrapper>

            <label htmlFor="slide-range" className="slide-range">
                {/* <span>Total updates: {updateCount} </span> */}
                <span>{min}</span>
                <input
                    onChange={e => sliderRef.current?.slickGoTo(+e.target.value)}
                    value={slideIndex}
                    type="range"
                    id="slide-range"
                    min={0}
                    max={3}
                />
                <span>{max}</span>
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
