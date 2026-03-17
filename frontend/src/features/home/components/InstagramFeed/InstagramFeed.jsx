import React from 'react'
import './InstagramFeed.css'
import { useInstagramFeed } from '../../../../hooks/instagramFeed.hooks'

const InstagramFeed = () => {
    const { posts } = useInstagramFeed();

    return (
        <div className='instagram-feed-container'>
            <div className='instagram-feed-header'>
                <p>Follow us on Instagram</p>
                <span>@cein_official</span>
            </div>
            
            <div className='instagram-feed-grid'>
                {posts && posts.map((post) => (
                    <a 
                        key={post._id} 
                        href={post.instagramUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='instagram-post-card'
                    >
                        <img src={post.image} alt={post.caption || 'Instagram post'} />
                        <div className='instagram-overlay'>
                            <p>{post.caption}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default InstagramFeed