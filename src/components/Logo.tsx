import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div className="logo">
        <Link href={"/"}>
            <Image
                src={"/logo.png"}
                alt='NAFA LOGO'
                width={100}
                height={100}
            />
        </Link>
    </div>
  )
}
