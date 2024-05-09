import Image from 'next/image'
import AppLink from '@/components/UI/AppLink';
import React from 'react'



interface LogoProps {
    second?: boolean
}


export default function Logo(props: LogoProps) {

    return (
        <div className="logo">
            <AppLink href={"/"}>
                <Image
                    src={props.second ? "/logo.png" : "/logo-2.png"}
                    alt='NAFA LOGO'
                    width={100}
                    height={100}
                />
            </AppLink>
        </div>
    )
}
