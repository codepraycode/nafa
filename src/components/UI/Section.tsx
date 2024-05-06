import React from 'react'



interface SectionProps {
    name: string,
    children: React.ReactNode
}


export default function Section(props: SectionProps) {

    const className = `${props.name}`;

    const wrapperClassName = `${props.name}-wrapper`
    return (
        <section className={className}>
            <div className={wrapperClassName}>
                { props.children }
            </div>
        </section>
    )
}
