import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'
import SliderContainer, { SlideWrapper } from '../UI/Slider'



const projects = [
    "AMBASSADORS",
    "EQUILITY",
    "YOUTHS",
    "TEENAGERS"
]

export default function Projects() {
    const sliderconfig = {
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                // initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                }
            }
        ]


    }
    return (
        <Section
            name='projects'
        >
            <h2 className='section-title'>Projects</h2>

            <SliderContainer {...sliderconfig} className='featured-slide'>
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
