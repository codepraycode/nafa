import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'


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


            <div className='content'>
                {
                    [...Array(5)].map((item, i)=>(
                        <article key={i}>
                            <Link href="/">
                                <div className="img" style={{backgroundImage: `url(${article.image})`}}/>

                                <div className='details'>
                                    <h2>{article.title}</h2>
                                    <p>{article.details}</p>
                                    <p className='date'>{article.date}</p>
                                </div>
                            </Link>
                        </article>
                    ))
                }
            </div>
        </Section>
    )
}
