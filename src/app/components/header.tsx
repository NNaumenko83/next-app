import Link from 'next/link'
import React from 'react'

type HeaderProps = {}

function Header({}: HeaderProps) {
    return (
        <header>
            header
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
        </header>
    )
}

export default Header
