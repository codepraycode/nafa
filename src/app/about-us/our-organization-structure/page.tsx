import Partners from "@/components/Home/Partners";
import PageHeader from "@/components/PageHeader";
import TextMunch from "@/components/TextMucnh";
import Section from "@/components/UI/Section";
import UnderConstruction from "@/components/UnderConstruction";


export default function OrganizationPage() {
    return(
        <>
            <PageHeader
                title={
                    <span className='lg-fs-100 fs-40 lg-lh-91 lh-36'>

                        <TextMunch
                            text={['OUR ORGANIZATION', 'STRUCTURE']}
                        />
                    </span>
                }
                image={"https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/fc7c7046-56ec-404d-85b1-a099657d10a2_cd8f7723ee656e49bc4999b4e5ba9ace.jpeg"}
                // small
            />

            <Section name='page-content'>
                <UnderConstruction/>
            </Section>

            <Partners />
        </>
    )
}