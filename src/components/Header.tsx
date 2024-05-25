'use client';
import AppLink from '@/components/UI/AppLink';
import React from 'react'
import Logo from './Logo'
import { slugifyLink as slugify } from '@/utils/slugify'
import siteData from "@/data/common.json";


const topNavLinks = [
    "Get certified", "Enroll your program"
]

const navLinks = siteData.nav;


export default function Header() {
    return (
        <header>
            <div className="header-top">
                <ul role='list'>
                    {
                        topNavLinks.map((item, i) => (

                            <li key={i}>
                                <AppLink href={slugify(item)}>{item}</AppLink>
                            </li>
                        ))
                    }
                </ul>
            </div>


            <div className="header-wrapper">
                <Logo second/>

                <nav>

                    <ul role='list' className='links'>
                        {
                            navLinks.map((item, i)=>(
                                <li key={i}>
                                    <AppLink
                                        href={item.link}
                                        // onClick={(e)=>e.preventDefault()}
                                    >
                                        {item.label}
                                    </AppLink>


                                    {
                                        item.submenu.length > 0 && (
                                            <ul role='list' className="submenu">

                                                {
                                                    item.submenu.map((sitem, i)=>(
                                                       <React.Fragment key={i}>
                                                            <li>
                                                                <AppLink href={sitem.link}>
                                                                    <h3>{sitem.label}</h3>
                                                                    {sitem.description && <p>{sitem.description}</p>}
                                                                </AppLink>
                                                            </li>
                                                            {
                                                                i !== (item.submenu.length - 1) && <hr/>
                                                            }
                                                       </React.Fragment> 
                                                    ))
                                                }

                                            </ul>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>

                    <div className="cta">
                        <AppLink href={slugify("Become a member")} className='btn btn-primary'>Become a member</AppLink>
                        <AppLink href={slugify("login")} className='btn btn-outline btn-d-md'>Login</AppLink>
                        <AppLink href={slugify("login")} className='btn btn-outline btn-d-sm'>Enroll Your Organization</AppLink>
                    </div>
                </nav>


                <label htmlFor='menu' className='menu'>
                    <input id='menu' type='checkbox'/>

                    <span>Menu</span>
                </label>
                
            </div>
        </header>
    )
}
