import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import SliderContainer, { SlideCta, SlideWrapper } from '../UI/Slider'
import { inPageSliderconfig } from '@/utils/sliderConfig'
import homeData from "@/data/home.json"
import SectionTitle from '../UI/SectionTitle';


const data = homeData.projects

export default function Projects() {
    
    return (
        <Section
            name='projects'
        >

            <SectionTitle title={data.title}/>
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
                                className='project-item text-decoration-none text-clr-light'
                            >
                                <span
                                    className='fw-600 fs-24 lh-29'
                                >
                                    {item.title}
                                </span>
                            </Link>
                        </SlideWrapper>
                    ))
                }
            </SliderContainer>

            <SlideCta data={data} className='fs-2'/>

        </Section>
    )
}
