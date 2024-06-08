import Link from "next/link";
import { PageDataItem } from "./Huddle/types";
import Section from "./UI/Section";



interface ExpoloreItemsProps {
    title: string,
    data: PageDataItem[]
}



function ItemListing({data}:{data: PageDataItem[]}) {
    return (
        <>
            {
                data.map((item, i)=>(
                    <article key={i} className="item-list-item">
                        <div
                            className="img-wrapper"
                            style={{
                                backgroundImage: `url(${item.image.src})`
                            }}
                        />


                        <div>
                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.text}
                            </p>

                            <Link
                                className="btn btn-light"
                                href={item.cta?.link || "#"}
                            >
                                {item.cta?.label || "Learn More"}
                            </Link>
                        </div>

                    </article>
                ))
            }
        </>
    )
}

export default function ExpoloreItems({title, data}: ExpoloreItemsProps) {
    return (
        <Section name="explore">
            <h2 className="section-title">{title}</h2>
            <ItemListing data={data as PageDataItem[]}/>
        </Section>
    )
}