import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'




const navLinks = [
    "About NAFA", "Our Leagues", "Our Programs",
    "Resources", "Tournaments & Events"
]


export default function Header() {
    return (
        <header>
            <div className="header-top">
                <ul role='list'>
                    <li><Link href="/">Get certified</Link></li>
                    <li><Link href="/">Enroll your program</Link></li>
                </ul>
            </div>


            <div className="header-wrapper">
                <Logo second/>

                <nav>

                    <ul role='list' className='links'>
                        {
                            navLinks.map((item, i)=><li key={i}><Link href={"/"}>{item}</Link></li>)
                        }
                    </ul>

                    <div className="cta">
                        <Link href={"/"} className='btn btn-primary'>Become a member</Link>
                        <Link href={"/"} className='btn btn-outline'>Login</Link>
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
