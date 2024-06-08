import { Highlights } from "@/components/About/Highlights";
import { People } from "@/components/About/People";
import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/UI/Section";
import UnderConstruction from "@/components/UnderConstruction";

export default function OurPeoplePage() {
    return(
        <>
            <PageHeader
                title='OUR PEOPLE'
                image={"https://s3-alpha-sig.figma.com/img/3d18/82bd/d050b3026ea9351594cc14b2fd3d21d2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=epx3Z0UXaBVE8bR5QqEQzjnUPPKLlRyuLyLfidQVvn7ruT16cutYN-h53S1pnUeZX0SXY~S4Ewc~qJqTPKucPLdgELrFLmrcugiOWiJ02c8lx-IMgBGLVEHJ0xo2L4YgBfLgpD~rWUZH3qntOZ3YfBy4gf0sz-EM8cIcho7J9qTG5CuYVMrQcfgBoYi9uE3EtsYeV7Cx4ZSzTIBhK5t0MieqS6vW~8d2wJWto-D-he5ZbNnijrWYuQkDdUvCTNBMG6eRLeuJw-GALqDbyeTJFn~6y6qI1BOCp5Z~zws3HgQdIsGrmEiPpZjWWwzb31OSAuq9Hyd~AchQecv0oHVHNg__"}
                // small
            />

            <Section name='page-content'>
                <UnderConstruction/>


                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Highlights />

                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <People />
            </Section>

            <Partners />
        </>
    )
}
