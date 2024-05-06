import Image from "next/image";
import Section from "../UI/Section";


const partners = [
    {
        name: "Coca-cola",
        image: "/partners/coca-cola.png"
    },
    {
        name: "Coca-cola",
        image: "/partners/coca-cola.png"
    },
    {
        name: "Coca-cola",
        image: "/partners/coca-cola.png"
    },
    {
        name: "Coca-cola",
        image: "/partners/coca-cola.png"
    }
]
export default function Partners() {
    return (
        <Section
            name="partners"
        >
            <h2 className="section-title">Partners</h2>

            <br/><br/><br/>


            <ul role="list">
                {
                    partners.map((item, i) => (
                        <li key={i} title={item.name}>
                            <Image
                                src="/partners/coca-cola.png"
                                alt={item.name}
                                width={100}
                                height={100}
                            />
                        </li>
                    ))
                }
            </ul>

        </Section>
    )
}
