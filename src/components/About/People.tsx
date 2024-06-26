import Section from "../UI/Section";
import { SectionTitle2 } from "../UI/SectionTitle";



const people = [
    
    {
        image:"https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/89102781-e8eb-43db-b7b7-3e8042737068_86025eea815a9dfaa385286a5821b6df.jpeg",
        name: "Babajide Akeredolu",
        about: "President and Acting BOT Chairman"
    },
    {
        image: "https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/ba29fe41-a680-4432-80fd-5fc8ca2ac437_7dde1799300944f039c60d1e67d6d889.jpeg",
        name: "David Obatolu",
        about: "Vice President"
    },
    {
        image: "https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/dfbd2712-a3e0-487d-9849-0da44d8d6210_280904092ffcb35ee0c9ee1a8d496c0d.jpeg",
        name: "Ms. Nancy Damhindi",
        about: "Head of HR and Secretary to the Board of Trustees"
    },
    {
        image: "https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/0aee5f7a-d005-4ba3-af1e-cc6293679916_261fde1df9b5a116e68776049ad3825c.png",
        name: "Lawrence Ojaideh",
        about: "Secretary General"
    },
    {
        image: "https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/7ea95375-bc67-4510-a700-0cb9d1ade4c7_2c97414350d32b734fd4509b37a2c19c.png",
        name: "Tola Ariyo",
        about: "Head of Legal & Compliance"
    }
]

export function People() {
    return (
        <Section name="people">

            <SectionTitle2
                title="Our People"
            />
            <br/><br/><br/><br/>


            <div className="listing">
                {
                    people.map((e, i)=>(  
                        <figure key={i}>
                            <div
                                className="img bg-8"
                                title={e.name}
                                style={{
                                    backgroundImage: `url(${e.image})`
                                }}
                            />

                            <br/>

                            <figcaption
                                className="lg-text-center text-start text-clr-dark ff-inter"
                            >
                                <b
                                    className="fw-600 lg-fs-20 fs-19 lg-lh-24 lh-28"
                                >
                                    {e.name}
                                </b>

                                {/* <br/> */}

                                <span
                                    className="fw-400 lg-fs-19 fs-16 lh-28"
                                >
                                    {e.about}
                                </span>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>

        </Section>
    )
}