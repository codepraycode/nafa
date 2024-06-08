import React from 'react'
import Section from './UI/Section'
import AppLink from './UI/AppLink'



function Breadcrumb() {
    // TODO: Read current url and use paths to create breadcrumb
    return (
        <ul role='list' className='breadcrumb'>
            <li>
                <AppLink href={"/"} className='text-w-600'>Home</AppLink>
            </li>
            <li>
                <AppLink href={"/about-us"}>About Us</AppLink>
            </li>
            {/* <li>
                <AppLink href={"/about-us/history"}>History of American Football in Nigeria</AppLink>
            </li> */}
        </ul>
    )
}




interface PageHeader {
    title: string,
    text?: string,
    image?: string,
    small?: boolean,
}

export default function PageHeader(props:PageHeader) {
    return (
        <Section
            name='page-header'
            style={{
                backgroundImage: `linear-gradient(
                    269.67deg, 
                    #FFFFFF 0.29%, 
                    #355920 30.51%, 
                    #000000 70.07%
                    ),
                    url(${props.image})`
            }}
        >
            <Breadcrumb />
            <br/><br/>

            <h1 data-small={props.small && "true"}>{props.title}</h1>
            {props.text && (<>
                <br/><br/>
                <p>{props.text}</p>
            </>)}
        </Section>
    )
}
