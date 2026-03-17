import { instagramPosts as data } from '../data/instagramPosts.js'
import { useContext, createContext, useEffect, useState } from 'react'
    
export const InstagramFeedContext = createContext()

export const InstagramFeedProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(data)
    }, [])

    return (
        <InstagramFeedContext.Provider value={posts}>
            {children}
        </InstagramFeedContext.Provider>
    )
}
