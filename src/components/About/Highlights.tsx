import TextMunch from "../TextMucnh";
import AppLink from "../UI/AppLink";
import Section from "../UI/Section";
import { SectionTitle2 } from "../UI/SectionTitle";


export type HighlightItem ={
    title: string[];
    paragraph: string[];
    bgClr?:string;
    cta: {
        link: string;
        label: string;
    }
};

interface HighlightsProps {
    title: string;

    items: HighlightItem[]
}


export function Highlights({title, items}: HighlightsProps) {
    return (
        <Section name="article-highlight">

            <SectionTitle2
                title={title}
            />

            <br/><br/><br/>
            

            <div className="article-list">
                {
                    items.map((item, i)=>(
                        <article
                            className={`${item.bgClr || 'bg-8'} text-clr-light`}
                            key={i}
                        >
                            <h2 className="ff-montserrat fw-600 lg-fs-32 fs-16 lg-lh-39 lh-19">
                                <TextMunch text={item.title}/>
                            </h2>

                            <br/>

                            <p className="ff-inter fw-500 lg-fs-16 fs-14 lg-lh-24 lh-37">
                                <TextMunch text={item.paragraph}/>
                            </p>

                            <br/><br/>
                            
                            <AppLink
                                href={item.cta.link}
                                className='btn btn-light'
                            >
                                {item.cta.label}
                            </AppLink>
                        </article>

                    ))
                }
            </div>
        </Section>
    )
}
