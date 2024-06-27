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


            <div className="content bg-1 text-clr-1 ff-montserrat">
                <div>
                    <h2
                        className='ff-montserrat fs-20 lg-fs-32 fw-600 lg-lh-43 lh-30 text-center lg-text-start'
                    >
                        {data.title}
                    </h2>

                    <br/><br/>

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
                    
                    <Link
                        href={"/about"}
                        className='btn btn-light ff-inter fw-500 fs-14 lh-24 lg-d-inline d-none'
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </Section>
    )
}
