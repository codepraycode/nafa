import Image from 'next/image'
import AppLink from '@/components/UI/AppLink';
import React from 'react'



interface LogoProps {
    second?: boolean
}


export default function Logo(props: LogoProps) {

    return (
        <AppLink href={"/"} className='logo'>
            <Image
                src={
                    props.second ? 
                    "/logo-2.png" :
                    "/logo.png"
                }
                alt='NAFA LOGO'
                width={100}
                height={100}
            />
        </AppLink>
    )
}
