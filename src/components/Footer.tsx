import Logo from '@/components/Logo'
import AppLink from '@/components/UI/AppLink';

export default function Footer() {
    return (
        <footer>


            <div className="footer-wrapper">
                <Logo />

                <nav>
                    <div>
                        <h3>Explore</h3>
                        <ul role='list'>
                            <li><AppLink href={"/"}>Tournaments & Events</AppLink></li>
                            <li><AppLink href={"/"}>About NAFA</AppLink></li>
                            <li><AppLink href={"/"}>News</AppLink></li>
                            <li><AppLink href={"/"}>Schedule</AppLink></li>
                            <li><AppLink href={"/"}>Videos</AppLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Also Visit</h3>
                        <ul role='list'>
                            <li><AppLink href={"/"}>All stories & topics</AppLink></li>
                            <li><AppLink href={"/"}>Reports & Documents</AppLink></li>
                            <li><AppLink href={"/"}>Jobs & Career</AppLink></li>
                            <li><AppLink href={"/"}>Contact NAFA</AppLink></li>
                        </ul>
                    </div>
                </nav>


                
                <ul role='list' className='socials'>
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


                <ul role='list' className='footer_extras'>
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
            
                    <p className="copyright">
                        Copyright 2024 NAFA. All rights reserved.
                    </p>

                    <p>
                        Cookie Settings
                    </p>
            </div>



        </footer>
    )
}
