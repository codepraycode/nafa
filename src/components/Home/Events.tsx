import React from 'react'
import Section from '../UI/Section'
import homeData from "@/data/home.json";
import SliderContainer, { SlideWrapper } from '../UI/Slider';
import { inPageSliderconfig } from '@/utils/sliderConfig';
import {Settings} from 'react-slick';
import Link from 'next/link';


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
            <h2 className='section-title'>{data.title}</h2>

            <br/><br/><br/>


            <SliderContainer {...sliderconfig} className='featured-slide horizontal'>
                {
                    data.items.map((item, i)=>(
                        <SlideWrapper key={i}>
                            <article>
                                <div
                                    className="img"
                                    style={{
                                        backgroundImage: `url(${item.image})`
                                    }}
                                />

                                <div className='details'>
                                    <h3>{item.title}</h3>
                                    <br/>
                                    <p>{item.text}</p>
                                    <br/>
                                    <p className='date'>{item.date}</p>
                                </div>
                            </article>
                        </SlideWrapper>
                    ))
                }
            </SliderContainer>
            
            <Link
                href={data.cta.link}
                className='btn btn-primary slide-cta fs-2'
            >
                {data.cta.label}
            </Link>
        
        </Section>
    )
}
