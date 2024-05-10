
import Partners from '@/components/Home/Partners'
import PageHeader from '@/components/PageHeader'
import AppLink from '@/components/UI/AppLink'
import Section from '@/components/UI/Section'
import Image from 'next/image'
import React from 'react'

export default function HistoryPage() {
    return (
        <>
            <PageHeader
                title='History of American Football in Nigeria'
                image={'/history-page-header.jpeg'}
            />

            <Section name='page-content'>
                
                <Section
                    name='even-section'
                >
                    <div className="left_side">
                        <h2>Early History</h2>
                        <p>Since the 2011s American football has been an interest to African youth, as their counterparts in the Western World have been making wave in the sport over the years. In June 2011 the Nigerian Institute of American Football was created, by 3 American Former-Athletes, Daryl Hayes (an assistant coach at Shepherd University of West Virginia), Ricardo Dickerson (Oakland Raiders), and Gregory Hendricks (former Basketball Pro./coach). The Institutes goal as of that time was to teach eager young players and interested coaches the basics of the sport.</p>
                    </div>

                    <div className="right_side">
                        <figure>
                            <div className="image-wrapper">
                                <Image
                                    src="/early-history.jpeg"
                                    alt="Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <br/>
                            <figcaption>
                                <i><b>Figure 3</b> Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today</i>
                            </figcaption>
                        </figure>
                    </div>
                </Section>

                <br/><br/><br/><br/><br/><br/>

                <h2 className='text-center text-title'>
                    <i>The Institutes goal as of that time was to teach eager young players and interested coaches the basics of the sport.</i>
                </h2>


                <br/><br/><br/><br/><br/><br/>
                <Section
                    name='even-section'
                >
                    <div className="left_side">
                        
                        <p>
                            At the same time, the first Nigerian American Football Team was created (A.B.U TITANS). After this, it was noticed that the interest was not only in West Africa, as teams and leagues began to spring up in North Africa, in Egypt and Morocco. A few years later, Nigeria had its second team created and this happened also in other parts of West Africa, like Ivory Coast and other countries across Africa.

                            <br/><br/>

                            <b>
                                <i>WESTERN AFRICAN FOOTBALL CONFERENCE</i>
                            </b>
                            <br/>
                            <b>
                                <i>NIGERIA</i>
                            </b>
                            <br/>
                        </p>
                        <ul>
                            <li>A.B.U Titans</li>
                            <li>Lagos Marines</li>
                            <li>Ibom Tigers</li>
                        </ul>
                    </div>

                    <div className="right_side">
                        <p>
                            As of 2016 American Football made a statement across Africa, with major events like the African American Football Championship that was to be held in Rabat Morocco, Lagos Marines a Nigerian based team playing in the first official American Football game in West Africa against the A.B.U Titans, and many more events going on across Africa, in South Africa and East Africa. 
In 2017, the American football community in Africa hosted more key events. First was the SANKOFA BOWL, the first American Football Club action in West Africa, which consisted of four (4)teams.
                        </p>
                    </div>
                </Section>

                <br/><br/><br/><br/><br/><br/>
                <figure className='f-w'>
                    <div className="image-wrapper">
                        <Image
                            src="/history-page-header.jpeg"
                            alt="Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today"
                            width={500}
                            height={500}
                        />
                    </div>
                    <br/>
                    <figcaption>
                        <i>
                            <b>Figure 4</b>{" "}
                            The 2018 Sankofa Bowl witnessed the Lagos Marines play the Ivory Coast Riviera Golf Golden Eagles 
                        </i>
                    </figcaption>
                </figure>


                <br/><br/><br/><br/><br/><br/>
                <Section
                    name='even-section'
                >
                    <div className="left_side">
                        
                        <p>
                            In 2018, the Shitsuke Flag Football League was created focusing on flag football and equality by insisting that every team plays with female players. The organization has been running for 2 years within Lagos Island and is the only Co-ed league in existent in Nigeria. It currently consists of 8 full time teams and 2 development teams. The list of teams include; <b>The Titans</b>
                        </p>
                    </div>

                    <div className="right_side">
                        <ul role='list' className='flist'>
                            <li>Vortex Athletics</li>
                            <br/>
                            <li>Spartans</li>
                            <br/>
                            <li>The Gidirons</li>
                            <br/>
                            <li>Trogons</li>
                            <br/>
                            <li>Knights</li>
                            <br/>
                            <li>Panthers</li>
                            <br/>
                            <li>Windrunners</li>
                            <br/>
                            <li>Lagos Rebels</li>
                            <br/>
                            <li>Stingrays</li>
                            <br/>
                        </ul>
                    </div>
                </Section>



                <Section name='figures' noWrapper>
                    <br/><br/><br/><br/><br/><br/>
                    <figure className='f-w'>
                        <div className="image-wrapper">
                            <Image
                                src="/history-1.jpeg"
                                alt="Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today"
                                width={500}
                                height={500}
                            />
                        </div>
                        <br/>
                        <figcaption>
                            <i>
                                <b>Figure 5</b>{" "}
                                The 2020 Lagos Mainlanders Vs Lagos Islanders witnessed the Lagos state First NAFA Exhibition games. 
                            </i>
                        </figcaption>
                    </figure>


                    <br/><br/><br/><br/><br/><br/>
                    <figure className='f-w'>
                        <div className="image-wrapper">
                            <Image
                                src="/history-2.jpeg"
                                alt="Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today"
                                width={500}
                                height={500}
                            />
                        </div>
                        <br/>
                        <figcaption>
                            <i>
                                <b>Figure 6</b>{" "}
                                The 2020 Exhibition games by Nigerian American Football Association NAFA. It was the official way to introduce the association to the general public and this event witnessed over 1000 views on sight. 
                            </i>
                        </figcaption>
                    </figure>


                    <br/><br/><br/><br/><br/><br/>
                    <figure className='f-w'>
                        <div className="image-wrapper">
                            <Image
                                src="/history-3.jpeg"
                                alt="Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today"
                                width={500}
                                height={500}
                            />
                        </div>
                        <br/>
                        <figcaption>
                            <i>
                                <b>Figure 7</b>{" "}
                                The 2020 Exhibition games with photos of Coach Dominik Mueller from Germany, Founder of American Football in Lagos Nigeria, the man who gave life to American football in Nigeria.
                            </i>
                        </figcaption>
                    </figure>


                    <br/><br/><br/><br/><br/><br/>
                    <figure className='f-w'>
                        <div className="image-wrapper">
                            <Image
                                src="/history-4.jpeg"
                                alt="Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today"
                                width={500}
                                height={500}
                            />
                        </div>
                        <br/>
                        <figcaption>
                            <i>
                                <b>Figure 8</b>{" "}
                                The 2020 Exhibition games with photos of Coach Dominik Mueller from Germany, Founder of American Football in Lagos Nigeria, the man who gave life to American football in Nigeria. 
                            </i>
                        </figcaption>
                    </figure>

                </Section>

                <br/><br/><br/><br/><br/><br/>

                <p>The organization has only been around for a cumulative period of four years but has recorded high-end progress that currently makes her the leading American Football organization in Nigeria and. </p>

                <br/><br/><br/><br/><br/><br/>


                <h2 className='section-title'>
                    Explore More
                </h2>
                <br/><br/><br/><br/><br/><br/>
                <div className="article-list">
                    <article className='bg-green'>
                        <h2>About<br/>Us</h2>
                        <br/>
                        <p>Since the 2011s American football has been an interest to African youth, as their counterparts in the Western World have been making wave in the sport over the years.</p>

                        <AppLink href="/" className='btn btn-light'>
                            Learn More
                        </AppLink>
                    </article>

                    <article className='bg-blue'>
                        <h2>Organization<br/>Structure</h2>
                        <br/>
                        <p>Established in 2019, NAFA was created to increase the number of opportunities for people through the game of American football.</p>

                        <AppLink href="/" className='btn btn-light'>
                            Learn More
                        </AppLink>
                    </article>
                    
                    <article className='bg-orange'>
                        <h2>The HUDDLE<br/>Way</h2>
                        <br/>
                        <p>We exist to provide a source of livelihood, bridge the educational gap in the society and promote interest for the sport in women. American football is emerging as one of the keys to holistic social development as it fosters inclusion.</p>

                        <AppLink href="/" className='btn btn-light'>
                            Learn More
                        </AppLink>
                    </article>
                </div>
            </Section>

            <Partners />

        </>
    )
}
