'use client';
import React from 'react'
import huddleData from "@/data/huddle.json";
import Link from 'next/link';
import { slugifyLink } from '@/utils/slugify';
import { usePathname } from 'next/navigation';



export default function PageMenu() {

    const current_path = usePathname();
    
    return (
        <ul role="list" className="huddle-list">
            {
                huddleData.sections.map((item, i)=>{

                    if (!item) return null;
                    
                    const firstLetter = item.text.charAt(0);

                    
                    return (
                        <li key={i}>
                            <Link
                                href={slugifyLink(item.text, "/huddle/")}
                                data-active={current_path.includes(slugifyLink(item.text, "/huddle/"))}
                            >
                                <b>{firstLetter}</b>
                                <hr/>
                                <span>{item.text}</span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
