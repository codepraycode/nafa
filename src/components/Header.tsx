'use client';
import AppLink from '@/components/UI/AppLink';
import React from 'react'
import Logo from './Logo'
import { slugifyLink as slugify } from '@/utils/slugify'


const topNavLinks = [
    "Get certified", "Enroll your program"
]

const navLinks = [
    "About NAFA", "Our Leagues", "Our Programs",
    "Resources", "Tournaments & Events"
]


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
                                    <AppLink href={slugify(item, "#")} onClick={(e)=>e.preventDefault()}>{item}</AppLink>


                                    {<ul role='list' className="submenu">
                                        <li>
                                            <h3>History of American Football in Nigeria </h3>
                                            <p>American football was introduced to Nigeria mainly through media exposure, particularly television broadcasts of NFL games and movies featuring the sport</p>
                                        </li>

                                        <hr/>
                                        <li>
                                            <h3>History of American Football in Nigeria </h3>
                                            <p>American football was introduced to Nigeria mainly through media exposure, particularly television broadcasts of NFL games and movies featuring the sport</p>
                                        </li>
                                    </ul>}
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
