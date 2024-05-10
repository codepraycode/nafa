import React, { HTMLAttributes } from 'react'



export interface SectionProps extends HTMLAttributes<HTMLElement> {
    name: string,
    children: React.ReactNode,
    noWrapper?:boolean,
    image?:string
}


export default function Section(props: SectionProps) {

    const {className: moreCln, noWrapper, children, ...rest} = props;

    const className = (`${props.name}` +" " + moreCln).trim();

    const wrapperClassName = `${props.name}-wrapper`


    return (
        <section
            className={className}
            {...rest}
        >

            {
                noWrapper ? children : (
                    <div className={wrapperClassName}>
                        { children }
                    </div>
                )
            }
        </section>
    )
}
