import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import SliderContainer, { SlideWrapper } from '../UI/Slider'
import { inPageSliderconfig } from '@/utils/sliderConfig'
import homeData from "@/data/home.json"


const data = homeData.projects

export default function Projects() {
    
    return (
        <Section
            name='projects'
        >
            <h2 className='section-title'>{data.title}</h2>
            <br/><br/>

            <SliderContainer {...inPageSliderconfig} className='featured-slide'>
                {
                    data.items.map((item, i)=>(
                        
                        <SlideWrapper key={i}>
                            <Link
                                href={"/"} 
                                style={{
                                    backgroundImage:`
                                        linear-gradient(180deg, #FFFFFF 25%, #2A4F14 71%),
                                        url(${item.image})`
                                }}
                                className='project-item'
                            >
                                <span>{item.title}</span>
                            </Link>
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
