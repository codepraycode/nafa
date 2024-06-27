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
            <div className="header-top bg-1 d-none lg-d-flex align-center">
                <ul role='list' className='d-flex gap-2'>
                    {
                        topNavLinks.map((item, i) => (

                            <li key={i}>
                                <AppLink
                                    href={slugify(item)}
                                    className='text-clr-light ff-inter'
                                >
                                    {item}
                                </AppLink>
                            </li>
                        ))
                    }
                </ul>
            </div>


            <div className="header-wrapper d-flex align-center">

                <Logo second/>

                <nav className='d-flex align-center'>

                    <ul role='list' className='links text-clr-dark'>
                        {
                            navLinks.map((item, i)=>(
                                <li key={i}>
                                    <AppLink
                                        href={item.link}
                                        className='ff-inria fw-400 fs-20 lh-23'
                                    >
                                        {item.label}
                                    </AppLink>


                                    {
                                        item.submenu.length > 0 && (
                                            <ul role='list' className="submenu ff-inria">

                                                {
                                                    item.submenu.map((sitem, i)=>(
                                                       <React.Fragment key={i}>
                                                            <li>
                                                                <AppLink
                                                                    href={sitem.link}
                                                                >
                                                                    <h3
                                                                        className='fw-400 fs-20 lh-23 text-clr-9'
                                                                    >
                                                                        {sitem.label}
                                                                    </h3>

                                                                    {
                                                                        sitem.description && (
                                                                        <p
                                                                            className='fw-300 fs-14 lh-19 text-clr-3 mt-11'
                                                                        >
                                                                            {sitem.description}
                                                                        </p>
                                                                    )}
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

                    <div className="d-flex gap-1 ff-inter fw-500 fs-14 lh-24">
                        <AppLink
                            href={slugify("Become a member")}
                            className='btn btn-primary'
                        >
                            Become a member
                        </AppLink>

                        <AppLink
                            href={slugify("login")}
                            className='btn btn-outline d-none lg-d-block'
                        >
                            Login
                        </AppLink>

                        <AppLink
                            href={slugify("login")}
                            className='btn btn-outline d-inline-block md-d-none lg-d-none'
                        >
                            Enroll Your Organization
                        </AppLink>
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
