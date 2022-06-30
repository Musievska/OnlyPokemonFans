import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export const Navbar = () => {
    return (
        <div>
            <Link href='/'>
                <Image
                    src='https://www.seekpng.com/png/detail/1-15149_pokemon-logo-png-pokemon-go-logo-png.png'
                    alt='navbar pokemon logo'
                />         
            </Link>
        </div>
    )
}