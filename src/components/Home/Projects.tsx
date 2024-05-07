import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'



const projects = [
    "AMBASSADORS",
    "EQUILITY",
    "YOUTHS",
    "TEENAGERS"
]

export default function Projects() {
    return (
        <Section
            name='projects'
        >
            <h2 className='section-title'>Projects</h2>

            <div className="content">
                {
                    [projects.map((item, i)=>(
                        <Link
                            href={"/"} key={i}
                            style={{backgroundImage:"url(/projects-bg.jpeg)"}}
                            className='project-item'
                        >
                            <span>{item}</span>
                        </Link>
                    ))]
                }
            </div>
        </Section>
    )
}
