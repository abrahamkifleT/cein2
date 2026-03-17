import React from 'react'
import './CollectionBanner.css'
import { useCollection } from '../../../../hooks/collection.hooks'

const CollectionBanner = () => {
  const { collection, loading, error } = useCollection();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Only display the first two images as requested
  const displayedCollections = collection ? collection.slice(0, 2) : [];

  return (
    <div className='collectionBanner-container'>
      {displayedCollections.map((item, index) => {
        return (
          <div className="collectionBanner-card" key={item._id || index}>
            <img src={item.bannerImage} alt={item.name} />
            <p className="collectionBanner-slug">{item.slug}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CollectionBanner