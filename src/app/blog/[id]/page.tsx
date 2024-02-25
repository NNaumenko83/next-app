import { get } from 'https'
import { Metadata } from 'next'
import React from 'react'

type PostProps = {
    params: {
        id: string
    }
}

export async function generateMetadata({
    params: { id },
}: PostProps): Promise<Metadata> {
    const post = await getData(id)
    return {
        title: post.title,
    }
}

async function getData(id: string) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 60 },
    })
    return res.json()
}

async function Post({ params: { id } }: PostProps) {
    const post = await getData(id)

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post
