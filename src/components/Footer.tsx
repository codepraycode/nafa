import Logo from '@/components/Logo'
import AppLink from '@/components/UI/AppLink';

export default function Footer() {
    return (
        <footer className='bg-6 text-clr-3'>


            <div className="footer-wrapper">
                <Logo />

                <nav>
                    <div>
                        <h3
                            className='fw-600 lg-fs-24 fs-18 lh-24 text-clr-dark'
                        >
                            Explore
                        </h3>
                        {/* <br/> */}
                        <ul role='list' className='text-decoration-none fw-400 lg-fs-20 fs-14 lh-16 lg-lh-24'>
                            <li><AppLink href={"/"}>Tournaments & Events</AppLink></li>
                            <li><AppLink href={"/"}>About NAFA</AppLink></li>
                            <li><AppLink href={"/"}>News</AppLink></li>
                            <li><AppLink href={"/"}>Schedule</AppLink></li>
                            <li><AppLink href={"/"}>Videos</AppLink></li>
                        </ul>
                    </div>

                    <div>
                        <h3
                            className='fw-600 lg-fs-24 fs-18 lh-24 text-clr-dark'
                        >
                            Also Visit
                        </h3>
                        <ul role='list' className='text-decoration-none fw-400 lg-fs-20 fs-14 lh-16 lg-lh-24'>
                            <li><AppLink href={"/"}>All stories & topics</AppLink></li>
                            <li><AppLink href={"/"}>Reports & Documents</AppLink></li>
                            <li><AppLink href={"/"}>Jobs & Career</AppLink></li>
                            <li><AppLink href={"/"}>Contact NAFA</AppLink></li>
                        </ul>
                    </div>
                </nav>


                
                <ul role='list' className='socials' >
                    <li>
                        <AppLink href="/" style={{backgroundImage:"url(/icons/twitter.png)"}}>
                            Twitter
                        </AppLink>
                    </li>
                    <li>
                        <AppLink href="/" style={{backgroundImage:"url(/icons/instagram.png)"}}>
                            Instagram
                        </AppLink>
                    </li>
                    <li>
                        <AppLink href="/" style={{backgroundImage:"url(/icons/linkedin.png)"}}>
                            AppLinkedin
                        </AppLink>
                    </li>
                    <li>
                        <AppLink href="/" style={{backgroundImage:"url(/icons/facebook.png)"}}>
                            Facebook
                        </AppLink>
                    </li>
                    <li>
                        <AppLink href="/" style={{backgroundImage:"url(/icons/youtube.png)"}}>
                            Youtube
                        </AppLink>
                    </li>
                </ul>            


                <ul role='list' className='footer_extras text-decoration-none fw-400 lg-fs-16 fs-14 lg-lh-19 lg-lh-16 text-clr-3'>
                    <li>
                        <AppLink href="/">
                            Terms of service
                        </AppLink>
                    </li>
                    <li>
                        <AppLink href="/">
                            Data protection portal
                        </AppLink>
                    </li>
                    <li>
                        <AppLink href="/">
                            Downloads
                        </AppLink>
                    </li>
                    <li>
                        <AppLink href="/">
                            Manage preferences
                        </AppLink>
                    </li>
                </ul>
            
                <p className="fw-400 lg-fs-16 fs-14 lg-lh-19 lg-lh-16 text-clr-3">
                    Copyright 2024 NAFA. All rights reserved.
                </p>

                <p>
                    Cookie Settings
                </p>
            </div>



        </footer>
    )
}
