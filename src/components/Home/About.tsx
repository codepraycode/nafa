import React from 'react'
import Section from '../UI/Section'
import homeData from "@/data/home.json";
import Link from 'next/link';


const data = homeData.about;

export default function About() {
    return (
        <Section
            name='about'
        >
            <div className="feature-img" style={{backgroundImage:`url(${data.image})`}} />


            <div className="content">
                <h2
                    className='fs-1 lg-fs-2 fw-600 lh-1 lh-2 text-center lg-text-start'
                >
                    {data.title}
                </h2>

                <br/>

                <p
                    className='fs-0 lg-fs-1 lh-1 fw-500 text-justify'
                >
                    {
                        data.text.map((it, i)=>(
                            <React.Fragment key={i}>
                                {it}

                                {i !== data.text.length - 1 && (
                                    <>
                                    <br/><br/>
                                    </>
                                )}
                            </React.Fragment>
                        ))
                    }
                </p>
                
                <br/><br/>
                
                <Link href={"/about"} className='btn btn-light'>
                    Learn More
                </Link>
            </div>
        </Section>
    )
}
