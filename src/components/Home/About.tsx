import React from 'react'
import Section from '../UI/Section'
import Image from 'next/image'

export default function About() {
    return (
        <Section
            name='about'
        >
            <div className="feature-img" style={{backgroundImage:"url(/about.png)"}}>
                {/* <Image
                    src={"/about.png"}
                    alt='FAF Member'
                    width={100}
                    height={100}
                /> */}
            </div>


            <div className="content">
                <h2>America’s Football Governing Body</h2>
                <br/>
                <p>
                    We&apos;re here to lead, strengthen and grow the game alongside you as the America&apos;s football governing body through education, events and the U.S. National Team pathway. As a non-profit, USA Football delivers premier developmental and competitive programs for tackle and flag football.<br/> <br/> USA Football is the only organization that selects and leads the U.S. National Teams as the sole U.S. member of the International Federation of American Football (IFAF), and a recognized sports organization of the US Olympic & Paralympic Committee (USOPC).
                </p>
            </div>
        </Section>
    )
}
