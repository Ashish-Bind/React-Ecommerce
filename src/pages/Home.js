import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'
import Trusted from '../components/Trusted'
import FeaturedProduct from '../components/FeaturedProduct'

const data = {
  name: 'FlixZone Store',
}

const Home = () => {
  return (
    <>
      <HeroSection name={data.name} />
      <FeaturedProduct />
      <Service />
      <Trusted />
    </>
  )
}

export default Home
