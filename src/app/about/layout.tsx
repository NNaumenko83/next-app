import Link from 'next/link'
import React from 'react'

type AboutLayoutProps = {
    children: React.ReactNode
}

function AboutLayout({ children }: AboutLayoutProps) {
    return (
        <div className="w-full flex flex-col items-center">
            <h1>About us</h1>
            <ul className="flex gap-3">
                <li>
                    <Link href="/about/contacts">Contacts</Link>
                </li>
                <li>
                    <Link href="/about/team"> Team</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}

export default AboutLayout
