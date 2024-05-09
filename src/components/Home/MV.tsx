import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';

export default function MV() {
    return (
        <Section
            name='mv'
        >
        
            <p>OUR PRINCIPLES ENCOMPASSES DEMOCRAZY, EQUALITY, INCLUSIVITY, SUSTAINABILITY, INTEGRITY AND EDUCATION.</p>
            <hr/>
            <Link href={"/"} className='btn btn-light'>
                Mission & Vision
            </Link>
        </Section>
    )
}
