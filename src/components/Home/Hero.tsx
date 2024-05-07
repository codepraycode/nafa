import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'
import SliderContainer,{ SlideWrapper} from '../UI/Slider'

export default function Hero() {
    return (
        <SliderContainer>

            <SlideWrapper>
                <Section
                    name='hero'
                >
                    <h1>
                        ONE GAME<br/>ONE NATION

                        <br/>
                        <span>Unleash Your Passion: Empowering Your Football Journey Together.</span>
                    </h1>

                    <div className="cta">
                        <Link href={"/"} className='btn btn-primary'>
                            Become a Member
                        </Link>
                        <Link href={"/"} className='btn btn-light'>
                            Enroll Your Organization
                        </Link>

                    </div>
                </Section>
            </SlideWrapper>


        </SliderContainer>
    )
}
