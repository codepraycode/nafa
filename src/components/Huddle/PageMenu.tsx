'use client';
import React from 'react'
import huddleData from "@/data/huddle.json";
import Link from 'next/link';
import { slugifyLink } from '@/utils/slugify';
import { usePathname } from 'next/navigation';


const pagePath = "/about-us/the-huddle-way/"
export default function PageMenu() {

    const current_path = usePathname();
    
    return (
        <ul role="list" className="huddle-list">
            {
                huddleData.sections.map((item, i)=>{

                    if (!item) return null;
                    
                    const firstLetter = item.text.charAt(0);
                    const rlink = slugifyLink(item.text, pagePath);

                    
                    return (
                        <li
                            key={i}
                            style={{
                            backgroundImage: `linear-gradient(
                                269.67deg, 
                                #FFFFFF 0.29%, 
                                #355920 30.51%, 
                                #000000 70.07%
                                ),
                                url(${item.image.src})`
                        }}
                        >
                            <Link
                                href={rlink}
                                scroll={false}
                                data-active={current_path.includes(rlink)}
                                className='lh-37 text-clr-light text-decoration-none'
                            >
                                <b
                                    className='ff-gotham fw-700 lg-fs-96 fs-40'
                                >
                                    {firstLetter}
                                </b>

                                <hr/>

                                <span
                                    className='ff-poppins fw-500 lg-fs-48 fs-20'
                                >
                                    {item.text}
                                </span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
