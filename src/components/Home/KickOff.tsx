import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'



const articles = [
    {
        image: "/kickoff-1.jpeg",
        title: "Become a Member",
        details: "Joining our community propels your game forward and amplifies your impact on the field. Gain exclusive resources and support to enhance your performance with membership",
        link:''
    },
    {
        image: "/kickoff-2.jpeg",
        title: "Flag Tournament",
        details: "Joining our community propels your game forward and amplifies your impact on the field. Gain exclusive resources and support to enhance your performance with membership",
        link:''
    },
    {
        image: "/kickoff-3.jpeg",
        title: "Coach Certificate",
        details: "Joining our community propels your game forward and amplifies your impact on the field. Gain exclusive resources and support to enhance your performance with membership",
        link:''
    },
]

export default function KickOff() {
    return (
        <Section
            name='kickoff'
        >
            <h1 className='section-title'>KICKOFF WITH NAFA</h1>

            <br/><br/><br/>


            <div className='content'>
                {
                    articles.map((item, i)=>(
                        <article key={i}>
                            <div className="img" style={{backgroundImage: `url(${item.image})`}}/>

                            <div className='details'>
                                <h2>{item.title}</h2>
                                <p>{item.details}</p>
                                <Link href={"/"} className='btn btn-light'>Join Now</Link>
                            </div>
                        </article>
                    ))
                }
            </div>
        </Section>
    )
}
