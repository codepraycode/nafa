import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import AppLink from "@/components/UI/AppLink";
import Section from "@/components/UI/Section";
import aboutData from "@/data/about.json";
import Image from "next/image";



const people = [
    
    {
        image:"https://s3-alpha-sig.figma.com/img/29f9/d16e/86025eea815a9dfaa385286a5821b6df?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GQAsfrz0PjMoNsJ6p~qB0ldXdpM6CwM6qx1Mrz8SRtWx2J-1fvGoKuyH9lX6dwSjFeEJmZll-vCA0fymP1c1iQYkkcsNT-pEnniIVMkbRRIZe7salpS5XgHea21P~8CrUdsg1dw2sALX0eBM9zCKYMuYdrBzeUOD3iw0EH2C3LfXp0ISk9QdzcafPE~4hTgZK2H4nxBB731BXgncGFxVoRhqtYh9h3PNpIgftrX8jMwPLPdsS6aC3zyRKE6QXVjHCBf3l6yR8OXXctlqwspm0mUB~xMjcvlZcQhowKcRBCBZ4Fh6iwH7h-hEa48EKybjmQDTyDQWSq~kSgMIrd9N4A__",
        name: "Babajide Akeredolu",
        about: "President and Acting BOT Chairman"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/8d96/f68a/5a1d7f278caf1a4fea63edc911007643?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LnAsJtGhN-37A8jkrIfTvW8WLtWWE-zVMO~L-cP8seqOGQAd85oqStdjbGuPJpyieVWsG4GnFartXwXLKWV7mxYAKRE4bFruae0dLxU~lxhtZKo91cgvo-Iwuhs7-vUBGY~r7BjFdS5s3ET28c9znl6MPrYjmpMnq8KUDG~fPJT8~IatIyz0dmXJEOLz9HKcKiphuT6ARsOYnGsFPQfuNP6vnFT~gxBOVCIINHYIQIREyDZQdjne2ODSQlrJ5Q48SHk6ww35ug0nitBYJ6iMDGk1hQvTdt~Gxt9PLon21zmXl4XB9rtUNyWyWbxLdN4tKEtj3MyunhHA74MaKbVscA__",
        name: "David Obatolu",
        about: "Vice President"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/190b/614e/280904092ffcb35ee0c9ee1a8d496c0d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UJwMGzt2fpY4U1glDSYhAdUB6XPB6iXRhDVxFvzhoRJdOAiFGVPAC22DeBd5UCyzJ25IUFpKhUSTjZS-3AuJCEeOZZp3QiH-WFnzrsnRnYNkq0W6opdyIDw30ien39Ks0dAMCLKZXhXSgp5seqclhlkqlfPqcIdTmnpJDjBt9sUgxeh5~yc7OuuRIhNFg7oyg3UQsVS-MT5mJeXzPd2MFCIj4Z~kqjbqZSIKolRjE6b8bSIMiZVucWi9VCVs-MNIyDe8~znDJY~sfSEL0mS1dJeGTQ0N6frnEFnqB8HaUB2mJPZ3491axsi1lqogDObzo2-~wlGSipET78fmAEavxw__",
        name: "Ms. Nancy Damhindi",
        about: "Head of HR and Secretary to the Board of Trustees"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/58de/d8a8/261fde1df9b5a116e68776049ad3825c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgCD0IpNlVISM1ZkhkAOQipOcFQjQmGU9uykTip5gxI9s10aXwJw1I0p~lhxRE2gmnHfM5TuT41IZ9RNIxdeCB6W1IthYwCwtytDOHinr-4HuwM5dDS39S62-j~mFQgGThoJmA2W98dovOJm3PJpxulvMPEFx-QIvvUU4rFC9S2LMvje5Zy7kc1RnjzuoEqFOPGO22XOlr8foA1LLQ9ym38tYS5osY1rmbaMYWea9iVhDb9brtjIJKKddNFhIhLrz1HXN23BfTXrtIVmzxBInCLNFCsN3jFx8hr~P5qyqOOZNPzpzjeLeXSTyt2thDskkH-7tOK6CtS61tq6wT1MJQ__",
        name: "Lawrence Ojaideh",
        about: "Secretary General"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/beb8/dcc9/2c97414350d32b734fd4509b37a2c19c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D3mbF549FlWxGhzOgQmMNUOTSafSfzC7nAco~GwNpDFs8eStpGuI9zKgLkpPUz7YduZ7dUczXxLnVC7Is9eU4rnvBs76G-TgjYbhvLWOBQXGoNLYi90COudGzpr8dma-k4XYxAkIr75CySGqeYGJi0i7WReczP9QUpOfirZ7ypC88rAPBbab2jL4pF~gJpb1wPyLiffG6A~UYZDJO7mRCCXBNDBEXHp8YT9nIkH7aPadYy80DaOf0~3DDUkhDE9LaSrUE14n6~2yz3JrBQBb54o~MvwNmDjqBWt6EFT6SIMGdjdJivL~CwGl7VvY98Ta510emLj77l7b82zaDADwWQ__",
        name: "Tola Ariyo",
        about: "Head of Legal & Compliance"
    }
    
    

]


