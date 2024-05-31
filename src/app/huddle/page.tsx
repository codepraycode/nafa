import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import TextMunch from "@/components/TextMucnh";
import Section from "@/components/UI/Section";
import huddleData from "@/data/huddle.json";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HuddlePage() {
    return (
        <>
            <PageHeader
                title={huddleData.header.title}
                image={huddleData.header.image.src}
            />


            <Section name="page-content">


                <Section name="huddle-menu">
                    <ul role="list" className="huddle-list">
                        {
                            huddleData.sections.map((item, i)=>{

                                if (!item) return null;
                                
                                const firstLetter = item.text.charAt(0);

                                
                                return (
                                    <li
                                        key={i}
                                        // style={{
                                        //     backgroundImage: `url(${item.image})`
                                        // }}
                                    >
                                        <Link href={"#"}>
                                            <b>{firstLetter}</b>
                                            <hr/>
                                            <span>{item.text}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div>
                        <h2>
                            {huddleData.default.title}
                            
                        </h2>
                        <br/><br/>
                        <p>
                            <TextMunch text={huddleData.default.paragraph}/>
                        </p>
                    </div>
                </Section>

                <br/><br/><br/><br/>
                <p className="huddle-title">
                    {/* {huddleData.default.text} */}
                    <TextMunch text={huddleData.default.text}/>
                </p>
                <br/><br/><br/><br/><br/><br/>

                <Section
                    name="huddle-goals"
                >
                    {
                        huddleData.default.items.map((item, i)=>(
                            <article key={i}>
                                <Link href={"#" + slugify(item.title)}
                                    className="_front"
                                    style={{backgroundColor: item.bg}}
                                >
                                    <h3><TextMunch text={item.heading}/></h3>
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

                                    <button className="btn btn-light">
                                        Learn More
                                    </button>
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
