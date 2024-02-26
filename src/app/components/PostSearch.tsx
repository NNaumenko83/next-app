'use client'

import React, { useState } from 'react'
import { getPostsBySearch } from '../../../services/getPosts'

type PostSearchProps = {
    onSearch: (value: any[]) => void
}

function PostSearch({ onSearch }: PostSearchProps) {
    const [search, setSearch] = useState('')

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()
        const posts = await getPostsBySearch(search)
        onSearch(posts)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default PostSearch
