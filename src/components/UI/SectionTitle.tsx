
export default function SectionTitle({title}:{title:string}) {
    return (
        <h2
            className='ff-montserrat fw-600 fs-24 lh-29 text-clr-2 text-uppercase underline'
        >
            {title}
        </h2>
    )
}

export function SectionTitle2({title, className}:{title:string, className?:string}) {
    return (
        <h2
            className={
                className ||
                'ff-montserrat fw-600 lg-fs-40 fs-20 lg-lh-48_76 lh-24_38 text-clr-2 text-uppercase underline'
            }
        >
            {title}
        </h2>
    )
}