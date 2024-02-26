'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { getAllPosts } from '../../../services/getPosts'
import PostSearch from '../components/PostSearch'

function Blog() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts().then(posts => {
            setPosts(posts)
            setLoading(false)
        })
    }, [])

    return (
        <div>
            Blog
            <PostSearch onSearch={setPosts} />
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {posts.map((post: any) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Blog
