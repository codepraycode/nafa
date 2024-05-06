import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



interface LogoProps {
    second?: boolean
}


export default function Logo(props: LogoProps) {

    return (
        <div className="logo">
            <Link href={"/"}>
                <Image
                    src={props.second ? "/logo.png" : "/logo-2.png"}
                    alt='NAFA LOGO'
                    width={100}
                    height={100}
                />
            </Link>
        </div>
    )
}
