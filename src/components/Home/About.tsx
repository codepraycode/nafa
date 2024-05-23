import React from 'react'
import Section from '../UI/Section'
import homeData from "@/data/home.json";


const data = homeData.about;

export default function About() {
    return (
        <Section
            name='about'
        >
            <div className="feature-img" style={{backgroundImage:`url(${data.image})`}} />


            <div className="content">
                <h2>{data.title}</h2>
                <br/>
                <p>
                    {
                        data.text.map((it, i)=>(
                            <>
                                {it}

                                {i !== data.text.length - 1 && (
                                    <>
                                    <br/><br/>
                                    </>
                                )}
                            </>
                        ))
                    }
                </p>
            </div>
        </Section>
    )
}
