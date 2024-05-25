import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import SliderContainer,{ SlideWrapper} from '../UI/Slider'
import homeData from "@/data/home.json";


export default function Hero() {
    const sliderconfig = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        cssEase: "linear",
    }
    return (
        <SliderContainer {...sliderconfig} max={"02"} min={"01"}>

            {
                homeData.hero.map((item, i)=>(
                    <SlideWrapper
                        key={i}
                    >
                        <Section
                            name='hero'
                            style={{
                                backgroundImage: `url(${item.image})`
                            }}
                        >
                            <h1>
                                {
                                    item.title.map((it, i)=>(
                                        <React.Fragment key={i}>
                                            {it}
                                            {i != item.title.length - 1 && <br/>}
                                        </React.Fragment>
                                    ))
                                }

                                <br/>
                                <span>{item.text}</span>
                            </h1>

                            <div className="cta">
                                <Link href={"/"} className='btn btn-primary'>
                                    Become a Member
                                </Link>
                                <Link href={"/"} className='btn btn-light'>
                                    Enroll Your Organization
                                </Link>

                            </div>
                        </Section>
                    </SlideWrapper>
                ))
            }


        </SliderContainer>
    )
}
