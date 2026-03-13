import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Collection from '../components/Collection/Collection'
import Product from '../components/Product/Product'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Collection />
      <Product />
    </div>
  )
}

export default Home