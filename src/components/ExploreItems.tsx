import Link from "next/link";
import { PageDataItem } from "./Huddle/types";
import Section from "./UI/Section";
import { SectionTitle2 } from "./UI/SectionTitle";



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

                        <div
                            className="bg-light"
                        >
                            <h3
                                className="ff-montserrat fw-500 lg-fs-24 fs-18 lh-24 text-clr-2"
                            >
                                {item.title}
                            </h3>

                            <p
                                className="ff-montserrat fw-500 fs-14 lh-24 text-clr-3"
                            >
                                {item.text}
                            </p>

                            <Link
                                className="btn btn-light ff-inter fw-500 fs-14 lh-24"
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
            <SectionTitle2
                title={title}
                className='ff-montserrat fw-600 lg-fs-40 fs-20 lg-lh-48_76 lh-24_38 text-clr-2 text-capitalize underline'
            />

            <ItemListing
                data={data as PageDataItem[]}
            />
        </Section>
    )
}