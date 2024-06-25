import React from 'react'
import Section from '../UI/Section'
import homeData from "@/data/home.json";
import SliderContainer, { SlideCta, SlideWrapper } from '../UI/Slider';
import {Settings} from 'react-slick';
import SectionTitle from '../UI/SectionTitle';
import Image from 'next/image';


const data = homeData.events;


export default function Events() {
    const sliderconfig: Settings = {
        slidesToShow: 1,
        initialSlide: 1,
        infinite: false,
        centerPadding: "0px",
        centerMode: false
    }
    return (
        <Section name='events'>

            <SectionTitle title={data.title}/>

            <br/><br/>


            <SliderContainer {...sliderconfig} className='featured-slide horizontal'>
                {
                    data.items.map((item, i)=>(
                        <SlideWrapper key={i}>
                            <article
                                className='bg-light text-start md-text-center'
                            >
                                <div
                                    className="img"
                                >
                                    <Image
                                        src={item.image.src}
                                        height={item.image.height}
                                        width={item.image.width}
                                        alt={item.title}
                                    />
                                </div>

                                <div className='details text-clr-2'>
                                    <div>
                                        <h3
                                            className='fw-600 lg-fs-48 fs-36 lh-24'
                                        >
                                            {item.title}
                                        </h3>

                                        <br/>
                                        
                                        <p
                                            className='fw-400 lg-fs-20 fs-14 lh-24'
                                        >
                                            {item.text}
                                        </p>

                                    </div>


                                    <p
                                        className='fw-500 lg-fs-20 fs-12 lh-24 text-clr-7'
                                    >{item.date}</p>
                                </div>
                            </article>
                        </SlideWrapper>
                    ))
                }
            </SliderContainer>

            {/* <SlideCta data={data} className='fs-2'/> */}
        
        </Section>
    )
}
