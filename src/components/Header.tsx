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

const navActionLinks = [
    "Become a member", "Login"
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
                                    <AppLink href={slugify(item)}>{item}</AppLink>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="cta">
                        <AppLink href={slugify("Become a member")} className='btn btn-primary'>Become a member</AppLink>
                        <AppLink href={slugify("login")} className='btn btn-outline'>Login</AppLink>
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
