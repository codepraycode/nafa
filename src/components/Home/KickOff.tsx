import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import homeData from "@/data/home.json";

export default function KickOff() {
    return (
        <Section
            name='kickoff'
        >
            <h1
                className='ff-montserrat text-clr-6 fw-600 fs-20 lg-fs-40 lh-24'
            >
                {homeData.kickoff.title}
            </h1>

            <br/><br/><br/>


            <div className='content'>
                {
                    homeData.kickoff.articles.map((item, i)=>(
                        <article key={i}>
                            <div className="img" style={{backgroundImage: `url(${item.image})`}}/>

                            <div className='details'>
                                <h2
                                    className='ff-montserrat text-clr-2 lg-fs-24 fs-18 fw-500 lh-24'
                                >
                                    {item.title}
                                </h2>

                                <p
                                    className='ff-montserrat fw-500 fs-14 lh-24 text-clr-3'
                                >
                                    {item.details}
                                </p>

                                <Link
                                    href={item.cta.link}
                                    className='btn btn-light ff-inter fw-500 fs-14 lh-24 text-center text-clr-4'
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
