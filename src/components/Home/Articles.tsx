import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'
import SliderContainer, { SlideWrapper } from '../UI/Slider'
import { inPageSliderconfig } from '@/utils/sliderConfig'


const article = {
    image: "/kickoff-1.jpeg",
    title: "American Football Development",
    details: "New Progress with new intakes",
    link:'/',
    date: "27 Mar 2024",
}

export default function Articles() {
    
    return (

        <Section name='articles'>
            <h1 className='section-title'>NEWS ARTICLES</h1>

            <br/><br/><br/>

            

            <SliderContainer {...inPageSliderconfig} className='featured-slide'>
                {
                    [...Array(5)].map((item, i)=>(
                        <SlideWrapper key={i}>
                            <article >
                                <Link href="/">
                                    <div className="img" style={{backgroundImage: `url(${article.image})`}}/>

                                    <div className='details'>
                                        <h2>{article.title}</h2>
                                        <p>{article.details}</p>
                                        <p className='date'>{article.date}</p>
                                    </div>
                                </Link>
                            </article>
                        </SlideWrapper>
                    ))
                }

            </SliderContainer>


            <Link href={"/"} className='btn btn-primary slide-cta'>
                View all articles
            </Link>

        </Section>
    )
}
