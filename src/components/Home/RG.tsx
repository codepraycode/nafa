import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import homeData from "@/data/home.json";


export default function RG() {
    return (
        <Section
            name='rg'
            style={{
                backgroundImage: `linear-gradient(180deg, #FFFFFF 25%, #2A4F14 58%), url(${homeData.rg.bg})`
            }}
        >

            <div className="ff-inter text-center text-clr-light">
                <h2
                    className='fw-600 lg-fs-48 fs-28 lh-30'
                >
                    {homeData.rg.title}
                </h2>

                <br/><br/>

                <p
                    className='fw-500 lg-fs-20 fs-14 lg-lh-28 lh-20'
                >
                    {homeData.rg.text}
                </p>

                <br/><br/>

                <Link
                    href={homeData.rg.cta.link}
                    className='btn btn-light'
                >
                    {homeData.rg.cta.label}
                </Link>
            </div>
        </Section>
    )
}
