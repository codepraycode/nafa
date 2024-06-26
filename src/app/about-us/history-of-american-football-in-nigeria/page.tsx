
import { HighlightItem, Highlights } from '@/components/About/Highlights'
import Partners from '@/components/Home/Partners'
import PageHeader from '@/components/PageHeader'
import TextMunch from '@/components/TextMucnh'
import Section from '@/components/UI/Section'
import Image from 'next/image'
import React from 'react'



const highlightitems: HighlightItem[] = [
    {
        bgClr: 'bg-1',
        title: ['About', 'Us'],
        cta: {
            label: 'Learn More',
            link: '/'
        },
        paragraph: [
            'Since the 2011s American football has been an interest to African youth, as their counterparts in the Western World have been making wave in the sport over the years.'
        ]
    },
    {
        bgClr: 'bg-2',
        title: ['Organization', 'Structure'],
        cta: {
            label: 'Learn More',
            link: '/'
        },
        paragraph: [
            'Established in 2019, NAFA was created to increase the number of opportunities for people through the game of American football.'
        ]
    },
    {
        bgClr: 'bg-11',
        title: ['The HUDDLE', 'Way'],
        cta: {
            label: 'Learn More',
            link: '/'
        },
        paragraph: [
            'We exist to provide a source of livelihood, bridge the educational gap in the society and promote interest for the sport in women. American football is emerging as one of the keys to holistic social development as...'
        ]
    },
];



