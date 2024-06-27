import React from 'react'
import Section from '../UI/Section'
import homeData from "@/data/home.json"
import ArticleItems from '../ArticleItems'
import SectionTitle from '../UI/SectionTitle'
import { SlideCta } from '../UI/Slider'


export default function Articles() {
    
    return (

        <Section name='articles'>

            <SectionTitle title={homeData.articles.title}/>

            <br/>

            <ArticleItems />

            <SlideCta
                data={{cta: {link: '/', label: 'View all articles'}}}
            />
            

        </Section>
    )
}
