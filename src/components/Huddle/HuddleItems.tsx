import Image from "next/image";
import TextMunch from "../TextMucnh";
import { slugifyLink } from "@/utils/slugify";
import { PageDataItem, PageDataItemHighlight } from "./types";
import Link from "next/link";
import Section from "../UI/Section";
import ExpoloreItems from "../ExploreItems";
import React from "react";




function ItemHighlight({data}:{data: PageDataItemHighlight[]}) {
    return (
        <>
            {
                data.map((item, i)=>(
                    <article
                        key={i}
                        className="ff-inter"
                    >
                        <Link href={slugifyLink(item.title, "#")}
                            className="_front"
                            style={{backgroundColor: item.bg}}
                        >
                            <h3
                                className="fw-400 fs-28 lh-33 text-clr-light"
                            >
                                <TextMunch text={item.heading}/>
                            </h3>

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

                            <button className="btn btn-light d-flex align-center">
                                Learn More
                            </button>
                        </Link>

                        <Link href={slugifyLink(item.title, "#")}
                            className="_back"
                        >
                            <h3
                                className="fw-400 fs-28 lh-33"
                            >
                                <b
                                    className="fw-600"
                                >
                                    {item.title}
                                </b>:{" "}
                                {item.heading.map((e,i)=>(
                                    <React.Fragment key={i}>
                                        {e}
                                        {(i !== item.heading.length -1) && <br/>}
                                    </React.Fragment>
                                ))}
                            </h3>

                            <br/><br/>

                            <p
                                className="fw-400 fs-20 lh-28 text-clr-dark"
                            >
                                {item.text}
                            </p>
                        </Link>
                    </article>
                ))
            }
        </>
    )
}




export default function HuddleItems({data, title}:{data: PageDataItem[], title?:string}) {

    if (title) {
        return (
            <ExpoloreItems title={title} data={data as PageDataItem[]}/>
        )
    }

    return (
        <Section
            name="huddle-goals"
        >
            <ItemHighlight data={data as PageDataItemHighlight[]}/>
        </Section>
    )

}
