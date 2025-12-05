import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import AboutUs from '../component/AboutUs'
import OurService from '../component/OurService'
import Properties from '../component/Properties'
import ApartmentSketch from '../component/ApartmentSketch'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <OurService/>
      <Properties/>
      <ApartmentSketch/>
    </div>
  )
}

export default Home
