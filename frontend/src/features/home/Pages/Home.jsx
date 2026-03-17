import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Collection from '../components/Collection/Collection'
import Product from '../components/Product/Product'
import CollectionBanner from '../components/CollectionBanner/CollectionBanner'
import FeatureCall from '../components/FeatureCall/FeatureCall'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Collection />
      <Product />
      <CollectionBanner />
      <FeatureCall />
    </div>
  )
}

export default Home