export default function AboutPage() {
    return(
        <>
            <PageHeader
                title={aboutData.header.title}
                image={aboutData.header.image.src}
            />

            <Section name="page-content">

                <Section name="vision_mission">
                    <div>
                        <h2 className="section-title text-capitalize">Our Vision</h2>
                        <br/><br/><br/>
                        <p>
                            <b>
                                Our vision is to create increased opportunities for the African continent through American Football.
                            </b>
                            <br/><br/>
                            <span>
                                Opportunities ranging from free healthcare and enhanced access to health care, to educational scholarships through sport, provisions of sustainable means of livelihood and exposure to diverse cultures and international leagues and tournaments through NAFA tours.
                            </span>
                            <br/><br/>
                            <span>
                                We will be the first organization with clear intent to integrate Nigeria and Africa with the National Football League (NFL) in America and other organizations across the world.
                            </span>
                        </p>
                    </div>

                    <div>
                        <h2 className="section-title text-capitalize">Our Mission</h2>
                        <br/><br/><br/>

                        <ol>
                            <li>
                                To become the governing body for the growth, awareness and development of American Football in Nigeria.
                            </li>
                            <li>
                                To represent Nigeria by kick-starting a professional American Football League that will consist of American Football teams all over Africa, divided into 4 regional conferences. All conferences will function individually, but still under the supervision/governance of the NAFA;
                            </li>
                            <li>
                                To be focused on grassroots development of the sport, throughout Nigeria (and later Africa) by installing the sport as an intricate part of the nation’s educational curriculum;
                            </li>
                            <li>
                                To be focused on grassroots development of the sport, throughout Nigeria (and later Africa) by installing the sport as an intricate part of the nation’s educational curriculum;
                            </li>
                            <li>
                                Use the sport as an opportunity to promote safety culture within and outside the remits of the sports.
                            </li>
                        </ol>
                    </div>
                </Section>


                <br/><br/><br/><br/>

                <Section name="logo_label">

                    <h2 className="section-title">Our Logo</h2>
                    <br/>
                    <figure>
                        <Image
                            src={"https://s3-alpha-sig.figma.com/img/cf41/4235/19ebcb622408148256d9072033e6052e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FSWj-MydVPrictzf1AIsJCRjPrdQGSNDcRrl-gCjtfhxqIpOPF7HttPBjNmZbFkArvNK4qmmNc~~XXUDmcklhEcZaDJzoa7MEPXNn~aSVMgcUU6QVvCL7BfiWGe7w4aKcRO0GURmImEOkkLZ31wM1NZcv1fnSEgfTuVM~FzTb2z-jmpA8Iw0EkeAZVIXPO7Cw5Qd-D~Ks2ICxyzLaG7Vc9KQhIDgRa6zfGaeBizc9LZIQW8DdX8IgxmnKBBQUChRaRnBoBHRJtPUfKFBXowY2mCnkWaUbZiz~jfZf1SR8G6QFFUwz4QvzxQKn6w4vjDWJEUCG2WiJ-~8LM4daJoaSg__"}
                            alt="Logo Meaning"
                            width={1170}
                            height={807}
                        />
                    </figure>

                </Section>
                <br/><br/><br/><br/>

                <Section name="objectives">
                    <h2 className="section-title">Objectives</h2>
                    <br/><br/>
                    <ol>
                        <li>Promote contact and non-contact American Football competitions.</li>
                        <li>
                            Develop, manage and grow the American Football League and brand within Africa, for international competition (2 years plan).
                        </li>
                        <li>
                            Develop, manage and grow the American Football League and brand for international competition (5 years plan).
                        </li>
                        <li>
                            Develop, manage and grow the American Football League in Nigeria.
                        </li>
                        <li>
                            Provide opportunities for engagement and development to people of all ages, background and abilities within American Football.
                        </li>
                        <li>
                            The regulation of the game on and off the field of play through oversight of its rules;
                        </li>
                        <li>
                            The representation of the Nigerian game to national and international partners, be it sporting organizations, federations or commercial interests.
                        </li>
                    </ol>
                </Section>



                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

                <br/><br/><br/><br/><br/><br/><br/><br/><br/>


                <Section name="people">
                    <h2 className="section-title">Our People</h2>
                    <br/><br/><br/><br/>


                    <div className="listing">
                        {
                            people.map((e, i)=>(  
                                <figure key={i}>
                                    <div
                                        className="img"
                                        title={e.name}
                                        style={{
                                            backgroundImage: `url(${e.image})`
                                        }}
                                    />
                                    <br/>
                                    <figcaption className="text-center">
                                        <b>{e.name}</b>
                                        <br/>
                                        <span>{e.about}</span>
                                    </figcaption>
                                </figure>
                            ))
                        }
                    </div>

                </Section>

                <br/><br/>

                <AppLink
                    href={"/our-people"}
                    className='btn btn-primary slide-cta fs-2'
                >
                    Meet Our People
                </AppLink>


            </Section>

            <Partners/>
        </>
    )
}