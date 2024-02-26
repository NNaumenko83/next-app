import PostSearch from '@/app/components/PostSearch'

export const getAllPosts = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        throw new Error('Unable to fetch')
    }

    return res.json()
}

export const getPostsBySearch = async (search: string) => {
    const res = await fetch(
        `http://jsonplaceholder.typicode.com/posts?q=${search}`,
    )

    if (!res.ok) {
        throw new Error('Unable to fetch')
    }
    PostSearch
    return res.json()
}
