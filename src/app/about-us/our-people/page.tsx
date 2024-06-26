import { HighlightItem, Highlights } from "@/components/About/Highlights";
import { People } from "@/components/About/People";
import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/UI/Section";
import UnderConstruction from "@/components/UnderConstruction";

const highlightitems: HighlightItem[] = [
    {
        bgClr: 'bg-1',
        title: ['History of American', 'Football In Nigeria'],
        cta: {
            label: 'Learn More',
            link: '/'
        },
        paragraph: [
            'Since the 2011s American football has been an interest to African youth, as their counterparts in the Western World have been making wave in the sport over the years.'
        ]
    },
    {
        bgClr: 'bg-2',
        title: ['Organization', 'Structure'],
        cta: {
            label: 'Learn More',
            link: '/'
        },
        paragraph: [
            'Established in 2019, NAFA was created to increase the number of opportunities for people through the game of American football.'
        ]
    },
    {
        bgClr: 'bg-11',
        title: ['The HUDDLE', 'Way'],
        cta: {
            label: 'Learn More',
            link: '/'
        },
        paragraph: [
            'We exist to provide a source of livelihood, bridge the educational gap in the society and promote interest for the sport in women. American football is emerging as one of the keys to holistic social development as...'
        ]
    },
];

export default function OurPeoplePage() {
    return(
        <>
            <PageHeader
                title={
                    <span className='lg-fs-128 fs-48 lg-lh-117 lh-43 text-uppercase'>
                        Our People
                    </span>
                }
                image={"https://s3-alpha-sig.figma.com/img/3d18/82bd/d050b3026ea9351594cc14b2fd3d21d2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=epx3Z0UXaBVE8bR5QqEQzjnUPPKLlRyuLyLfidQVvn7ruT16cutYN-h53S1pnUeZX0SXY~S4Ewc~qJqTPKucPLdgELrFLmrcugiOWiJ02c8lx-IMgBGLVEHJ0xo2L4YgBfLgpD~rWUZH3qntOZ3YfBy4gf0sz-EM8cIcho7J9qTG5CuYVMrQcfgBoYi9uE3EtsYeV7Cx4ZSzTIBhK5t0MieqS6vW~8d2wJWto-D-he5ZbNnijrWYuQkDdUvCTNBMG6eRLeuJw-GALqDbyeTJFn~6y6qI1BOCp5Z~zws3HgQdIsGrmEiPpZjWWwzb31OSAuq9Hyd~AchQecv0oHVHNg__"}
                // small
            />

            <Section name='page-content'>
                <UnderConstruction/>


                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Highlights
                    title="Explore More"
                    items={highlightitems}
                />

                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <People />
            </Section>

            <Partners />
        </>
    )
}
