
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
                image={"https://s3-alpha-sig.figma.com/img/383f/f84f/5e165f49a7e2991ba3d1cf201f89cb84?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NxEZm5lBovcftOTVHzG2NUDYrQ1FdFvPL8OPVPvEDSZvYIacoLaNGhio7-iqAObz7rA9g1PpuxrHh~CyzkfS0qkPQopycVIdYPeUwfACJPCUPuGdzKTqoD8HAOMC5d~5a1CtKCkLZLZhlqAp5S0VGP3tM72nnQlXZM-d~qeiKU2w9HFTlDDfdAcmgAAuGMvOfD0Mgcixfqx0DGSKcOmVHO8W-Z5TkQ3ehyuUrcvbvNCrEUWa7iJv2BpyzYWAaLtPWx--n~9-4KLpRylgb1TyBpEQE~MWgSeLJSo8zbhUk-YG39zp2JszKg-1yxBP-coV75uXz3kO1hh3a1Rcub4xzg__"}
                small
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
                                    src="https://s3-alpha-sig.figma.com/img/7cc7/9fe2/8d00323f7bd4d939ca5c8e684ee8d6de?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEbTVYhi1hQW8SBQ6~pdKe9La97bkueWyp963AMhR7Y-U3E~NgNdC1lybbYxc2qLdRN118HvtBjb0waLZSnoiZknHIIwPCsZ82mL11IAy5aWTOArRxK-akTG6-Qj6d4Gl65Xo56SlWh3NJggZHVigdVIHX1KQxOc7if0VDVWXL0U7lNhC~AxuVV~bxrCF-~ivHaQDMJGJI4lnJzfJDmkoJoNHYhdPj-hZBr~5g8rXaW-HkDAz6G0CkwVAktcPTozKc7TiqUxyQhI9Qv35~AflDH1yT9AE~vZ45kixL5h0M13tSxD88vP2ByNs2cDqVWT2-zr547bnBG~khtcI4rUtg__"
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
                            src="https://s3-alpha-sig.figma.com/img/babe/4fce/5c481946e7e93030d30c33d4cbe7401c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pUDVenBcW2rL1WW37qIdgaKqL~a39OBNp-cYyZbiqSX~7Xh6xc1842ZVo5-3CJe5-PcMc5Tj0Wv1wqyjGqeSIeZ7jO~EasxioFnEfAC5lvnz-1Gx989R2ow3E5gRu8ce~r7ekUw~geyIT~92mFiDx3fjMnD~9spsMAG-CeqRLv-eCUozqqzt9~evi5azpbg8Eo2iSFLSyhwsfDKIkNgVaCPxJkpj6DSUUJItB1Lh0VNRFsqnbwqGug~wuc8Pbxc1kr4O6WLRjnGQW~CDOl3pBCMcrgQBKRz9LwitdrDODQK1JAYCvhezNlqAb4JBc-9IGQxUz~aggs-jGB8h4d4V9w__"
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
                                src="https://s3-alpha-sig.figma.com/img/6acb/dbe6/774490e7948ef855ed75740da90b3da2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OkdCOxDX-W2dG6Q3L-HXOpf9yff0gMIArRlAc8MMJwkzfGK3bl9sx-d8tbg41pR6agSgCkGvLMb8k5KLemHDdUjJRyWFDnexY8eB8Zb07cIPje0pKTmbysBcMwmNZ45guWtlSqjxUuFCK-dUEsOv~qPQtZjKdBzBahBrmohFUGSw5kJN9LXbgMfpQAnGEtzxFmPEfomMJoKoQaTeOEkZEE7jFxjZ5vJClgYNmjcRleAlwTiV4iNKTmoMeV~zE3seOf58Ab9HY6jtXSsSFoa2DAbI7BwCT891s6McXEwhFd58Hyr3oH2cO42BG6fy218iINAnOnI1BEveutevMehQKw__"
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
                                src="https://s3-alpha-sig.figma.com/img/e6c0/d90c/ed9f8b88877d50b66eacd77b954933d5?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkpF61IWgEb-WaRN6zLwv63baQuq-I87kW8VxVdfJCqFiY29AmQTOif4uD0boucrFJF9ZROeZnnsSVhS8r0xdnetPWk3D2DjdE4knfdZV0hwkU83lNlU1AJP2nBLYhsZnaqgLPtu-eIygXTq6ltnmQaXXU7f5ae5MDegh4EI7akQVUryhLJZ3dxP8l88qYfa1fkhwK6ix~bZsjOQ-GzH1ZKN6FUIfaKowBTP~d0la0TG1ntSdzphPm5n~mTP2Ny1ER-KoEyZZMxpNrdcWu2tPRFh71kj~uEyJi0qhva55qzn3wqIPhRAHIzKYDXTgrcYCKvzzXlxC5-mUTdxruIywA__"
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
                                src="https://s3-alpha-sig.figma.com/img/2efe/d633/a6283b344b4d2e35150e15f2648f626d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1gE2JbhYbO~S~fugMdxi1utgfylOcLbPxaFki9mY2W24txeUBK3VGcuy0Y7n522spfPszSbadmkuXWzwdgAQ4DhqpyJYh-iFcmY6df9rfwcA2EmS7AjmBY5Z6oLKxA9qqZD~hdp5tYKYcc6NfjZsZmOmKXT-XJvrT9y7GtlnFqtbqovXKqiFvfdWCv-L02thkmTQuVkEXEwZSV1yOS5xeDAej6zB5FdKXiXbHcMchy8YcnFpCyR0EMntgUyyYSEFDTx7REPqIAqdCKvU99GbphuLXGnDN549sH3R2PPrXL3roj~Mh8GBJ2kX9V7D8uOkcQj4gMsc2jySHXAQqtt2w__"
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
                                src="https://s3-alpha-sig.figma.com/img/aba5/c3dc/aee2a6b67dde5824ac9786b8163f38f3?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHs3GLRDAOtQnfcigRDEq7O-2JnerQ4S1fKMPoIScgoEuaBZ5S-VrPm28exeDicOLE6~oUNmnD27zDbN842Xbf0md79TcnodOhzHoznduK-K37spqqI3N5qd9H5fhnUenJvYyH71QmYH8TNyAJ1mGxN5~5~H3G2ldLrD7nmns0JBA7FbLRiBieOmzA1zohPTIOKZOtntZiAYoVV4OQkT-WkhV7PUxsZ7B~LhO-vZZ4U~N9o025H8Cr7b0D1u5pJZR4lpuUshN2spcHNa0rHrcTjoFNXDJIx7wPPbpobJfpXcicFbr5pT3xvOAOHRAOdd-jKljdMzgl5jFt3HyEctqQ__"
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
