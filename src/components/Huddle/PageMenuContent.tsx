'use client';
import React, { useEffect } from 'react'
import huddleData from "@/data/huddle.json";
import Section from '../UI/Section'
import PageMenu from './PageMenu'
import TextMunch from '../TextMucnh';
import Image from 'next/image';
import { slugifyLink } from '@/utils/slugify';
import Link from 'next/link';
import { redirect, usePathname, useRouter } from 'next/navigation';
import Custom404 from '@/app/not-found';
import { PageData, PageDataItem } from './types';
import HuddleItems from './HuddleItems';





function HuddlePageContent({data}:{data: PageData | null}) {

    // const router = useRouter();

    if (!data){
        return (
            <Custom404 />
        );
    }

    return (
        <>
            <Section name="huddle-menu">
                <PageMenu />

                <div>
                    <h2>
                        {data.title}
                    </h2>
                    <br/>
                    <p>
                        <TextMunch text={data.paragraph}/>
                    </p>
                </div>
            </Section>

            <br/><br/><br/><br/>
            
            <p className="huddle-title">
                {/* {data.text} */}
                <TextMunch text={data.text}/>
            </p>

            <br/><br/><br/><br/><br/><br/>

            <Section
                name="huddle-goals"
            >
                <HuddleItems data={data.items} title={data.itemTitle}/>
            </Section>
        </>
    )
}


export default function PageContent() {
    // const pageData:PageData = huddleData.sectionData.default;

    let pageData: PageData | null = null;

    const p = usePathname();
    // console.log(p.split("/").pop());
    const aspect = p.split("/").pop();

    console.log(aspect);

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
        case "huddle":
            pageData = huddleData.sectionData.default;
            break;
        default:
            break;
    }



    return <HuddlePageContent data={pageData} />
}
