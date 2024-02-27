import PostSearch from '@/app/components/PostSearch'

export const getAllPosts = async () => {
    const res = await fetch('/api/posts', {
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        throw new Error('Unable to fetch')
    }

    return res.json()
}

export const getPostsBySearch = async (search: string) => {
    const res = await fetch(`/api/posts?q=${search}`)

    if (!res.ok) {
        throw new Error('Unable to fetch')
    }
    PostSearch
    return res.json()
}
