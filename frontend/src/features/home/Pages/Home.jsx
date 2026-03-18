import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Collection from '../components/Collection/Collection'
import Product from '../components/Product/Product'
import CollectionBanner from '../components/CollectionBanner/CollectionBanner'
import FeatureCall from '../components/FeatureCall/FeatureCall'
import InstagramFeed from '../components/InstagramFeed/InstagramFeed'
import Promotion from '../components/Promotion/Promotion'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Collection />
      <Product />
      <CollectionBanner />
      <FeatureCall />
      <InstagramFeed />
      <Promotion />
    </div>
  )
}

export default Home