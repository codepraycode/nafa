import Section from '@/components/UI/Section'
import Image from 'next/image'
import React from 'react'

export default function UnderConstructionPage() {
    return (
        <Section
            name='under-construction'
        >
            <h1>UNDER<br/>CONSTRUCTION</h1>
            <p>Please Bear with us</p>


            <div className="ud-img" style={{backgroundImage: "url(/under-construction.jpeg)"}}/>
        </Section>
    )
}
