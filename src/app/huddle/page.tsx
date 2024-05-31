import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/UI/Section";
import huddleData from "@/data/huddle.json";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";

export default function HuddlePage() {
    return (
        <>
            <PageHeader
                title={huddleData.header.title}
                image={huddleData.header.image.src}
            />


            <Section name="page-content">


                <br/>
                <p className="huddle-title">
                    {huddleData.goals.text}
                </p>
                <br/><br/><br/><br/><br/><br/>

                <Section
                    name="huddle-goals"
                >
                    {
                        huddleData.goals.items.map((item, i)=>(
                            <article key={i}>
                                <Link href={"#" + slugify(item.title)}
                                    className="_front"
                                    style={{backgroundColor: item.bg}}
                                >
                                    <h3>{item.heading.map((e,i)=>(
                                        <>
                                            {e}
                                            {(i !== item.heading.length -1) && <br/>}
                                        </>
                                    ))}</h3>
                                    <br/><br/>

                                    <div className="img-wrapper">
                                        <Image
                                            src={item.image.src}
                                            alt={item.title}
                                            width={item.image.width}
                                            height={item.image.height}
                                        />
                                    </div>

                                    <br/><br/>

                                    <Link href="#" className="btn btn-light">
                                        Learn More
                                    </Link>
                                </Link>

                                <Link href={"#" + slugify(item.title)}
                                    className="_back"
                                >
                                    {/* <h3>
                                        <b>{item.title}</b>: {item.heading}
                                    </h3> */}
                                    <h3><b>{item.title}</b>: {item.heading.map((e,i)=>(
                                        <>
                                            {e}
                                            {(i !== item.heading.length -1) && <br/>}
                                        </>
                                    ))}</h3>
                                    <br/><br/>

                                    <p>{item.text}</p>
                                </Link>
                            </article>
                        ))
                    }
                </Section>
            </Section>

            <Partners/>
        </>
    )
}
