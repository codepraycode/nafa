import Image from "next/image";
import TextMunch from "../TextMucnh";
import { slugifyLink } from "@/utils/slugify";
import { PageDataItem, PageDataItemHighlight } from "./types";
import Link from "next/link";
import Section from "../UI/Section";
import ExpoloreItems from "../ExploreItems";




function ItemHighlight({data}:{data: PageDataItemHighlight[]}) {
    return (
        <>
            {
                data.map((item, i)=>(
                    <article key={i}>
                        <Link href={slugifyLink(item.title, "#")}
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

                        <Link href={slugifyLink(item.title, "#")}
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
