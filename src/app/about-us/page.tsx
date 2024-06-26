import { HighlightItem, Highlights } from "@/components/About/Highlights";
import { People } from "@/components/About/People";
import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/UI/Section";
import { SectionTitle2 } from "@/components/UI/SectionTitle";
import { SlideCta } from "@/components/UI/Slider";
import aboutData from "@/data/about.json";
import Image from "next/image";


const highlightitems: HighlightItem[] = [
    {
        bgClr: 'bg-1',
        title: ['History of American', 'Football In Nigeria'],
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


export default function AboutPage() {
    return(
        <>
            <PageHeader
                title={
                    <span className="lg-fs-128 fs-48 lg-lh-117 lh-43">
                        {aboutData.header.title}
                    </span>
                }
                image={aboutData.header.image.src}
            />

            <Section name="page-content">

                <Section name="vision_mission">
                    <div className="bg-7 text-clr-dark">

                        <SectionTitle2
                            title="Our Vision"
                        />

                        <br/><br/>

                        <p className="ff-gotham fw-400 lg-fs-24 fs-14 lh-37 text-justify">
                            <b className="fw-700">
                                Our vision is to create increased opportunities for the African continent through American Football.
                            </b>
                            <br/><br/>
                            <span>
                                Opportunities ranging from free healthcare and enhanced access to health care, to educational scholarships through sport, provisions of sustainable means of livelihood and exposure to diverse cultures and international leagues and tournaments through NAFA tours.
                            </span>
                            <br/><br/>
                            <span>
                                We will be the first organization with clear intent to integrate Nigeria and Africa with the National Football League (NFL) in America and other organizations across the world.
                            </span>
                        </p>
                    </div>

                    <div className="bg-7 text-clr-dark">

                        <SectionTitle2
                            title="Our Mission"
                        />

                        <br/><br/>

                        <ol className="ff-gotham fw-400 lg-fs-24 fs-14 lh-37 text-justify">
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
                                Use the sport as an opportunity to promote safety culture within and outside the remits of the sports.
                            </li>
                        </ol>
                    </div>
                </Section>


                <br/><br/><br/><br/>

                <Section name="logo_label">

                    <SectionTitle2
                        title="Our Logo"
                    />
                    <br/>
                    <figure>
                        <Image
                            src={"https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/22b1c3b8-936d-4880-8331-c1baef85e703_19ebcb622408148256d9072033e6052e.png"}
                            alt="Logo Meaning"
                            width={1170}
                            height={807}
                        />
                    </figure>

                </Section>
                <br/><br/><br/><br/>

                <Section name="objectives">

                    <SectionTitle2
                        title="Objectives"
                    />
                    <br/><br/>
                    <ol className="ff-gotham fw-400 lg-fs-24 fs-14 lh-37 text-justify text-clr-dark lg-pl-3">
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

                <br/><br/><br/><br/>
                <Highlights
                    title="Explore More"
                    items={highlightitems}
                />

                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <People />

                

                <br/><br/>

                <SlideCta
                    data={{
                        cta: {
                            
                            link: '/our-people',
                            label: 'Meet Our People'
                        }
                    }}
                />


            </Section>

            <Partners/>
        </>
    )
}