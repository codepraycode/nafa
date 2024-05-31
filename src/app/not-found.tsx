import Section from '@/components/UI/Section'
import React from 'react'

export default function Custom404() {
    return (
        <Section
            name='under-construction'
        >
            <h1>404</h1>
            <p>Page or resource you seek does not exist</p>


            <div className="ud-img" style={{backgroundImage: "url(/under-construction.jpeg)"}}/>
        </Section>
    )
}
