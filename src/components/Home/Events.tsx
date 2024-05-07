import React from 'react'
import Section from '../UI/Section'

export default function Events() {
    return (
        <Section name='events'>
            <h2 className='section-title'>Events</h2>

            <br/><br/><br/>

            <div className="content">
                <article>
                    <div className="img" style={{backgroundImage: `url(/events.jpeg)`}}/>

                    <div className='details'>
                        <h2>2024 ALL SPORTS</h2>
                        <p>NAFA empowers individuals to excel in various aspects of their lives,</p>
                        <p className='date'>24 Mar 2024-24 Apr 2024</p>
                    </div>
                </article>
            </div>
        </Section>
    )
}
