
export default function SectionTitle({title}:{title:string}) {
    return (
        <h2
            className='fw-600 fs-24 lh-29 text-clr-2 text-uppercase underline'
        >
            {title}
        </h2>
    )
}