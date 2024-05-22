import React from 'react'
import Section from '../UI/Section'
import AppLink from '../UI/AppLink'
import homeData from "@/data/home.json"
import ArticleItems from '../ArticleItems'


export default function Articles() {
    
    return (

        <Section name='articles'>
            <h1 className='section-title'>{homeData.articles.title}</h1>

            <br/><br/><br/>

            <ArticleItems />

            <AppLink href={"/"} className='btn btn-primary slide-cta'>
                View all articles
            </AppLink>

        </Section>
    )
}
