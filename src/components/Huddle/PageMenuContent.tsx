'use client';
import React from 'react'
import huddleData from "@/data/huddle.json";
import Section from '../UI/Section'
import PageMenu from './PageMenu'
import TextMunch from '../TextMucnh';
import Custom404 from '@/app/not-found';
import { PageData } from './types';
import HuddleItems from './HuddleItems';
import { usePath } from '@/hooks/usePath';


function HuddlePageContent({data}:{data: PageData | null}) {

    if (!data){
        return (
            <Custom404 />
        );
    }

    return (
        <>
            <Section name="huddle-menu">
                <PageMenu />

                <div className='ff-gotham lh-37'>
                    <h2 className='fw-700 lg-fs-48 fs-20 lh-62 text-clr-8'>
                        {data.title}
                    </h2>

                    <br/>

                    <p
                        className='fw-400 lg-fs-20 fs-14 text-justify text-clr-dark'
                    >
                        <TextMunch text={data.paragraph}/>
                    </p>

                </div>
            </Section>

            <br/><br/><br/><br/>
            
            <p className="ff-montserrat fw-400 lg-fs-20 fs-14 lh-37 text-clr-dark">
                {/* {data.text} */}
                <TextMunch text={data.text}/>
            </p>

            <br/><br/><br/><br/><br/><br/>

            <HuddleItems data={data.items} title={data.itemTitle}/>
            
        </>
    )
}


export default function PageContent() {
    // const pageData:PageData = huddleData.sectionData.default;

    let pageData: PageData | null = null;

    const {recent: aspect} = usePath();

    // console.log(aspect);

    switch (aspect) {
        case 'health':
            pageData = huddleData.sectionData.health;
            break;
        case 'unity':
            pageData = huddleData.sectionData.unity;
            break;
        case 'diversity':
            pageData = huddleData.sectionData.diversity;
            break;
        case 'development':
            pageData = huddleData.sectionData.development;
            break;
        case 'livelihood':
            pageData = huddleData.sectionData.livelihood;
            break;
        case 'entertainment':
            pageData = huddleData.sectionData.entertainment;
            break;
        case "the-huddle-way":
            pageData = huddleData.sectionData.default;
            break;
        default:
            break;
    }

    return (
        <Section name="page-content">
            <HuddlePageContent data={pageData} />
        </Section>
    )
}
