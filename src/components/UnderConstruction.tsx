import Section from "./UI/Section";

export default function UnderConstruction() {
    return (
        <Section
            name='under-construction'
        >
            <h1>UNDER<br/>CONSTRUCTION</h1>
            <p>Please Bear with us</p>


            <div className="ud-img" style={{backgroundImage: "url(/under-construction.jpeg)"}}/>
        </Section>
    )
}
