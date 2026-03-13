import React from 'react'
import { useCollection } from '../../../../hooks/collection.hooks'
import './Collection.css'

const Collection = () => {
    const { collection, loading, error } = useCollection();
    return (
        <div className='collection-container'>
            <div className='collection-text'>
                <p>Elevate your lifestyle with a more intelligent, superior wardrobe.<br />
                    Our range is crafted sustainably with longevity in mind.</p>
            </div>

            <div className='collection-image'>
               {
                collection.slice(0, 3).map((item)=>{
                    return(
                        <div key={item._id}>
                            <img src={item.bannerImage} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    )
                })
               }
            </div>
        </div>
    )
}

export default Collection