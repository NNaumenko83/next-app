import React from 'react'

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Blog | Next App',
}

async function getData() {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        throw new Error('Unable to fetch')
    }

    return res.json()
}

async function Blog() {
    const posts = await getData()
    return (
        <div>
            Blog
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog
