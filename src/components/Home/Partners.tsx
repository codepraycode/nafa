import Image from "next/image";
import Section from "../UI/Section";
import commonData from "@/data/common.json";

const data = commonData.partners


export default function Partners() {
    return (
        <Section
            name="partners"
        >
            <h2
                className="fw-500 fs-24 lh-24 text-clr-dark text-center"
            >
                {data.title}
            </h2>

            <br/><br/><br/>


            <ul role="list">
                {
                    data.items.map((item, i) => (
                        <li key={i} title={item.alt}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                            />
                        </li>
                    ))
                }
            </ul>

        </Section>
    )
}
