'use client';
import Slider, {Settings as SliderSettings} from "react-slick";
import Section, { SectionProps } from "./Section";






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
    console.log(props);
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



const settings: SliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
    nextArrow: <SliderArrow isNext />,
    prevArrow: <SliderArrow isPrev />
};



export default function SliderContainer(props:SliderContainerProps) {
    const {children, ...rest} = props;
    return (
        <Section name={"slider-container"} noWrapper>
            <Slider {...settings} {...rest}>
                {props.children}
            </Slider>
        </Section>
    )
}
