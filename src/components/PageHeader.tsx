'use client';
import React from 'react'
import Section from './UI/Section'
import AppLink from './UI/AppLink'
import { usePathList } from '@/hooks/usePath';
import { unslugify } from '@/utils/slugify';



function Breadcrumb() {

    const list = usePathList()

    return (
        <ul role='list' className='breadcrumb'>
            {
                list.map((e, i)=>{
                    const label = e === "" ? (
                        <span className='fw-600'>
                            Home
                        </span>) : (
                        <span className='fw-400'>
                            {unslugify(e)}
                        </span>);
                    const link = "/";

                    return (
                        <li key={i}>
                            <AppLink
                                href={link}
                                className='ff-montserrat fs-14 lh-17_07 text-clr-light text-decoration-none'
                            >
                                { label }
                            </AppLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}




interface PageHeader {
    title: string | React.ReactNode,
    text?: string | React.ReactNode,
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
            <br/><br/><br/><br/>

            <h1
                data-small={props.small && "true"}
                className='ff-inria-sans fw-700 text-clr-light text-center lg-text-left'
            >
                {props.title}
            </h1>

            {
                props.text && (
                    <>
                        <br/><br/>
                        <p>{props.text}</p>
                    </>
                )
            }
        </Section>
    )
}
