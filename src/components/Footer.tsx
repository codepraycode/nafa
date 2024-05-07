import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer>


            <div className="footer-wrapper">
                <Logo />

                <nav>
                    <div>
                        <h3>Explore</h3>
                        <ul role='list'>
                            <li><Link href={"/"}>Tournaments & Events</Link></li>
                            <li><Link href={"/"}>About NAFA</Link></li>
                            <li><Link href={"/"}>News</Link></li>
                            <li><Link href={"/"}>Schedule</Link></li>
                            <li><Link href={"/"}>Videos</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Also Visit</h3>
                        <ul role='list'>
                            <li><Link href={"/"}>All stories & topics</Link></li>
                            <li><Link href={"/"}>Reports & Documents</Link></li>
                            <li><Link href={"/"}>Jobs & Career</Link></li>
                            <li><Link href={"/"}>Contact NAFA</Link></li>
                        </ul>
                    </div>
                </nav>


                
                <ul role='list' className='socials'>
                    <li>
                        <Link href="/" style={{backgroundImage:"url(/icons/twitter.png)"}}>
                            Twitter
                        </Link>
                    </li>
                    <li>
                        <Link href="/" style={{backgroundImage:"url(/icons/instagram.png)"}}>
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link href="/" style={{backgroundImage:"url(/icons/linkedin.png)"}}>
                            Linkedin
                        </Link>
                    </li>
                    <li>
                        <Link href="/" style={{backgroundImage:"url(/icons/facebook.png)"}}>
                            Facebook
                        </Link>
                    </li>
                    <li>
                        <Link href="/" style={{backgroundImage:"url(/icons/youtube.png)"}}>
                            Youtube
                        </Link>
                    </li>
                </ul>            


                <ul role='list' className='footer_extras'>
                    <li>
                        <Link href="/">
                            Terms of service
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Data protection portal
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Downloads
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Manage preferences
                        </Link>
                    </li>
                </ul>
            
                    <p className="copyright">
                        Copyright 1994-2024 FIFA. All rights reserved.
                    </p>

                    <p>
                        Cookie Settings
                    </p>
            </div>



        </footer>
    )
}
