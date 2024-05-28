import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import homeData from "@/data/home.json";

export default function MV() {
    return (
        <Section
            name='mv'
            style={{
                backgroundImage: `url(${homeData.mv.bg})`
            }}
        >
            <p className='text-uppercase'>{homeData.mv.title}</p>
            <hr/>
            <Link href={"/"} className='btn btn-light'>
                {homeData.mv.cta.label}
            </Link>
        </Section>
    )
}
