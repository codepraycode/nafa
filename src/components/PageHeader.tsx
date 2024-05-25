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
    image?: string
}

export default function PageHeader(props:PageHeader) {
    return (
        <Section
            name='page-header'
            style={{
                backgroundImage: `url(${props.image})`
            }}
        >
            <Breadcrumb />
            <br/><br/>

            <h1>{props.title}</h1>
        </Section>
    )
}
