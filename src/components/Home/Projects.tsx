import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'
import SliderContainer, { SlideWrapper } from '../UI/Slider'
import { inPageSliderconfig } from '@/utils/sliderConfig'



const projects = [
    "AMBASSADORS",
    "EQUILITY",
    "YOUTHS",
    "TEENAGERS"
]

export default function Projects() {
    
    return (
        <Section
            name='projects'
        >
            <h2 className='section-title'>Projects</h2>
            <br/><br/>

            <SliderContainer {...inPageSliderconfig} className='featured-slide'>
                {
                    projects.map((item, i)=>(
                        
                        <SlideWrapper key={i}>
                            <Link
                                href={"/"} 
                                style={{backgroundImage:"url(/projects-bg.jpeg)"}}
                                className='project-item'
                            >
                                <span>{item}</span>
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
