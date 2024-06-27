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
                                    className='text-clr-light ff-inria fw-700 fs-44 lg-fs-128 lg-lh-117 lh-44'
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
                                    className='text-clr-light ff-inria fw-700 lg-fs-24 fs-16 lh-22 lg-lh-33'
                                >
                                    {item.text}
                                </p>
                                <br/><br/>
                            </div>

                            <div className="ctaa">
                                <Link
                                    href={"/"}
                                    className='btn btn-primary ff-inter fw-500 fs-14 lh-24'
                                >
                                    Become a Member
                                </Link>

                                <Link
                                    href={"/"}
                                    className='btn btn-light ff-inter fw-500 fs-14 lh-24 text-clr-4'
                                >
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
