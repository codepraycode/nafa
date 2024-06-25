import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import homeData from "@/data/home.json";

export default function MV() {
    return (
        <Section
            name='mv'
            className='text-clr-light'
            style={{
                backgroundImage: `url(${homeData.mv.bg})`
            }}
        >
            <p
                className='text-uppercase fw-600 lg-fs-24 fs-16 lg-lh-29 lh-19'
            >
                {homeData.mv.title}
            </p>

            <hr/>
            <Link
                href={"/"}
                className='btn btn-light fs-14 fw-500 lh-24'
            >
                {homeData.mv.cta.label}
            </Link>
        </Section>
    )
}