export default function HistoryPage() {
    return (
        <>
            <PageHeader                
                title={
                    <span className='lg-fs-64 fs-48 lg-lh-64_32 lh-48_24'>

                        <TextMunch
                            text={['History of American Football in', 'Nigeria']}
                        />
                    </span>
                }
                image={'https://s3-alpha-sig.figma.com/img/383f/f84f/5e165f49a7e2991ba3d1cf201f89cb84?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NxEZm5lBovcftOTVHzG2NUDYrQ1FdFvPL8OPVPvEDSZvYIacoLaNGhio7-iqAObz7rA9g1PpuxrHh~CyzkfS0qkPQopycVIdYPeUwfACJPCUPuGdzKTqoD8HAOMC5d~5a1CtKCkLZLZhlqAp5S0VGP3tM72nnQlXZM-d~qeiKU2w9HFTlDDfdAcmgAAuGMvOfD0Mgcixfqx0DGSKcOmVHO8W-Z5TkQ3ehyuUrcvbvNCrEUWa7iJv2BpyzYWAaLtPWx--n~9-4KLpRylgb1TyBpEQE~MWgSeLJSo8zbhUk-YG39zp2JszKg-1yxBP-coV75uXz3kO1hh3a1Rcub4xzg__'}
                small
            />

            <Section name='page-content'>
                
                <Section
                    name='even-section'
                >
                    <div className='ff-gotham text-justify text-clr-dark'>
                        <h2
                            className='lg-fw-500 fw-700 lg-fs-32 fs-16 lh-54'
                        >
                            Early History
                        </h2>

                        <p
                            className='fw-400 lg-fs-20 fs-14 lg-lh-54 lh-37'
                        >
                            Since the 2011s American football has been an interest to African youth, as their counterparts in the Western World have been making wave in the sport over the years. In June 2011 the Nigerian Institute of American Football was created, by 3 American Former-Athletes, Daryl Hayes (an assistant coach at Shepherd University of West Virginia), Ricardo Dickerson (Oakland Raiders), and Gregory Hendricks (former Basketball Pro./coach). The Institutes goal as of that time was to teach eager young players and interested coaches the basics of the sport.
                        </p>
                    </div>

                    <div className='text-justify'>
                        <figure>
                            <div className='image-wrapper'>
                                <Image
                                    src='https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/8e35aadc-e65d-41d9-8ac4-5e2fdd3e6ea3_8d00323f7bd4d939ca5c8e684ee8d6de.jpeg'
                                    alt='Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today'
                                    width={500}
                                    height={500}
                                />
                            </div>

                            <br/>

                            <figcaption>
                                <i className='ff-gotham fw-300 lg-fs-18 fs-12 lg-lh-41 lh-37 text-clr-dark'>
                                    <b className='fw-700'>
                                        Figure 3
                                    </b> Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today
                                </i>
                            </figcaption>
                        </figure>
                    </div>
                </Section>

                <h2 className='ff-gotham fw-500 lg-fs-32 fs-16 lg-lh-54 lh-37 text-center text-clr-dark lg-my-3 my-1'>
                    <i>
                        The Institutes goal as of that time was to teach eager young players and interested coaches the basics of the sport.
                    </i>
                </h2>


                <Section
                    name='even-section'
                    className='ff-gotham fw-400 fs-20 lh-54 text-justify'
                >
                    <div>
                        
                        <p>
                            At the same time, the first Nigerian American Football Team was created (A.B.U TITANS). After this, it was noticed that the interest was not only in West Africa, as teams and leagues began to spring up in North Africa, in Egypt and Morocco. A few years later, Nigeria had its second team created and this happened also in other parts of West Africa, like Ivory Coast and other countries across Africa.

                            <br/><br/>
                            <b className='fw-500'>
                                WESTERN AFRICAN FOOTBALL CONFERENCE<br/>NIGERIA
                            </b>

                            <br/>
                        </p>

                        <ul className='li-inside li-p-1'>
                            <li>A.B.U Titans</li>
                            <li>Lagos Marines</li>
                            <li>Ibom Tigers</li>
                        </ul>
                    </div>

                    <div>
                        <p>
                            As of 2016 American Football made a statement across Africa, with major events like the African American Football Championship that was to be held in Rabat Morocco, Lagos Marines a Nigerian based team playing in the first official American Football game in West Africa against the A.B.U Titans, and many more events going on across Africa, in South Africa and East Africa. 
In 2017, the American football community in Africa hosted more key events. First was the SANKOFA BOWL, the first American Football Club action in West Africa, which consisted of four (4)teams.
                        </p>
                    </div>
                </Section>

                <br/><br/><br/><br/><br/><br/>
                <figure className='f-w'>

                    <div className='image-wrapper'>
                        <Image
                            src='https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/b91a3b8c-ab60-4598-a363-968f7680b2cd_5c481946e7e93030d30c33d4cbe7401c.jpeg'
                            alt='Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today'
                            width={500}
                            height={500}
                        />
                    </div>

                    <br/>

                    <figcaption className='text-justify ff-gotham text-clr-dark lg-lh-41 lh-37 lg-fs-18 fs-14 fw-300'>
                        <i>
                            <b className='fw-700'>Figure 4</b>{' '}
                            The 2018 Sankofa Bowl witnessed the Lagos Marines play the Ivory Coast Riviera Golf Golden Eagles 
                        </i>
                    </figcaption>
                </figure>


                <br/><br/><br/><br/>
                <Section
                    name='even-section'
                    className='ff-gotham fw-400 fs-20 lh-54 text-clr-dark'
                >
                    <div>
                        
                        <p>
                            In 2018, the Shitsuke Flag Football League was created focusing on flag football and equality by insisting that every team plays with female players. The organization has been running for 2 years within Lagos Island and is the only Co-ed league in existent in Nigeria. It currently consists of 8 full time teams and 2 development teams. The list of teams include;
                            
                            <br/>

                            <i>
                                <b>The Titans</b><br/>
                                <b className='my-1'>Vortex Athletics</b>
                            </i>
                        </p>
                    </div>

                    <div>
                        <ul role='list' className='fw-700 text-italic'>
                            <li>Spartans</li>
                            <li>The Gidirons</li>
                            <li>Trogons</li>
                            <li>Knights</li>
                            <li>Panthers</li>
                            <li>Windrunners</li>
                            <li>Lagos Rebels</li>
                            <li>Stingrays</li>
                        </ul>
                    </div>
                </Section>



                <Section name='figures' noWrapper>
                    <br/><br/><br/><br/><br/><br/>
                    <figure className='f-w'>
                        <div className='image-wrapper'>
                            <Image
                                src='https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/7a9ec9d1-3726-482c-8c25-6660017ac5fa_774490e7948ef855ed75740da90b3da2.jpeg'
                                alt='Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today'
                                width={500}
                                height={500}
                            />
                        </div>
                        <br/>
                        <figcaption className='text-justify ff-gotham text-clr-dark lg-lh-41 lh-37 lg-fs-18 fs-14 fw-300'>
                            <i>
                                <b className='fw-700'>Figure 5</b>{' '}
                                The 2020 Lagos Mainlanders Vs Lagos Islanders witnessed the Lagos state First NAFA Exhibition games.
                            </i>
                        </figcaption>
                    </figure>


                    <br/><br/><br/><br/>
                    <figure className='f-w'>
                        <div className='image-wrapper'>
                            <Image
                                src='https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/d8d91d03-8372-423e-80b7-d534ccfad21a_ed9f8b88877d50b66eacd77b954933d5.jpeg'
                                alt='Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today'
                                width={500}
                                height={500}
                            />
                        </div>
                        <br/>
                        <figcaption className='text-justify ff-gotham text-clr-dark lg-lh-41 lh-37 lg-fs-18 fs-14 fw-300'>
                            <i>
                                <b className='fw-700'>Figure 6</b>{' '}
                                The 2020 Exhibition games by Nigerian American Football Association NAFA. It was the official way to introduce the association to the general public and this event witnessed over 1000 views on sight. 
                            </i>
                        </figcaption>
                    </figure>


                    <br/><br/><br/><br/>
                    <figure className='f-w'>
                        <div className='image-wrapper'>
                            <Image
                                src='https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/8c71246e-ba19-47b1-b1ca-cf27007d243b_a6283b344b4d2e35150e15f2648f626d.jpeg'
                                alt='Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today'
                                width={500}
                                height={500}
                            />
                        </div>
                        <br/>
                        <figcaption className='text-justify ff-gotham text-clr-dark lg-lh-41 lh-37 lg-fs-18 fs-14 fw-300'>
                            <i>
                                <b className='fw-700'>Figure 7</b>{' '}
                                The 2020 Exhibition games with photos of Coach Dominik Mueller from Germany, Founder of American Football in Lagos Nigeria, the man who gave life to American football in Nigeria.
                            </i>
                        </figcaption>
                    </figure>


                    <br/><br/><br/><br/>
                    <figure className='f-w'>
                        <div className='image-wrapper'>
                            <Image
                                src='https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/4ff8fb7c-c685-40c0-a969-e6381ae162dc_aee2a6b67dde5824ac9786b8163f38f3.jpeg'
                                alt='Figure 3 Cross section of players of the Lagos Marines, the most active tackle football Team in Nigeria today'
                                width={500}
                                height={500}
                            />
                        </div>
                        <br/>
                        <figcaption className='text-justify ff-gotham text-clr-dark lg-lh-41 lh-37 lg-fs-18 fs-14 fw-300'>
                            <i>
                                <b className='fw-700'>Figure 8</b>{' '}
                                The 2020 Exhibition games with photos of Coach Dominik Mueller from Germany, Founder of American Football in Lagos Nigeria, the man who gave life to American football in Nigeria. 
                            </i>
                        </figcaption>
                    </figure>

                </Section>

                <br/><br/><br/>

                <p className='ff-gotham fw-400 lg-fs-20 fs-14 lg-lh-54 lh-37 text-justify text-clr-dark'>
                    The organization has only been around for a cumulative period of four years but has recorded high-end progress that currently makes her the leading American Football organization in Nigeria and.
                </p>

                <br/><br/><br/>


                <Highlights
                    title='Explore More'
                    items={highlightitems}
                />

                
            </Section>

            <Partners />

        </>
    )
}
