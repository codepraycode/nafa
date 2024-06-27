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
    title: string | React.ReactNode;
    text?: string | React.ReactNode;
    image?: string;
    backgroundImage?: string;
    className?: string;
    small?: boolean;

}


const defaultHeaderStyle = (image?: string) => !image ? '' : `
linear-gradient(
269.67deg, 
#FFFFFF 0.29%, 
#355920 30.51%, 
#000000 70.07%
),
url(${image})
`

export default function PageHeader(props:PageHeader) {
    return (
        <Section
            name='page-header'
            className={props.className || ''}
            style={{
                backgroundImage: props.backgroundImage || defaultHeaderStyle(props.image)
            }}
        >
            <Breadcrumb />
            <br/><br/><br/><br/>

            <h1
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
