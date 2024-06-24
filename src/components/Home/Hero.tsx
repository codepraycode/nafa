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
                                backgroundImage: `
                                    linear-gradient(180deg, #FFFFFF 0%, #355920 27.81%), url(${item.image})`
                            }}
                        >
                            <div>

                                <h1
                                    className='text-clr-light ff-inria fw-700 fs-3 lg-fs-8 lg-lh-7'
                                >
                                    {
                                        item.title.map((it, i)=>(
                                            <React.Fragment key={i}>
                                                {it}
                                                {i != item.title.length - 1 && <br/>}
                                            </React.Fragment>
                                        ))
                                    }

                                    {/* <br/> */}
                                </h1>
                                <br/>
                                <p
                                    className='text-clr-light ff-inria fw-700 fs-1 lh-1 lg-lh-2'
                                >
                                    {item.text}
                                </p>
                                <br/><br/>
                            </div>

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
