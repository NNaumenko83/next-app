import Link from 'next/link'
import React from 'react'
import Container from './container'
import Navigation from './navigation'

type HeaderProps = {}

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
]

function Header({}: HeaderProps) {
    return (
        <header className="py-2 bg-slate-900 text-gray-50">
            <Container>
                <Navigation navLinks={navItems} />
            </Container>
        </header>
    )
}

export default Header
