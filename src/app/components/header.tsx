import Link from 'next/link'
import React from 'react'
import Container from './container'

type HeaderProps = {}

function Header({}: HeaderProps) {
    return (
        <header className="py-2 bg-slate-900 text-gray-50">
            <Container>
                <nav className="flex gap-4 mx-auto">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                </nav>
            </Container>
        </header>
    )
}

export default Header
