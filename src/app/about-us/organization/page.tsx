import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/UI/Section";
import UnderConstruction from "@/components/UnderConstruction";


export default function OrganizationPage() {
    return(
        <>
            <PageHeader
                title='OUR ORGANIZATION STRUCTURE'
                image={"https://s3-alpha-sig.figma.com/img/07e6/a5bc/cd8f7723ee656e49bc4999b4e5ba9ace?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIZx7Zue-ZAlqTGpxq-otfQS4iz-05V7f3qEM6xgIqa4vqd3ug79iz~7iyMam0pt89u8vGiFYll64kiFgFUZxe5Q3K9cfgXSAOucga8ADCiLVgioB6CjVW2SZGk1xGAHhr30XlHmoPRE8obNW11I4DaINvgB0Y2-v~9iptyWl0PYNUFuj3iz7yQ78Ug64b~En3mUCVDmdcKN7skLkxp931DZx34Vn~yOPVR7eBFn4LjTnlUIDnvAXn2vDZppEy~rkPI2j35CK2Xm~fgmQZuQra8m5degQB0d2huN0K6NVWmV71O1nWYgov50hIZjAYiMcgivBgE5Dp9embfeULn~TA__"}
                // small
            />

            <Section name='page-content'>
                <UnderConstruction/>
            </Section>

            <Partners />
        </>
    )
}