import React from 'react'
import Section from '../UI/Section'
import SliderContainer, { SlideWrapper } from '../UI/Slider'
import { inPageSliderconfig } from '@/utils/sliderConfig'
import AppLink from '../UI/AppLink'
import homeData from "@/data/home.json"


export default function Articles() {
    
    return (

        <Section name='articles'>
            <h1 className='section-title'>{homeData.articles.title}</h1>

            <br/><br/><br/>

            

            <SliderContainer {...inPageSliderconfig} className='featured-slide'>
                {
                    homeData.articles.items.map((item, i)=>(
                        <SlideWrapper key={i}>
                            <article >
                                <AppLink href="/">
                                    <div className="img" style={{backgroundImage: `url(${item.image})`}}/>

                                    <div className='details'>
                                        <h2>{item.title}</h2>
                                        <p>{item.details}</p>
                                        <p className='date'>{item.date}</p>
                                    </div>
                                </AppLink>
                            </article>
                        </SlideWrapper>
                    ))
                }

            </SliderContainer>


            <AppLink href={"/"} className='btn btn-primary slide-cta'>
                View all articles
            </AppLink>

        </Section>
    )
}
