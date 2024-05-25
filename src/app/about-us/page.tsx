import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import AppLink from "@/components/UI/AppLink";
import Section from "@/components/UI/Section";
import aboutData from "@/data/about.json";
import Image from "next/image";



const people = [
    
    {
        image:"https://s3-alpha-sig.figma.com/img/29f9/d16e/86025eea815a9dfaa385286a5821b6df?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oy6sCVSu5Z9GnnR2qSTFqrQTze92E-h7-sdeIokDFQ4Rr0MEyPTPT5mDcGwZZyuL2aKB93B5pmenUvtNHFjTM00EP0eC9VmRK2KM9XclOA0yH0v7H9P7MHWWWu64z27GZb~cen7xM8MRnnk7U~TZ80enTYJt~PF9KQZ97d2QBwsfQBJNKN5O~g5rKBabW5oE~ei1sDGk-DuKuixylsGIGEePlwcgYi-ODumO4OOOooEEF-y6lSzpA5dAUdkkbCS1ASm0NSKfVnk3bSM9-wXo~I8Ggg73Iqb-t3bGAzN55OVrlYGpi3o~RhGvMtFNkOxCmwB7P3hkEb-7taEJpeKuvg__",
        name: "Babajide Akeredolu",
        about: "President and Acting BOT Chairman"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/c948/0fdd/7dde1799300944f039c60d1e67d6d889?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhe-AIY7zhAO86uWBglQu6y701zhXZWE-4266wsG4Ft84t1qV6IboZMBjgV2KyuNUk3zdjPjOpNKshZk391pX62IaulGFrv--PjlhQyAl1CwxaHODd0mz7-xlFRN7tWZnW0wRAwRYlbliwvXx6NkNyBnkn3iSH5rmlKOD1WYyXSZpPIzEZn4aS7HORgYemF7a-UvwN5FUuX29TJ1M~iFoRcv6kEK16m1sgt517zL5ErxyzF4eGrpoDbz1srPFRv~DJO3mzmHLaKGHoIigPuIqKuT1XwJd6f4GlGm2U-T2S7JONCz7V-R7LoMcCWnQU3iodAQHPFjKvV~DrgiahLHFg__",
        name: "David Obatolu",
        about: "Vice President"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/190b/614e/280904092ffcb35ee0c9ee1a8d496c0d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvpFAee64Pbyu4m4~Ep1nIss2hQM~VWGy~KApQdvAjsU6ZPuAoKvVNYjvwU4cuNUt-vUirJpEEf0t-m84i-V3FaOYaP6iOBvQJVUBS1BZZ3XILFNOjJeaS9nWXLwupgsS227a7kV1LB8Bbdyt8pg1V1YQDYw4DZYo2cfkQjTCxsj3BWsjZkBwkGMo-ZuZDPvBU0A6yy8YhST2VA5350gaGrseusMNr-5ttfjJgVyo1jlqN~W8pApsZ~N-6wA85f1-VTexAY8BVCCQuNFdRlm09kBeNCklz45Klbh9gaxMa-yCjwRLYyTC6GY7tfVCSgSKNbVGRk7vFIdvPyD5bpvZQ__",
        name: "Ms. Nancy Damhindi",
        about: "Head of HR and Secretary to the Board of Trustees"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/58de/d8a8/261fde1df9b5a116e68776049ad3825c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UHxJiQBIRLYPIQeHcB4saO-eccGQ9m~MhsUk9gyngIM93czeQlQdrlTz8J5krAA1nRjNkv-B6AUO3zcLdHvDNJqlTeDRXql61ro9cfBaUuBfNdz56iOZAF0lcwHIDWVUGsfXNwDw3IxP1CakLua-VRN61E1UAoJk2ggAJl67-G7TUk8t7H964QY~4Bt7tgPy52m-Rrya9KjJxqOGfdSz~strTWfvCkI~NQslaj8DPn9yEoMs9k3wZxjSMRNJ6MGISAMRfKlx4IcjF9ZdA8UZ3MG-y2h5kawGvIYernfQPVjwuyP4FV7fgqUsKbT-IOAiw5tvOVX03u2J4PQFi3PLIw__",
        name: "Lawrence Ojaideh",
        about: "Secretary General"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/beb8/dcc9/2c97414350d32b734fd4509b37a2c19c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fLHLTLjs6GT5ui9tnajRj6PJFZUd1Ky-LFZeA611fThwQHtxkwSMtHs9uWH0hNQGzJRcg7RSJrmO8kV6ype09G5i2LzH9Io6dwMGOjh2r-26ULTyU8xYTfGWFCwUKct6LP18BWRGfo1QeXUkKhB81buGn-fgordegQe8eb3npwA7p4v7klBTSgUxlZXY0aBTpJGWiiUg~tZnmwByG~jE-TCG7CjxT8u6u4AVQer2SalvJf0wQT3l8qLPYOqSer3pXUUSdHCIqNLO4XxJn0Gnqdbpl~zpkF4PP7Aur1LXhXYrQe5NULrW5c49NtgHqtRuk4Egc9k6eHvn7HzoSfjWIw__",
        name: "Tola Ariyo",
        about: "Head of Legal & Compliance"
    }
    
    

]


export default function AboutPage() {
    return(
        <>
            <PageHeader
                title={aboutData.header.title}
                image={aboutData.header.image}
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

                <br/><br/><br/><br/><br/><br/><br/><br/><br/>


                <Section name="people">
                    <h2 className="section-title">Our People</h2>
                    <br/><br/><br/><br/>


                    <div className="listing">
                        {
                            people.map((e, i)=>(  
                                <figure key={i}>
                                    {/* <div className="img-wrapper">
                                        <Image
                                            src={e.image}
                                            alt={e.name}
                                            width={221.2}
                                            height={246}
                                        />
                                    </div> */}

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