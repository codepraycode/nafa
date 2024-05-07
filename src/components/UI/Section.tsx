import React from 'react'



export interface SectionProps {
    name: string,
    children: React.ReactNode,
    noWrapper?:boolean
}


export default function Section(props: SectionProps) {

    const className = `${props.name}`;

    const wrapperClassName = `${props.name}-wrapper`
    return (
        <section className={className}>

            {
                props.noWrapper ? props.children : (
                    <div className={wrapperClassName}>
                        { props.children }
                    </div>
                )
            }
        </section>
    )
}
