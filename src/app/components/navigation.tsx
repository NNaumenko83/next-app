'use client'

import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { text } from 'stream/consumers'

type NavLink = {
    label: string
    href: string
}
type NavigationProps = {
    navLinks: NavLink[]
}

function Navigation({ navLinks }: NavigationProps) {
    const pathname = usePathname()
    return (
        <nav className="flex gap-4 mx-auto">
            {navLinks.map(navLink => (
                <Link
                    key={navLink.label}
                    href={navLink.href}
                    className={clsx({
                        ['text-amber-600']: pathname === navLink.href,
                    })}
                >
                    {navLink.label}
                </Link>
            ))}
        </nav>
    )
}

export default Navigation
