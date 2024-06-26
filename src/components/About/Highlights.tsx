import AppLink from "../UI/AppLink";
import Section from "../UI/Section";
import { SectionTitle2 } from "../UI/SectionTitle";

export function Highlights() {
    return (
        <Section name="article-highlight">
            {/* <h2 className='section-title'>
                Explore More
            </h2> */}

            <SectionTitle2
                title="Explore More"
            />
            <br/><br/><br/>
            

            <div className="article-list">
                <article className='bg-1 text-clr-light'>
                    <h2 className="fw-600 lg-fs-32 fs-16 lg-lh-39 lh-19">
                        History of American<br/>Football In Nigeria
                    </h2>

                    <br/>

                    <p className="ff-gotham fw-400 lg-fs-20 fs-14 lh-37">
                        Since the 2011s American football has been an interest to African youth, as their counterparts in the Western World have been making wave in the sport over the years.
                    </p>

                    <br/><br/>
                    
                    <AppLink href="/" className='btn btn-light'>
                        Learn More
                    </AppLink>
                </article>

                <article className='bg-2 text-clr-light'>
                    <h2 className="fw-600 lg-fs-32 fs-16 lg-lh-39 lh-19">
                        Organization<br/>Structure
                    </h2>

                    <br/>

                    <p className="ff-gotham fw-400 lg-fs-20 fs-14 lh-37">
                        Established in 2019, NAFA was created to increase the number of opportunities for people through the game of American football.
                    </p>

                    <br/><br/>

                    <AppLink href="/" className='btn btn-light'>
                        Learn More
                    </AppLink>
                </article>
                
                <article className='bg-11 text-clr-light ff-montserrat'>
                    <h2 className="fw-600 lg-fs-32 fs-16 lg-lh-39 lh-19">
                        The HUDDLE<br/>Way
                    </h2>

                    <br/>

                    <p className="ff-gotham fw-400 lg-fs-20 fs-14 lh-37">
                        We exist to provide a source of livelihood, bridge the educational gap in the society and promote interest for the sport in women. American football is emerging as one of the keys to holistic social development as it fosters inclusion.
                    </p>

                    <br/><br/>

                    <AppLink href="/" className='btn btn-light'>
                        Learn More
                    </AppLink>
                </article>
            </div>
        </Section>
    )
}