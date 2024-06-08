import AppLink from "../UI/AppLink";
import Section from "../UI/Section";

export function Highlights() {
    return (
        <Section name="article-highlight">
            <h2 className='section-title'>
                Explore More
            </h2>
            <br/><br/><br/>
            

            <div className="article-list">
                <article className='bg-green'>
                    <h2>History of American<br/>Football In Nigeria</h2>
                    <br/>
                    <p>Since the 2011s American football has been an interest to African youth, as their counterparts in the Western World have been making wave in the sport over the years.</p>
                    <br/><br/>
                    <AppLink href="/" className='btn btn-light'>
                        Learn More
                    </AppLink>
                </article>

                <article className='bg-blue'>
                    <h2>Organization<br/>Structure</h2>
                    <br/>
                    <p>Established in 2019, NAFA was created to increase the number of opportunities for people through the game of American football.</p>
                    <br/><br/>
                    <AppLink href="/" className='btn btn-light'>
                        Learn More
                    </AppLink>
                </article>
                
                <article className='bg-orange'>
                    <h2>The HUDDLE<br/>Way</h2>
                    <br/>
                    <p>We exist to provide a source of livelihood, bridge the educational gap in the society and promote interest for the sport in women. American football is emerging as one of the keys to holistic social development as it fosters inclusion.</p>
                    <br/><br/>
                    <AppLink href="/" className='btn btn-light'>
                        Learn More
                    </AppLink>
                </article>
            </div>
        </Section>
    )
}