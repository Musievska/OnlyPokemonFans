import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export const Navbar = () => {
    return (
        <div>
            <Link href="/">
                <a>
                <Image
                        src='/assets/Pokemon-Logo-PNG-Pic.png'
            alt='navbar pokemon logo'
            width={124} height={36}
            />   
                </a>
            </Link>
        </div>
        )
}