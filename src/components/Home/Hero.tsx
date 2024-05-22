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
        autoplay: true,
        speed: 2000,
        cssEase: "linear",
    }
    return (
        <SliderContainer {...sliderconfig}>

            <SlideWrapper >
                {
                    homeData.hero.map((item, i)=>(
                        <Section
                            name='hero'
                            key={i}
                            style={{
                                backgroundImage: `url(${item.image})`
                            }}
                        >
                            <h1>
                                {/* ONE GAME<br/>ONE NATION */}
                                {
                                    item.title.map((it, i)=>(
                                        <>
                                            {it}
                                            {i != item.title.length - 1 && <br/>}
                                        </>
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
                    ))
                }
            </SlideWrapper>


        </SliderContainer>
    )
}
