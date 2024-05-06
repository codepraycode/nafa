import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'

export default function RG() {
    return (
        <Section
            name='rg'
        >
        
            <h2>Building Stronger Communities</h2>
            <br/><br/>
            <p>
                NAFA plays a pivotal role in nurturing individuals to reach their full potential, thereby contributing to the emergence of giants within the community. Through promoting physical fitness, mental well-being, and personal growth, NAFA empowers individuals to excel in various aspects of their lives, ultimately elevating the collective strength and vitality of the community.
            </p>
            <br/><br/>
            <Link href={"/"} className='btn btn-light'>
                Register Now
            </Link>
        </Section>
    )
}
