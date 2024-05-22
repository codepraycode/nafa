import React from 'react'
import Section from '../UI/Section'
import homeData from "@/data/home.json";


const data = homeData.events;


export default function Events() {
    const sliderconfig = {
        slidesToShow: 1,}
    return (
        <Section name='events'>
            <h2 className='section-title'>{data.title}</h2>

            <br/><br/><br/>


            {
                data.items.map((item, i)=>(
                    <article key={i}>
                        <div
                            className="img"
                            style={{
                                backgroundImage: `url(${item.image})`
                            }}
                        />

                        <div className='details'>
                            <h3>{item.title}</h3>
                            <br/>
                            <p>{item.text}</p>
                            <br/>
                            <p className='date'>{item.date.from} - {item.date.to}</p>
                        </div>
                    </article>
                ))
            }
            
        
        </Section>
    )
}
