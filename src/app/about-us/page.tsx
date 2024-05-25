import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/UI/Section";
import aboutData from "@/data/about.json";
import Image from "next/image";



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
                        <h2 className="section-title">Our Vision</h2>
                        <br/><br/>
                        <p>
                            <b>
                                Our vision is to create increased opportunities for the African continent through American Football.  Opportunities ranging from free healthcare and enhanced access to health care, to educational scholarships through sport, provisions of sustainable means of livelihood and exposure to diverse cultures and international leagues and tournaments through NAFA tours. We will be the first organization with clear intent to integrate Nigeria and Africa with the National Football League (NFL) in America and other organizations across the world.
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
                        <h2 className="section-title">Our Mission</h2>
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
                    <ol>
                        <li>Promote contact and non-contact American Football competitions.</li>
                        Develop, manage and grow the American Football League and brand within Africa, for international competition (2 years plan).
                        Develop, manage and grow the American Football League and brand for international competition (5 years plan).
                        Develop, manage and grow the American Football League in Nigeria.
                        Provide opportunities for engagement and development to people of all ages, background and abilities within American Football.
                        The regulation of the game on and off the field of play through oversight of its rules;
                        The representation of the Nigerian game to national and international partners, be it sporting organizations, federations or commercial interests.
                    </ol>
                </Section>


            </Section>

            <Partners/>
        </>
    )
}