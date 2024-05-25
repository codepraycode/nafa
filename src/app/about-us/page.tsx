import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/UI/Section";
import aboutData from "@/data/about.json";



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
            </Section>

            <Partners/>
        </>
    )
}