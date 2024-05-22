import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import SliderContainer, { SlideWrapper } from '../UI/Slider'
import { inPageSliderconfig } from '@/utils/sliderConfig'
import homeData from "@/data/home.json"


export default function Projects() {
    
    return (
        <Section
            name='projects'
        >
            <h2 className='section-title'>{homeData.projects.title}</h2>
            <br/><br/>

            <SliderContainer {...inPageSliderconfig} className='featured-slide'>
                {
                    homeData.projects.items.map((item, i)=>(
                        
                        <SlideWrapper key={i}>
                            <Link
                                href={"/"} 
                                style={{backgroundImage:`url(${item.image})`}}
                                className='project-item'
                            >
                                <span>{item.title}</span>
                            </Link>
                        </SlideWrapper>
                    ))
                }
            </SliderContainer>

            <Link href={"/"} className='btn btn-primary slide-cta fs-2'>
                View all articles
            </Link>

        </Section>
    )
}
