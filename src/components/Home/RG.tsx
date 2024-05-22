import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import homeData from "@/data/home.json";


export default function RG() {
    return (
        <Section
            name='rg'
            style={{
                backgroundImage: `url(${homeData.rg.bg})`
            }}
        >
            <h2>{homeData.rg.title}</h2>
            <br/><br/>
            <p>
                {homeData.rg.text}
            </p>
            <br/><br/>
            <Link href={homeData.rg.cta.link} className='btn btn-light'>
                {homeData.rg.cta.label}
            </Link>
        </Section>
    )
}
