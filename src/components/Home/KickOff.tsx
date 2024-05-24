import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import homeData from "@/data/home.json";

export default function KickOff() {
    return (
        <Section
            name='kickoff'
        >
            <h1>{homeData.kickoff.title}</h1>

            <br/><br/><br/>


            <div className='content'>
                {
                    homeData.kickoff.articles.map((item, i)=>(
                        <article key={i}>
                            <div className="img" style={{backgroundImage: `url(${item.image})`}}/>

                            <div className='details'>
                                <h2>{item.title}</h2>
                                <br/>
                                <p>{item.details}</p>
                                <Link
                                    href={item.cta.link}
                                    className='btn btn-light'
                                >
                                    {item.cta.label}
                                </Link>
                            </div>
                        </article>
                    ))
                }
            </div>
        </Section>
    )
}
